import mongoose from "mongoose";

const connectMongoDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error)
    throw new Error("Error occurred");
  }
};

export default connectMongoDatabase;
