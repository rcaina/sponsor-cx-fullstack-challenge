import express from "express";
import cors from "cors";
import initializeDatabase from "./db";
import handleOrganizations from "./organizations";
import handleAccounts from "./accounts";
import handleDeals from "./deals";
const app = express();
const port = process.env.PORT || 3002;

/**
 * Welcome to the Fullstack Challenge for the Server!
 *
 * This is a basic express server.
 * You can customize and organize it to your needs.
 * Good luck!
 */
const db = initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/organizations", (req, res) => {
  handleOrganizations(req, res)
});

app.get("/accounts", (req, res) => {

  handleAccounts(req, res);
});

app.get("/deals", (req, res) => {

  handleDeals(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
