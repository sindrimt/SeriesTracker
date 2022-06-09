import express from "express";

import { getUser, createUser, getUserById, patchUserById } from "../controllers/users.js";
import { createSerie } from "../controllers/series.js";

import multer from "multer";

const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },

  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// Denne filen inneholder alle metodene / verbene til users
const router = express.Router();

// Kjører verbene. Logikken ligger i controllers filen (users)

router.get("/users", getUser);

router.get("/users/:id", getUserById);

router.put("/users/:id", patchUserById);

router.patch("/users/:id", patchUserById);

router.post("/users", upload.single("image"), createUser);

router.post("/series", upload.single("image"), createSerie);

export default router;
