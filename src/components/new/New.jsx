import React from 'react'
import Ncard from './Ncard'
import './Style.css'

const New = () => {
  return (
    <>
        <section className="new background" >
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img className="newLogo" src={require('./images/new.png')} alt='' />
                        <h2>جدیدترین محصولات</h2>
                    </div>


                    <div className="heading-right row">
                        <span>مشاهده همه</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Ncard />
            </div>
        </section>
    </>
  )
}

export default New