import express from "express";

import { getSeries, createSerie, getSerieById, getSerieBySerieId, patchSerieBySerieId, deleteSerieById } from "../controllers/series.js";

const router = express.Router();

router.get("/series", getSeries);

router.get("/series/:userId", getSerieById);

router.get("/serie/:serieId", getSerieBySerieId);

router.patch("/series/:serieId", patchSerieBySerieId);

router.delete("/series/:serieId", deleteSerieById);

//router.post("/series", createSerie);

export default router;
