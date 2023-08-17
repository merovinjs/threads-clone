import mongoose from "mongoose";
let isConnetced = false;

export async function connectDB() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Mongo url not found");
  if (isConnetced) return console.log("already connected mongodb");
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnetced = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
