import mongoose from "mongoose";

const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI!);
  console.log("connected to mongo DB");

  try {
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectToMongoDB;
