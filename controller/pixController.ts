import { Request, Response } from "express";
import pixModel from "../model/pictureModel";
import cloudiary from "../utils/cloudinary";

export const createPix = async (req: any, res: Response) => {
  try {
    const image = await cloudiary.uploader.upload(req.file.path);
    const pix = await pixModel.create({
      pix: image.secure_url,
    });

    res.status(200).json({ message: "Added", data: pix });
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
};

export const createPixMore = async (req: any, res: Response) => {
  try {
    console.log(req.files);

    let data = req.files;
    let readPix = [];
    data.map(async (el) => {
      const image = await cloudiary.uploader.upload(el.path);

      await pixModel.create({
        pix: image.secure_url,
      });
    });

    // const image = await cloudiary.uploader.upload(req.file.path);
    // const pix = await pixModel.create({
    //   pix: image.secure_url,
    // });

    res.status(200).json({
      message: "Added",
      //   data: pix
    });
  } catch (error) {
    return res.status(404).json({ message: "Error", data: error.message });
  }
};

export const viewPix = async (req: Request, res: Response) => {
  try {
    const pix = await pixModel.find();

    res.status(200).json({ message: "Added", data: pix });
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
};
