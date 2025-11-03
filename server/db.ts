import dotenv from "dotenv";
import path from "path";

// Load environment variables before using process.env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import pg from "pg";
const { Pool } = pg;

import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize Drizzle with the pool and schema
export const db = drizzle(pool, { schema });
