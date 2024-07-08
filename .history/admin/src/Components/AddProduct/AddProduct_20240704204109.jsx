import React from 'react'
import { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg' 

const AddProduct = () => {
    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
        }

    const changeHandler = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })   
    }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value= {productDetails.name} type="text" name='name' placeholder='Type here'/>
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value= {productDetails.old_price} type="text" name="old_price" placeholder='Type here' />
        </div>

        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value= {productDetails.name} type="text" name="new_price" placeholder='Type here' />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className='add-product-selector'>
            <option value="category">Category</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>    
      </div>

        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image): upload_area} className='addproduct-thumnail-img' alt="" />
            </label>
            <input onChange = {imageHandler}  type="file" name='image' id='file-input' hidden/>
        </div>

        <button className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct