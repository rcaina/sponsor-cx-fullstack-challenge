import { Request, Response } from "express";
import { db } from "..";

export default async function handleOrganizations(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET": {
      const {organizationId, accountId} = req.query;

      let query = `
        SELECT 
          organizations.id AS organization_id,
          organizations.name AS organization_name,
          organizations.created_at AS organization_created_at,
          organizations.updated_at AS organization_updated_at,
          accounts.id AS account_id,
          accounts.name AS account_name,
          accounts.created_at AS account_created_at,
          accounts.updated_at AS account_updated_at,
          deals.id AS deal_id,
          deals.value AS deal_value,
          deals.status AS deal_status,
          deals.started_at AS deal_started_at,
          deals.ended_at AS deal_ended_at,
          deals.created_at AS deal_created_at,
          deals.updated_at AS deal_updated_at
        FROM organizations
        LEFT JOIN accounts ON accounts.organizationId = organizations.id
        LEFT JOIN deals ON deals.accountId = accounts.id
      `;

      const params: any[] = [];
      if (organizationId) {
        query += ` WHERE organizations.id = ?`;
        params.push(organizationId);
      }
      if (accountId) {
        if (params.length === 0) {
          query += ` WHERE`;
        } else {
          query += ` AND`;
        }
        query += ` accounts.id = ?`;
        params.push(accountId);
      }
      try {
        const organizations = db.prepare(`
            SELECT *
            FROM organizations
            LEFT JOIN accounts ON accounts.organizationId = organizations.id
            LEFT JOIN deals ON deals.accountId = accounts.id;
        `).all();

        res.status(200).json(organizations);
      } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Failed to fetch organizations" });
      }

      break;
    }
    case "POST":
      const { name } = req.body;

      if (!name) return res.status(400).json({ error: "Name is required" });

      const query = db.prepare(`
        INSERT INTO organizations (name, created_at, updated_at)
        VALUES (?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `);

      const result = query.run(name);

      const newOrganization = {
        id: result.lastInsertRowid,
        name,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      res.status(201).json(newOrganization);

      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
