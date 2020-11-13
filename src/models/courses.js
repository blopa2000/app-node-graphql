import { model, Schema } from "mongoose";

const schemaCourses = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "teacher",
    },
    topic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("courses", schemaCourses);
