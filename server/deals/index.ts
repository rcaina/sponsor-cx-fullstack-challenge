import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default async function handleDeals(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET":

      const { accountId } = req.query;

      try {
        const deals = await prisma.deals.findMany({
            where: {
                accountId
            }
        });
        res.status(200).json(deals);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch deals" });
      }
      break;

    case "POST":
      try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "Name is required" });

        const newDeal = await prisma.deal.create({ data: { name } });
        res.status(201).json(newDeal);
      } catch (err) {
        res.status(500).json({ error: "Failed to create account" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
