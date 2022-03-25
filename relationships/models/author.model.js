const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    first_name : {type : String, required : true},
    last_name  :{type : String},
    books : [
        {
        type : mongoose.Schema.Types.ObjectId , ref : "book"}
]
})

const Author = mongoose.model("author", authorSchema);

module.exports = Author;