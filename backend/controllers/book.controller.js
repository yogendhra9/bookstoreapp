import { json } from "express";
import Book from "../model/book.model.js";
const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  
  } catch (e) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error  in fetching book" });
  }
};
export default getBook;