import express from "express";
import { PORT ,MONGODB_URL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/books", bookRoutes);


        

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    
