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
    topic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Courses", schemaCourses);
