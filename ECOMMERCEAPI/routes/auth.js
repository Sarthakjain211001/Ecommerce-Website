const express = require('express');
const router = express.Router();
const User = require('../models/User')
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER: 
router.post("/register", async (req, res) => {
    const { username, email, password, } = req.body;

    const newUser = new User({
        username: username,
        email: email,
        password: CryptoJs.AES.encrypt(password, process.env.PASS_SEC).toString()
    });
    console.log(process.env.PASS_SEC);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)  // 200: Successfull
                                         //201: Successfully added
    } catch (err) {
        res.status(500).json(err);
    }
}
)

//LOGIN : 
router.post("/login", async(req, res) => {
    try{
    const {email, password} = req.body;
    const FindUser = await User.findOne({email : email})
    if(!FindUser){
        return res.status(401).json("Wrong Credentials");
    }
    
    const hashedPassword = CryptoJs.AES.decrypt(FindUser.password, process.env.PASS_SEC);
    const CorrectPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    if(password !== CorrectPassword){
        return res.status(401).json("Wrong Credentials");   
    }
    
    const data={
        id : FindUser._id,
        isAdmin : FindUser.isAdmin
    }
    const authToken = jwt.sign(data, process.env.JWT_SEC, {expiresIn:"3d"});
                                                             //AuthToken will expire in 3days. After 3 days the user will have to login again.  
    return res.status(200).json({FindUser, authToken});
}catch(err){
    res.status(500).json(err);
}

})

module.exports = router