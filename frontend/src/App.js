import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner = {men_banner} category = "men"/>} />
        <Route path="/womens" element={<ShopCategory banner = {women_banner} category = "women"/>} />
        <Route path="/kids" element={<ShopCategory banner = {kid_banner} category = "kid"/>} />
        <Route path = "/product" element = {<Product />}>
          <Route path = ":productId" element = {<Product />} /> 
        </Route> 
        <Route path = "/cart" element = {<Cart/>} />  
        <Route path = "/login" element = {<LoginSignup/>} />
        <Route path = "*" element = {<h1>404 Not Found</h1>} />
      </Routes>  

        <Footer />
      </Router>
    </>
  );
}

export default App;
