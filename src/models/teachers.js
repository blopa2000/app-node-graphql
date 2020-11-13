import { model, Schema } from "mongoose";

const GenderValues = ["M", "F", "Other", ""];

const schemaTeacher = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: GenderValues,
    },
    aptitudes: [
      {
        type: String,
      },
    ],
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "courses",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("teachers", schemaTeacher);
