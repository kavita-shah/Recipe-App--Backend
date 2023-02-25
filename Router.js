const express = require ("express");
const router = express.Router();
const userDetails= require("../Models/user_schema");
const bctypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async(req,res) =>{
    const{userEmail, password} = req.body

    try{
        const data = await userDetails.findOne({ userEmail: userEmail})
        if (data){
            res.send({message:"user already Exist!"})
        }
        else{
            bcrypt.hash(password, 10, async function (err,hash){
                if (err){
                    return res.json({message:err.message})
                }else{
                    const data= await userDetails.create({
                        userEmail,
                        password:hash
                    })
                    res.json({ message:"congratulations signup sucessfully!", data});
                    console.log(data)
                }
            })
        }
    }
    catch(e){
        res.send({
            message:e.message
        })
    }
})



router.posst("/login",async(req,res) =>{
    const {userEmail, password} = req.body
    try{

        const isuer = await userDetails.findOne({ userEmail: userEmail})
        if(isuser){
            const ispassword = await bctypt.compare(password, isuer.password)
            if(ispassword){
                token = jwt.sign({id: isuser.id}, "secret")
                res.json({ message:"sucess", token:token})
            }
            else{
                res.json({message:"unregistered"})
            }
            
        }
        
        
    }
})

module.export = router;
