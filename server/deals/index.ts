import { Request, Response } from "express";
import Database from "better-sqlite3";

const db = new Database("./database.sqlite");

type DealRow = {
  deal_id: number;
  deal_value: string;
  deal_status: string;
  deal_started_at: string;
  deal_ended_at: string;
  deal_created_at: string;
  deal_updated_at: string;

  account_id: number;
  account_name: string;
  account_created_at: string;
  account_updated_at: string;

  organization_id: number;
  organization_name: string;
  organization_created_at: string;
  organization_updated_at: string;
};

export default function handleDeals(req: Request, res: Response) {
  switch (req.method) {
    case "GET": {
      const { accountId, status, year } = req.query;

      const filters: string[] = [];
      const params: any[] = [];

      if (accountId) {
        filters.push("deals.accountId = ?");
        params.push(accountId);
      }

      if (status) {
        filters.push("deals.status = ?");
        params.push(status);
      }

      if (year) {
        filters.push("strftime('%Y', deals.started_at) = ?");
        params.push(year);
      }

      const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

      const query = `
        SELECT 
          deals.id AS deal_id,
          deals.value AS deal_value,
          deals.status AS deal_status,
          deals.started_at AS deal_started_at,
          deals.ended_at AS deal_ended_at,
          deals.created_at AS deal_created_at,
          deals.updated_at AS deal_updated_at,
          
          accounts.id AS account_id,
          accounts.name AS account_name,
          accounts.created_at AS account_created_at,
          accounts.updated_at AS account_updated_at,

          organizations.id AS organization_id,
          organizations.name AS organization_name,
          organizations.created_at AS organization_created_at,
          organizations.updated_at AS organization_updated_at

        FROM deals
        JOIN accounts ON accounts.id = deals.accountId
        JOIN organizations ON organizations.id = accounts.organizationId
        ${whereClause}
        ORDER BY deals.started_at DESC
      `;

      try {
        const rows = db.prepare(query).all(...params) as DealRow[];

        const nestedDeals = rows.map((row) => ({
          id: row.deal_id,
          value: row.deal_value,
          status: row.deal_status,
          started_at: row.deal_started_at,
          ended_at: row.deal_ended_at,
          created_at: row.deal_created_at,
          updated_at: row.deal_updated_at,
          account: {
            id: row.account_id,
            name: row.account_name,
            created_at: row.account_created_at,
            updated_at: row.account_updated_at,
            organization: {
              id: row.organization_id,
              name: row.organization_name,
              created_at: row.organization_created_at,
              updated_at: row.organization_updated_at,
            }
          }
        }));

        res.status(200).json(nestedDeals);
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
