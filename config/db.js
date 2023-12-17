const mongoose = require ('mongoose');
const clc = require("cli-color");
require('dotenv').config()

const connectDB = main()

async function main() {
  await mongoose.connect(process.env.DB_URI);
  try {
    console.log(clc.yellow('conected mongoDB'))
  } catch (error) {
    console.log(clc.red(error))
  }
}

module.exports = connectDB