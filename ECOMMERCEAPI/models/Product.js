const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProductSchema = new Schema({
    title : {
        type: String,
        required: true,
        unique: true,
    },
    description : {
        type: String,
        required: true,        
    },
    img: {
        type: String,
        required: true
    },
    categories : {
        type: Array,  // There can be more than one category for an item.        
    },
    size : {
        type: String,
    },
    color : {
        type: String,
    },
    price : {
        type: Number,
        required: true,
    },
}, 
{timestamps : true}   //Mongo will create createdAt and updatedAt .
)

module.exports = mongoose.model("Product", ProductSchema)
