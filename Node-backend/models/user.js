const mongoose = require('mongoose')
module.exports = mongoose.model('User',{email:String,password:String,otp:Number,fname:String,lname:String,phone:Number});

/*
BookID (Primary Key)
•	UserID (Foreign Key referencing Users.UserID)
•	BookName
•	AuthorName
•	Description
•	BookImage (URL or image data)*/