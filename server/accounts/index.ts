import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default async function handleAccounts(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET":

      const { organizationId } = req.query;

      try {
        const accounts = await prisma.accounts.findMany({
            where: {
                organizationId,
            }
        });
        res.status(200).json(accounts);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch accounts" });
      }
      break;

    case "POST":
      try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "Name is required" });

        const newAccount = await prisma.account.create({ data: { name } });
        res.status(201).json(newAccount);
      } catch (err) {
        res.status(500).json({ error: "Failed to create account" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
