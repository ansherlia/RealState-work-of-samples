const { default: mongoose } = require("mongoose");

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected DB successfull.");
}

export default connectDB;
