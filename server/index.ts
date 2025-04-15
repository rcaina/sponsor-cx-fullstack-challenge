import express from "express";
import cors from "cors";
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
const db = initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM organizations").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

app.get("/accounts", (req, res) => {

  const {organizationId} = req.query;
  const rows = db.prepare("SELECT * FROM account").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

app.get("/deals", (req, res) => {

  const {accountId} = req.query;
  const rows = db.prepare("SELECT * FROM deal").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
