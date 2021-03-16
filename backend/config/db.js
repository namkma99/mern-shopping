require("dotenv").config();
const mongoose = require('mongoose');

async function connectDB(){
  try {
    await mongoose.connect(process.env.MONG_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("MongoDB connection FAIL", error);
  }
};

module.exports = {connectDB, };
