import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name='name' placeholder='Type here'/>
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name />
        </div>
      </div>
    </div>
  )
}

export default AddProduct
