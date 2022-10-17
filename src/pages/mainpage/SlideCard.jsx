import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{margin: "0px"}}>{dots}</ul>
    }
  };



const data = [
  {
    id: 1,
    title: 'همبرگر خوشمزه ',
    desc: 'همبرگر بهترین قیمت و بهترین کیفیت با مخلفات زیاد',
    cover: require('./images/slider/hamber.png'),
   
  },


  {
    id: 2,
    title: 'چیپس سرخ شده عالی',
    desc: 'چیپس سرخ شده با بهترین کیفیت و همراه با پنیر پیتزا',
    cover: require('./images/slider/fries.png'),
  },


  {
    id: 3,
    title: 'نوشابه پپسی بطری',
    desc: 'نوشابه تک نفره پپسی با طعم عالی و گوارا',
    cover: require('./images/slider/pepsi.png'),
  },


 
]

  return (
    <>

      <div className="desktop">
        <Slider {...settings} >
          {data.map((value, index) => {
            return (
              <div className="box d_flex top" key={index} dir="rtl" >
                
                
                
                <div className="right">
                  <h1>{value.title}</h1>
                  <p >{value.desc}</p>
                  <button className="btn-primary">خرید</button>
                </div>

                
                <div className="left">
                  <img src={value.cover} alt='' />
                </div>

          

              </div>

              

              
            )
          })}
        </Slider>

      </div>

      <div className="mobile">
        <Slider {...settings} >
          {data.map((value, index) => {
            return (
              <div className="box d_flex top " key={index} dir="rtl" >
              
                  <img src={value.cover} alt='' />
              
              </div>

              

              
            )
          })}
        </Slider>
      </div>
        
    </>
  )
}

export default SlideCard