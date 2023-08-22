import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import pix from "./router/pixRouter";
const url = "mongodb://127.0.0.1:27017/pixDB";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/pix", pix);

app.listen(3399, () => {
  mongoose.connect(url).then(() => {
    console.log("server connected");
  });
});
