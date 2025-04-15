import Database from "better-sqlite3";

function initializeDatabase() {
  const db = new Database("./database.sqlite", { verbose: console.log });

// Enable foreign key support
  db.pragma("foreign_keys = ON");

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS organizations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `
  ).run();
  db.prepare(
    `
     CREATE TABLE IF NOT EXISTS accounts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       organizationId TEXT NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (organizationId) REFERENCES organizations(id)
     );
  `
  ).run();
  db.prepare(
    `
     CREATE TABLE IF NOT EXISTS deals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       value TEXT NOT NULL,
       status TEXT NOT NULL,
       accountId TEXT NOT NULL,
       started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       ended_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (accountId) REFERENCES accounts(id)
     );
  `
  ).run();
  // TODO: Add your account and deal tables schemas here
  return db;
}

export default initializeDatabase;
