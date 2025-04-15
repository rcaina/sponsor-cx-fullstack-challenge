import { Request, Response } from "express";
import Database from "better-sqlite3";

const db = new Database("./database.sqlite");

export default function handleAccounts(req: Request, res: Response) {
  switch (req.method) {
    case "GET": {
      const { organizationId } = req.query;
      let accounts;

      if (organizationId) {
        accounts = db
          .prepare("SELECT * FROM accounts WHERE organizationId = ?")
          .all(organizationId);
      } else {
        accounts = db.prepare("SELECT * FROM accounts").all();
      }

      return res.status(200).json(accounts);
    }

    case "POST": {
      const { name, organizationId } = req.body;

      if (!name || !organizationId) {
        return res.status(400).json({ error: "Name and organizationId are required" });
      }

      const query = db.prepare(`
        INSERT INTO accounts (name, organizationId, created_at, updated_at)
        VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `);

      const account = query.run(name, organizationId);

      const newAccount = {
        id: account.lastInsertRowid,
        name,
        organizationId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      return res.status(201).json(newAccount);
    }

    default:
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
