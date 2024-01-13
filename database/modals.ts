import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    image: String,
    income: Number,
    incomeRatio: {
      investment: Number,
      wants: Number,
      needs: Number,
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
