const mongoose = require("mongoose");

const colors = require("colors");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `\n MongoDB connected to  ${process.env.NODE_MODE} !! DB HOST: ${connectionInstance.connection.host}`
        .bgCyan
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
