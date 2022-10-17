import React from 'react'
import Dcard from './Dcard'
import './Style.css'


const Discount = () => {
  return (
    <>
      <section className="discount background new">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        
                        <h2> محصولات تخفیف دار</h2>
                    </div>


                    <div  className="heading-right row">
                        <span>مشاهده همه</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Dcard />
            </div>
      </section>
    </>
  )
}

export default Discount