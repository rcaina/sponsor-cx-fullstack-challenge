import express from "express";
import cors from "cors";
import handleOrganizations from "./organizations";
import handleAccounts from "./accounts";
import handleDeals from "./deals";
import initializeDatabase from "./db";
const app = express();
const port = process.env.PORT || 3002;

/**
 * Welcome to the Fullstack Challenge for the Server!
 *
 * This is a basic express server.
 * You can customize and organize it to your needs.
 * Good luck!
 */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const db = initializeDatabase()
app.all("/organizations", (req, res) => {
  handleOrganizations(req, res)
});

app.all("/accounts", (req, res) => {

  handleAccounts(req, res);
});

app.all("/deals", (req, res) => {

  handleDeals(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
