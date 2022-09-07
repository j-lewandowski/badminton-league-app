import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to server".inverse.green);
  } catch (error) {
    console.log("Failed to connect to server".inverse.red);
  }
};

export default connectDB;
