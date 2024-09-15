import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Bookroute from "./routes/books.routes.js";
import userRoute from "./routes/user.routes.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors()); // A CORS error, or Cross-Origin Resource Sharing error when frontend is in one port and the backend is in another port
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
//conntect to mongodb
try {
  mongoose.connect(URI);
  console.log("connect to mongodb");
} catch (error) {
  console.log("Error:", error);
}
//defining routes
app.use("/book", Bookroute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
