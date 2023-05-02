require("dotenv").config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";

const morgan = require("morgan");

const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Banco conectado"))
  .catch((err) => ("Banco nao conectado", err));


// middlewwares 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);

app.listen(8000, () => console.log("Server está conectado na porta 8000"))
