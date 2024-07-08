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
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product ({
        id: id,
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

//Creating API for deleting product

app.post ('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log('Product is deleted');
    res.json({
        success: true,
        name: req.body.name,
    });
    })

//Creating API for getting all products

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log('All Products');
    res.send(products);
    }
)

//User Schema

const Users = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

//Creating User Endpoint Register

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email: req.body.email});
   if (check) {
    return res.status(400).json({success: false, errors: 'Email already exists'});
   }
   let cart = {};
   for (let i= 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users ({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };

    const token = jwt.sign (data,'secret_ecommerce');
    res.json({
        success: true,
        token: token,
    });
});

//creating endpoint for login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({
        email: req.body.email,
       
    });
    if (user) {
       const passCompare = req.body.password === user.password;
       if (passCompare) {
           const data = {
               user: {
                   id: user.id,
               },
           };
           const token = jwt.sign(data, 'secret_ecommerce');
              res.json({
                success: true,
                token: token,
              });
        }
        else {
            res.status(400).json({success: false, errors: 'Password is incorrect'});
        }
    }
    else {
        res.status(400).json({success: false, errors: 'User not found'});
    }
});

//creating endpoint for new collection data

app.get('/newcollections', async (req,res) => {
    let products = await Product.find ({});
    let newcollection = products.slice(1).slice(-8);
    console.log('NewCollection Fetched');
    res.send(newcollection);
})

//creating endpoint for popular in women section
app.get('/popularinwomen', async (req,res) => {
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log('Popular in women fetched');
    res.send(popular_in_women)
})


//creating middelware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({errors:"Please authenticate using validate token"})
    }
    else{
        try {
            const data = jwt.verify(token, 'secret_ecommerce' );
            req.user = data.user;
            next();    
        }
        catch(error) {
            res.status(401).send({errors: "please authenticate using validate token"})
        }    
    }
} 

//creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser, async (req,res) => {
    // console.log(req.body, req.user);
    console.log("added", req.body.itemId)
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
    res.send("Added")
})

//creating endpoint to remove product from cartdata
app.post ('/removefromcart', fetchUser, async (req, res) => {
    console.log("removed", req.body.itemId)
    let userData = await Users.findOne({_id: req.user.id});
    if (userData.cartData[req.body.itemId]>0)
    {
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
        res.send("Removed")
    }
})

//creating endpoint to get cartData
app.post('/getcart',fetchUser, asy)

app.listen(port, (error) => {
    if (!error) {   
        console.log(`Server is running on port: ${port}`);
    }
    else {
        console.log('Error while running server');
    }
});

