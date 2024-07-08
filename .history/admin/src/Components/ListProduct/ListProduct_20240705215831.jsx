import React, {useEffect, useState} from 'react'
import './ListProduct.css'

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

      </div>
    </div>
  )
}

export default ListProduct
