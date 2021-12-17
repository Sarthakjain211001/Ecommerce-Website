const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js")
const Cart = require("../models/Cart")
const verifyToken = require("../middleware/verifyToken");

// Add a new Cart
router.post("/addCart", verifyToken, async(req, res)=>{
      try{
          const newCart = new Cart(req.body);
          const savedCart = await newCart.save();
          return res.status(200).json(savedCart);
      }catch(err){
          return res.status(500).json(err);
      }
    })

//Update the cart 
router.put("/updateCart/:id", verifyToken, async(req,res)=>{
    if(req.user.id === req.params.id){    
      try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set : req.body}, { new : true });  //Find and update the Product. 
        return res.status(200).json(updatedCart);
      }catch(err){
          res.json(err);
      }
    }
    else{
        return res.status(403).json("Not Allowed");
    }
})

//Delete the cart.
router.delete("/deleteCart/:id", verifyToken, async(req, res)=>{
    if(req.user.id === req.params.id){
        try{
            const deletedCart = await Cart.findByIdAndDelete(req.params.id);
            return res.status(200).json("Successfull deletion");
        }catch(err){
            return res.status(400).json(err);
        }

    }
    else{
        return res.status(403).json("Not Allowed");
    }
})

// Fetching User Cart .
router.get("/fetchCart/:userId", verifyToken, async(req,res) => {     
    if(req.user.id === req.params.userId){
     try{
        const cart = await Cart.findOne({userId: req.params.userId});
        if(cart){             
            return res.status(200).json(cart);       
        }
        else{
            return res.status(400).json("cart not found");  
        }
     }catch(err){
        return res.status(400).json(err);
     }
    }
    else{
        return res.status(403).json("Not Allowed");
    }
})

// Fetch all the carts.
router.get("/fetchAllCarts", verifyToken ,async(req,res) => {    
    if(req.user.isAdmin){
    try{
        carts = await Cart.find();                                                                                        
        if(carts){
            return res.status(200).json(carts);  
        }
        else{
            return res.status(400).json("No carts present");  
        }
     }catch(err){
        return res.status(500).json(err);
     }
    }
    else{
        return res.status(403).json("Not Allowed");
    }
}

)

module.exports = router;