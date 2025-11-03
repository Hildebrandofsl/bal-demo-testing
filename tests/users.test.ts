import request from "supertest";
import express from "express";
import { registerRoutes } from "../server/routes"; // adjust path

const app = express();
app.use(express.json());
registerRoutes(app);

describe("Users API", () => {
  it("should respond to GET /api/users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body).toHaveProperty("pagination");
  });

  it("should create a new user with POST /api/users", async () => {
    const newUser = {
      name: "Hildebrando",
      email: `testuser_${Date.now()}@example.com`,
      password: "Granadilla2025$",
    };

    const res = await request(app)
      .post("/api/users")
      .send(newUser)
      .set("Accept", "application/json");

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe(newUser.name);
    expect(res.body.email).toBe(newUser.email);
  });
});
