import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";

const app = express();

//const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// prefixes api with /api
/* import { createProxyMiddleware } from "http-proxy-middleware";

createProxyMiddleware({
  target: "http://localhost:8000",
  changeOrigin: true,
}); */

app.use("/api", userRoutes);

// Default landing page for /
/* app.get("/", (req, res) => {
  res.send("Home page");
});

// Default landing page for /api
app.get("/api", (req, res) => {
  res.send("Api home page");
}); */

// ES module tull
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")));
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT || 8000, () => console.log(`Server running on ${process.env.PORT || 8000}`)))
  .catch((error) => console.log(error.message));
