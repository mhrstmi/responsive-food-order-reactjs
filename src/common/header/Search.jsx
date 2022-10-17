import React from 'react'
import logo from "./images/logo.png"
import {Link } from "react-router-dom"

const Search = ({cartItem}) => {

  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  
  return (
    
    <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                  <Link to="/responsive-food-order-reactjs">
                    <img src={logo} alt='' />
                    </Link>
                </div>

                <div className="search-box f_flex">
                  <i className='fa fa-search'></i>
                  <input type='text'   placeholder='محصول مورد نظر خود را جستجو کنید...'/>
                </div>

                <div className='icon f_flex width'>

                  
                  

                  <Link to="/profile">
                    <i className='fa fa-user icon-circle'></i>
                  </Link>

                  <Link to="/login">
                    <i className='fa fa-sign-in icon-circle'></i>
                  </Link>

                  <div className="cart">
                    <Link to="/cart">
                    <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
                      <i className="fa fa-shopping-bag icon-circle"></i>
                      
                    </Link>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search