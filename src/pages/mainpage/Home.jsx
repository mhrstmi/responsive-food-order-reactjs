import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import './Home.css'
import TopCate from '../../components/top/TopCate'
import New from '../../components/new/New'
import Discount from '../../components/discount/Discount'
import FlashDeals from '../../components/flashDeals/FlashDeals'
import Shop from '../../components/shop/Shop'


const Home = ({productItems, addToCart, shopItems}) => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
          
        </div>


      </section>

      
      <Shop shopItems={shopItems} addToCart={addToCart} />

    </>
  )
}

export default Home