import express from "express";
import { createPix, createPixMore, viewPix } from "../controller/pixController";
import { upload, uploadMore } from "../utils/multer";
const router = express.Router();

router.route("/create").post(upload, createPix);

router.route("/create-more").post(uploadMore, createPixMore);

router.route("/").get(viewPix);

export default router;
