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
mongoose.connect('mongodb://localhost:27017/Ai_E_commerce')

//API Creation

app.get('/', (req, res) => {
    res.send('Express App is running');
});

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage: storage
});

//Creating Upload Endpoint for images
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
    })
   
//Schema for Creating Product

const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});  

//Creating Product Endpoint
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0) {
        let last_product_array =products.slice(-1);
        let last_product = last_product_array[0];
        
    const product = new Product ({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        // available: req.body.available,
    });
    console.log(product);
    await product.save();
    console.log('Product is created');
    res.json({
        success: true,
        name: req.body.name,
    });
    })

app.listen(port, (error) => {
    if (!error) {   
        console.log(`Server is running on port: ${port}`);
    }
    else {
        console.log('Error while running server');
    }
});
