
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style = {{textDecoration: "none"}}>
        <div className='sidebarItem'>
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style = {{textDecoration: "none"}}>
        <div className='sidebarItem'>
            <img src={list_product_icon} alt="" />
            <p>Product</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
