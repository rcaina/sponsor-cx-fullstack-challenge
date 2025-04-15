import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default async function handleOrganizations(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET":

      try {
        const organizations = await prisma.organization.findMany({
        });
        res.status(200).json(organizations);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch organizations" });
      }
      break;

    case "POST":
      try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "Name is required" });

        const newOrganization = await prisma.organization.create({ data: { name } });
        res.status(201).json(newOrganization);
      } catch (err) {
        res.status(500).json({ error: "Failed to create organization" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
