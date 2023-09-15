// Database connection
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connect() {
  const dbUri = process.env.mongouri!;
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to Database");
  } catch (error) {
    process.exit(1);
  }
}

export default connect;
