import mongoose from "mongoose";

interface iPix {
  pix: string;
}

interface iPixData extends iPix, mongoose.Document {}

const pixModel = new mongoose.Schema(
  {
    pix: String,
  },
  { timestamps: true },
);

export default mongoose.model<iPixData>("pixes", pixModel);
