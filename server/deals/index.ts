import { Request, Response } from "express";
import Database from "better-sqlite3";

const db = new Database("./database.sqlite");

export default function handleDeals(req: Request, res: Response) {
  switch (req.method) {
    case "GET": {
      const { accountId, status, year } = req.query;
    
      const filters: string[] = [];
      const params: any[] = [];
    
      if (accountId) {
        filters.push("accountId = ?");
        params.push(accountId);
      }
    
      if (status) {
        filters.push("status = ?");
        params.push(status);
      }
    
      if (year) {
        filters.push("strftime('%Y', started_at) = ?");
        params.push(year);
      }
    
      const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
    
      const query = `
        SELECT * FROM deals
        ${whereClause}
        ORDER BY started_at DESC
      `;
    
      try {
        const deals = db.prepare(query).all(...params);
        res.status(200).json(deals);
      } catch (err) {
        console.error("Error fetching deals:", err);
        res.status(500).json({ error: "Failed to fetch deals" });
      }
      
      break;
    }    
    case "POST": {
      const { value, status, accountId, startedAt, endedAt } = req.body;

      if (!value || !status || !accountId) {
        return res.status(400).json({ error: "value, status, and accountId are required" });
      }

      const query = db.prepare(`
        INSERT INTO deals (
          value,
          status,
          accountId,
          started_at,
          ended_at,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `);

      const result = query.run(
        value,
        status,
        accountId,
        startedAt || new Date().toISOString(),
        endedAt || new Date().toISOString()
      );

      const newDeal = {
        id: result.lastInsertRowid,
        value,
        status,
        accountId,
        started_at: startedAt || new Date().toISOString(),
        ended_at: endedAt || new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      return res.status(201).json(newDeal);
    }

    default:
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
