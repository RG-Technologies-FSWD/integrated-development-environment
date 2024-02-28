const mongoose = require("mongoose");
const MONGO_URL="mongodb+srv://rgtechconsult:rgtechconsult2023@cluster0.bc106gd.mongodb.net/rgtechnologies-ide"

const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected with RG Technologies IDE Db");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectDB;
