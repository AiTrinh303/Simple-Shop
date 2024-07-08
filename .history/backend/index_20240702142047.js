const port = 4000;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());


//Database connection
mongoose.connect('mongodb://localhost:27017/Simple_E-commerce')

//API Creation

app.get

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port: ${port}`);
    }
    else {
        console.log('Error while running server');
    }
});

