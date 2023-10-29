const jwt = require("jsonwebtoken")
const Jwt_secret=require("../key")
const mongoose=require("mongoose")
// const BookModel = require('../models/book');
// const user = require("../models/user");
const User=mongoose.model("User")
module.exports=(req,res,next)=>
{
    //console.log("hey middleware")
    const {authorization}=req.headers;
    if(!authorization)
    {
        return res.status(401).json({error:"1.you should have logged in !"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,Jwt_secret,(err,payload)=>{
        if(err){
            return res.status(401).json
            ({
                error:"2.you should have logged in !"
            })

        }
        const{_id}=payload
        User.findById(_id).then(userData=>[
            //console.log(userData)
            req.user=userData,
            next()

        ])
    })
    // res.json("ok from middleware")
}