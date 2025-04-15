import { Request, Response } from "express";
import { db } from "..";
import { Account, Organization, RawDealData } from "../types/global";

export default async function handleOrganizations(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET": {
      const { organizationId, accountId, status } = req.query;

      const filters: string[] = [];
      const params: any[] = [];

      if (organizationId) {
        filters.push("organizations.id = ?");
        params.push(organizationId);
      }

      if (accountId) {
        filters.push("accounts.id = ?");
        params.push(accountId);
      }

      if (status && status != "all") {
        filters.push("deals.status = ?");
        params.push(status);
      }

      const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

      const query = `
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
        ${whereClause}
        ORDER BY organizations.id, accounts.id, deals.id;
      `;

      try {
        const rawData = db.prepare(query).all(...params) as RawDealData[];

        const organizationsMap: { [key: number]: Organization } = {};

        rawData.forEach((row) => {
          const {
            organization_id,
            organization_name,
            account_id,
            account_name,
            deal_id,
            deal_value,
            deal_status,
            deal_started_at,
            deal_ended_at
          } = row;

          if (!organizationsMap[organization_id]) {
            organizationsMap[organization_id] = {
              id: organization_id,
              name: organization_name,
              created_at: row.organization_created_at,
              updated_at: row.organization_updated_at,
              accounts: []
            };
          }

          const accountIndex = organizationsMap[organization_id].accounts.findIndex(
            (acc: Account) => acc.id === account_id
          );

          if (accountIndex === -1) {
            organizationsMap[organization_id].accounts.push({
              id: account_id,
              name: account_name,
              created_at: row.account_created_at,
              updated_at: row.account_updated_at,
              deals: []
            });
          }

          const account = organizationsMap[organization_id].accounts.find(
            (acc: Account) => acc.id === account_id
          );

          account?.deals.push({
            id: deal_id,
            value: deal_value,
            status: deal_status,
            started_at: deal_started_at,
            ended_at: deal_ended_at,
            created_at: row.deal_created_at,
            updated_at: row.deal_updated_at
          });
        });

        const result: Organization[] = Object.values(organizationsMap);
        res.status(200).json(result);
      } catch (err) {
        console.error("Error fetching organizations:", err);
        res.status(500).json({ error: "Failed to fetch organizations" });
      }
      break;
    }

    case "POST": {
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
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
