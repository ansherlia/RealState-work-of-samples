const { default: mongoose } = require("mongoose");

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected DB successfull.");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
}

export default connectDB;

