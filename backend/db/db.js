const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI;
const connectDB = async () => {
    
  try {
    const conn = await mongoose.connect(uri,{dbName: 'Uber'});
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;