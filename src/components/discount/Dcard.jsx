import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";


const NextArrow = (props) => {
  const {onClick} = props
  return(
      <div className="control-btn" onClick={onClick}>
          <button className="next">
              <i className="fa fa-arrow-right"></i>
          </button>
      </div>
      )
}
const PrevArrow = (props) => {
  const {onClick} = props
  return(
      <div className="control-btn" onClick={onClick}>
          <button className="prev">
              <i className="fa fa-arrow-left"></i>
          </button>
      </div>
      )
}


const Dcard = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  return (
    <>
      <Slider {...settings} >
        
        {Ddata.map((value, index) => {
          return (

            <div className="box" dir="rtl">
              <div className="product" key={index} >
                
                <div className="img">
                  <img src={value.cover} alt='' />
                </div>

                <h4>{value.name}</h4>
                <span>{value.price} تومان</span>
              </div>
            </div>

            )
        })}
      </Slider>
    </>
  )
}

export default Dcard