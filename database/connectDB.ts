import mongoose from "mongoose";

export default async function connectMongo() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log("Database Connected");
  } catch (error) {
    return Promise.reject(error);
  }
}
