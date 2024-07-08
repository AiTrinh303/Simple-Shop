
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/icons/add_product_icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style = {{textDecoration: "none"}}>
        <div className='sidebarItem'>
            <img src="" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
