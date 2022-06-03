import express from "express";

import { getUser, createUser, getUserById } from "../controllers/users.js";
import { getSeries, createSerie, getSerieById } from "../controllers/series.js";

// Denne filen inneholder alle metodene / verbene til users
const router = express.Router();

// Kjører verbene. Logikken ligger i controllers filen (users)

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

router.get("/series", getSeries);
router.get("/series/:id", getSerieById);
router.post("/series", createSerie);

export default router;
