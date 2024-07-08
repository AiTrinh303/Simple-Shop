
import './Sidebar.css'
import { Link } from 'react-router-dom'

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
