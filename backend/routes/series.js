import express from "express";

import { getSeries, createSerie, getSerieById } from "../controllers/series.js";

const router = express.Router();

router.get("/series", getSeries);

router.get("/series/:userId", getSerieById);

//router.post("/series", createSerie);

export default router;
