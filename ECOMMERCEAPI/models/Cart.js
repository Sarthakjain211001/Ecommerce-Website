const mongoose = require("mongoose");
const {Schema} = mongoose;

const CartSchema = new Schema({
    userId : {
        type: String,
        required: true,
    },
    products : [         //products will be containing many different products
        {                //And each product will have a productId and quantity. 
        productId: {
          type:String,
        }, 
        quantity:{
          type: Number,
          default : 1
        }             
    }
    ]
}, 
{timestamps : true}   //Mongo will create createdAt and updatedAt .
)

module.exports = mongoose.model("Cart", CartSchema)
