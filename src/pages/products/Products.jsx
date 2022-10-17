import React from 'react'
import Filter from './Filter'
import './Style.css'
import Data from './Data'

const Products = () => {
  return (
    <>
        <section className="products">
            <Filter />

            <div className="products-container">

                <div className="filter-header">
                    <div className="right">

                        <i className="fa fa-sort-amount-desc"></i>
                        
                        <label>مرتب سازی  : </label>
                        
                        <p >جدید ترین</p>
                        <p > ارزان ترین</p>
                        <p >گران ترین </p>
                        <p >پر فروش ترین </p>
                       

                    </div>

                    <div className="left">
                        
                        <i className="fa fa-list"></i>
                        <i className="fa fa-th"></i>

                    </div>
                </div>

                <div className="products-list grid2">
                    {Data.map((value, index) => {
                        return (
                            
                            <div className="card product" key={index}>

                                <div className="card-header">

                                    <div className="card-like">
                                        <div className="like-count">
                                            <p>0</p>
                                        </div>

                                        <i className="fa fa-heart"></i>
                                    </div>

                                    <div className="card-discount">
                                        <p>50% تخفیف</p>
                                    </div>

                                </div>

                                <div className="img">
                                    <img src={value.cover} alt='' />
                                </div>

                                <div className="card-bottom">
                                    <h1>{value.name}</h1>
                                    <h3>{value.price} تومان</h3>

                                    <div className="rating">
                                        <p>امتیاز دهید</p>

                                        <div className="stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>

                                    <h4>{value.desc}</h4>
                                </div>

                            </div>

                            )
                    })}
                </div>

            </div>

            
        </section>
    </>
  )
}

export default Products