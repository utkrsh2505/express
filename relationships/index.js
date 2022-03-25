const express = require("express");
const mongoose = require("mongoose");
const authorController = require("./controllers/author.controller");
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");

const cors = require("cors");
const PORT = 8000;
const DB_URL = "mongodb+srv://utk2505:786utkarsh@cluster0.jysel.mongodb.net/library?retryWrites=true&w=majority";

 const app = express();

 app.use(express.json());
 app.use(cors());
 

 app.use("/authors", authorController);
 app.use("/sections", sectionController);
 app.use("/books", bookController);
 const connect = ()=>{
     return mongoose.connect(DB_URL);
 }

 app.listen(PORT, async()=>{
     try{
         await connect();
         console.log(`Listening port ${PORT}`)
     }
     catch(e){
         console.log(e.message)
     }
 });