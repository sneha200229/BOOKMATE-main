const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controller/user')
const bookController = require('./controller/book')
const Jwt_secret=require("./key")
const cors = require('cors');
const requirelogin = require('./middlewares/requirelogin'); 

//const { uploadImage, saveImageToDatabase } = require('./user');

const app = express()
const port = 5001
//bookController.storeBookWithMiddleware = [requirelogin, bookController.storeBook];
bookController.fetchBookWithMiddleware = [requirelogin, bookController.fetchBook];
bookController.displayFeedWithMiddleware = [requirelogin, bookController.displayFeed];


 userController.searchUserWithMiddleware = [requirelogin, userController.searchUser];
// userController.fetchUserWithMiddleware = [requirelogin, userController.fetchUser];

//userController.signiWithnMiddleware = [requirelogin, userController.signin];
bookController.storeBookWithMiddleware = [requirelogin, bookController.storeBook];
// bookController.fetchBookUserWithMiddleware = [requirelogin, bookController.fetchBookUser];


const connectionString ='mongodb+srv://admin:admin@cluster0.temk4nq.mongodb.net/?retryWrites=true&w=majority'
//const Jwt_secret="ffffssss"
app.use(cors());


//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.json())

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
  });
















//app.post('/api/upload-image', uploadImage, saveImageToDatabase)
 app.post('/signup', userController.signup)
app.post('/signin',userController.signin)
//app.post('/signup',userController.signupWithMiddleware)
//app.post('/signin',userController.signinWithMiddleware)

app.post('/sendotp',userController.sendotp)
app.post('/submitotp',userController.submitotp)
//app.post('/storeBook',bookController.storeBook)
app.post('/storeBook', bookController.storeBookWithMiddleware);
app.get('/fetchBook', bookController.fetchBookWithMiddleware);

//app.get('/fetchBook',bookController.fetchBook)
app.put('/updateProfile',userController.updateProfile)
//app.get('/displayFeed',bookController.displayFeed)
app.get('/displayFeed/', bookController.displayFeedWithMiddleware);
app.get('/searchUser/:fname',userController.searchUserWithMiddleware);
//app.get('/displayProfile/:fname',userController.displayProfileWithMiddleware);
//app.get('/searchUser/:fname', bookController.searchUser);
// app.get('/fetchBookOfUser/:fname',userController.searchUserWithMiddleware);
// app.get('/fetchUser/:fname',userController.fetchUserWithMiddleware);





app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

