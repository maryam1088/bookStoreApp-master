import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    tittle:String,
    price:String,
    category:String,
    image:String,
    id:Number
})
const Book = mongoose.model("Book",bookSchema);

export default Book;