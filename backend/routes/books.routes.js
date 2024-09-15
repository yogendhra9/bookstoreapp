import express from "express";
import bookController from "../controllers/book.controller.js";
const router = express.Router();
router.get("/",bookController); //This mean on the / url getBook function has to be executed 
export default  router;