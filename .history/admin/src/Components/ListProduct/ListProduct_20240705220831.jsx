import React, {useEffect, useState} from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then(response => response.json())
    .then(data => {setAllProducts(data)})
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div className="listproduct-format-main listproduct-format" key={index}>
              <img src={product.image} alt="product" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img className='listpr' src={cross_icon} alt="cross" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct
