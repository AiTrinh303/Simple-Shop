import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name='name'/>
      </div>
    </div>
  )
}

export default AddProduct
