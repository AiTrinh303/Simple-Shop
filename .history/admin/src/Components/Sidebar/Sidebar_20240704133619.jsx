
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/icons/Product_cart.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style = {{textDecoration: "none"}}>
        <div className='sidebarItem'>
            <img src={add_product_icon} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
