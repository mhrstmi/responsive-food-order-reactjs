import './App.css';
import Header from './common/header/Header';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import FData from './components/flashDeals/Fdata'
import Cart from './pages/cart/Cart';
import Home from './pages/mainpage/Home';
import Profile from './pages/profile/Profile';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/Footer';

function App() {

  const { productItems } = FData;
  const { shopItems } = Sdata;

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)

    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExist, qty:productExist.qty + 1 } : item)))
    } else {
      setCartItem([ ...cartItem, { ...product, qty:1}])
    }
  }


  const removeFromCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)

    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExist, qty:productExist.qty - 1} : item)))
    }
  }

  return (
    <>
      
      <Router>
        <Header cartItem={cartItem} />
        <Switch>

          <Route path="/responsive-food-order-reactjs" exact>
            <Home productItems={productItems}  addToCart={addToCart} shopItems={shopItems} /> 
          </Route> 

          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart} />
          </Route> 


          <Route path="/profile" exact>
            <Profile />
          </Route> 

          <Route path="/products" exact>
            <Products />
          </Route> 

          <Route path="/product" exact>
            <Product />
          </Route> 

          <Route path="/register" exact>
            <Register />
          </Route> 

          <Route path="/login" exact>
            <Login />
          </Route> 
              
        </Switch>

        <Footer />
      </Router>
     
    </>
  );
}

export default App;
