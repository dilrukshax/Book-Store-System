import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.description || !req.body.publishYear) {
        return res.status(400).send({ message: "Some fields are missing" });
      }
  
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return res.status(201).json({
        message: "Book created successfully!",
        data: book,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error while creating book" });
    }
  });
  
    
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error while getting books" });
    }
});

router.get("/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
  
      if (!book) {
        return res.status(404).send({ message: "Book not found" });
      }
  
      return res.status(200).json({
        message: "Book retrieved successfully",
        data: book,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error while getting book" });
    }
  });
  

router.put("/:id", async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.description ||
        !req.body.publishYear
      ) {
        return res.status(400).send({ message: "Some fields are missing" });
      }
      
      const {id} = req.params;

      const result = await Book.findByIdAndUpdate(id ,req.body);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book updated successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error while updating book" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const {id} = req.params;

      const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error while deleting book" });
    }
});

export default router;