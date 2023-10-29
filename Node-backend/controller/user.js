const UserModel = require('../models/user')
const bcrypt =require('bcrypt');
const jwt =require("jsonwebtoken")
const Jwt_secret=require("../key")
//Signup code start
module.exports.signup = (req, res) => {
    console.log(req.body);

    const newUser = new UserModel({
        email: req.body.email,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname,
    });

    if (!newUser.email || !req.body.password || !newUser.phone || !newUser.fname || !newUser.lname) {
        res.status(422).json({ error: "Please add all fields" });
        return;
    }

    // Hash the password before saving it to the user
    bcrypt.hash(req.body.password, 12)
        .then((hashedPassword) => {
            newUser.password = hashedPassword;

            UserModel.findOne({ email: newUser.email })
                .then((savedUser) => {
                    if (savedUser) {
                        return res.status(422).json({ error: "User already exists with this email" });
                    }

                    newUser.save()
                        .then((user) => {
                            const userID = user._id;
                            console.log('User ID:', userID);
                            res.send({
                                code: 200,
                                message: 'Signup success',
                            });
                        })
                        .catch((err) => {
                            res.send({ code: 500, message: 'Signup Err' });
                        });
                })
                .catch((err) => {
                    res.send({ code: 500, message: 'Error checking existing user' });
                });
        })
        .catch((err) => {
            res.send({ code: 500, message: 'Error hashing password' });
        });
};
// Signup code end


//Signin code start
module.exports.signin = (req, res) => {
    console.log(req.body.email);

    // Find the user by email
    UserModel.findOne({ email: req.body.email })
        .then(result => {
            console.log(result, '11');

            if (!result) {
                res.send({ code: 404, message: 'User not found' });
            } else {
                // Compare the hashed password from the database with the provided password
                bcrypt.compare(req.body.password, result.password, (err, passwordMatch) => {



                    // if (passwordMatch) {
                    //     const token=jwt.sign({_id:result.id},Jwt_secret)
                    //     //res.json(token)
                        
                    //     console.log(token)
                    //     res.send({
                    //         email: result.email,
                    //         fname: result.fname,
                    //         lname: result.lname,
                    //         code: 200,
                    //         message: 'User found',
                    //        token:token
                    //     });
                    // } else {
                    //     res.send({ code: 404, message: 'Password wrong' });
                    // }


                    if (passwordMatch) {
                       const token = jwt.sign({ _id: result.id }, Jwt_secret);
                       console.log(token);
                    
                        // Construct a response object with both token and user details
                        const responseObj = {
                            token:token,
                            email: result.email,
                            fname: result.fname,
                            lname: result.lname,
                            code: 200,
                            message: 'User found',
                        };
                    
                        res.json(responseObj); // Send the combined response
                    } else {
                        res.status(404).json({ code: 404, message: 'Password wrong' });
                    }


























                });
            }
        })
        .catch(err => {
            res.send({ code: 500, message: 'User not found' });
        });
}


// module.exports.signin=(req,res)=>{
//     console.log(req.body.email)
//     //email password match
//    UserModel.findOne({email:req.body.email})
//    .then(result=>{
//     console.log(result,'11')

//     //match password with req.body.passwor
//     if(result.password !== req.body.password){
//         res.send({code:404,message:'password wrong'})
//     }else{
//         res.send({
//             email: result.email,
//             fname: result.fname, 
//             lname:result.lname,
//             code:200,
//             message:'user found',
//             token:'ffgffg'
//         })
//     }

//    })
//    .catch(err=>{
//     res.send({code:500,message:'user not foumd'})

//    })}

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
module.exports.updateProfile =async (req, res) => {
    console.log(req.body);

    const email = req.body.email; // Assuming you pass the user's ID in the request
    const newCity = req.body.city;
    const fname=req.body.fname;
    const bio=req.body.bio;
    const lname=req.body.lname;
    const updateFields = {
        city: newCity,
        fname: fname,
        bio: bio,
        lname:lname,
    };


    // Update the user's document with the new 'city' field
   
    UserModel.findOneAndUpdate({ email: email }, updateFields ,{ new: true })
        .then(user => {
            if (user.email!==req.body.email) {
                return res.status(404).json({ code: 404, message: 'User not found' });
            }

            //return res.status(200).json({ code: 200, message: 'changes added successfully' });
            else{
            res.status(200).json
        ({

            city:user.city,
            bio:user.bio,
            fname:user.fname,
            lname:user.lname,
            code:200,
            message:'updation done',

        })
    }
            
        })
        .catch(err => {
            return res.status(500).json({ code: 500, message: 'Error updating user profile' });
        });
};
