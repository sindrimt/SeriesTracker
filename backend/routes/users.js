import express from "express";

import { getUser, createUser, getUserById } from "../controllers/users.js";

// Denne filen inneholder alle metodene / verbene til users
const router = express.Router();

// Kjører verbene. Logikken ligger i controllers filen (users)

router.get("/users", getUser);

router.get("/users/:id", getUserById);

router.put("/users/:id", getUserById);

router.post("/users", createUser);

export default router;
