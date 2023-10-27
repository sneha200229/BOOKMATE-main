const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controller/user')
const bookController = require('./controller/book')

const cors = require('cors');
//const { uploadImage, saveImageToDatabase } = require('./user');

const app = express()
const port = 5001

const connectionString ='mongodb+srv://admin:admin@cluster0.temk4nq.mongodb.net/?retryWrites=true&w=majority'

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
app.post('/sendotp',userController.sendotp)
app.post('/submitotp',userController.submitotp)
app.post('/storeBook',bookController.storeBook)
app.get('/fetchBook',bookController.fetchBook)
app.put('/updateProfile',userController.updateProfile)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})