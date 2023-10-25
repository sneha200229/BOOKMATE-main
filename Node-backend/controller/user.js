
const UserModel = require('../models/user')
//const multer = require('multer');
//const path = require('path');

//const s3 = require('../s3service.js');



//Signup code start
module.exports.signup = (req,res) =>{

    console.log(req.body)

    const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname

    })

    newUser.save().then(()=>{
        res.send({ 
            code: 200 , 
            message : 'Signup success',
        //     lname: result.lname,
        //     code:200,
        //    // message:'user found',
        //     token:'signuptoken'





        })
    })

        .catch((err)=>{
            res.send({code: 500, message: 'Signup Err'})
        })

   
}
// Signup code end


//Signin code start

module.exports.signin=(req,res)=>{
    console.log(req.body.email)
    //email password match
   UserModel.findOne({email:req.body.email})
   .then(result=>{
    console.log(result,'11')

    //match password with req.body.passwor
    if(result.password !== req.body.password){
        res.send({code:404,message:'password wrong'})
    }else{
        res.send({
            email: result.email,
            fname: result.fname, 
            code:200,
            message:'user found',
            token:'ffgffg'
        })
    }

   })
   .catch(err=>{
    res.send({code:500,message:'user not foumd'})

   })}

   //Signin code end



//    Forget password start

const nodemailer = require('nodemailer');


// Function to send OTP to the user's email
module.exports.sendotp = async (req, res) => {
    console.log(req.body);

    // Generate a random 6-digit OTP
    const _otp = Math.floor(100000 + Math.random() * 900000);
    console.log(_otp);

    // Find user by email
    let user = await UserModel.findOne({ email: req.body.email });

    // Check if user exists
    if (!user) {
        return res.status(500).json({ code: 500, message: 'User not found' });
    }

    // Create a test email account (Replace with your actual email configuration)
    let testAccount = await nodemailer.createTestAccount();

    // Create nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "	casey.hahn73@ethereal.email",
            pass: "Z85HmAy9pNhUKqqjAn"
        }
    });

    try {
        // Send OTP to the user's email
        let info = await transporter.sendMail({
            from: 'vishu.22octafamous@gmail.com',
            to: req.body.email,
            subject: "OTP",
            text: String(_otp),
           
        });

        // Check if email was sent successfully
        if (info.messageId) {
            // Update user with the generated OTP
            await UserModel.updateOne({ email: req.body.email }, { otp: _otp });
            
            return res.status(200).json({ code: 200, message: 'OTP sent successfully' });
        } else {
            
            return res.status(500).json({ code: 500, message: 'Failed to send OTP' });
        }
    } catch (error) {
        console.error(error);
        
        return res.status(500).json({ code: 500, message: 'Server error' });
    }
};

// Function to submit and verify the OTP for password reset
module.exports.submitotp = (req, res) => {
    console.log(req.body);

    // Find user by matching the submitted OTP
    UserModel.findOne({ otp: req.body.otp })
        .then(result => {
            // Check if a user with the provided OTP was found
            if (!result) {
                return res.status(500).json({ code: 500, message: 'OTP is wrong' });
            }

            // Update the user's password
            UserModel.updateOne({ email: result.email }, { password: req.body.password })
                .then(updateResult => {
                    return res.status(200).json({ code: 200, message: 'Password updated successfully' });
                })
                .catch(updateError => {
                    console.error(updateError);
                    return res.status(500).json({ code: 500, message: 'Server error' });
                });
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({ code: 500, message: 'Server error' });
        });
};

// Forget password end

//code for storing inputs while creating post
