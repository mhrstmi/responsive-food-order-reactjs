import React, {useState} from 'react'
import './Style.css'
import Pdata from './Pdata'
import def from './images/p1.jpg'


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


const Product = () => {

    const [image, setImage] = useState(def)

    const pickedImage = (img, id) => {
        setImage(img);
        
    }

    const pick = (id) => {
        const element = document.getElementById(id)
        element.classList.toggle("picked")
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        
    };


    

  return (

    <>
        <section className="product-detail">
            <div className="right-container">

                <div className="product-overview">
                    <div className="img">

                        <div className="main-image">
                            <img src={image} alt='' />
                        </div>

                        <Slider {...settings} >
                        {Pdata.map((item, index) => {

                            return (
                               
                                <img className='slider-image' id={'img-' + index}  src={item.image} alt='' key={index}  onClick={(e) => pickedImage(item.image, e.target.id)} />
                                
                            )
                        })}
                        </Slider>

                    </div>

                    <div className="overview">

                        <h1>ایفون 13</h1>
                        
                        <h2>قیمت : </h2>
                        <h3>38000000 تومان</h3>

                        <div className="color">
                            <h2>رنگ : </h2>
                            <div className="colors">
                                <div id="black" className="color-div" style={{backgroundColor: 'black'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="white" className="color-div" style={{backgroundColor: 'white'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="yellow" className="color-div" style={{backgroundColor: 'yellow'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="green" className="color-div" style={{backgroundColor: 'green'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="red" className="color-div" style={{backgroundColor: 'red'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="gray" className="color-div" style={{backgroundColor: 'gray'}} onClick={(e) => pick(e.target.id)}></div>
                                <div id="orange" className="color-div" style={{backgroundColor: 'orange'}} onClick={(e) => pick(e.target.id)}></div>
                            </div>
                        </div>


                        <div className="size">
                            <h2>سایز : </h2>

                            <div className="sizes">
                                <span className="size-span" id="16g" onClick={(e) => pick(e.target.id)}>16g</span>
                                <span className="size-span" id="32g" onClick={(e) => pick(e.target.id)}>32g</span>
                                <span className="size-span" id="64g" onClick={(e) => pick(e.target.id)}>64g</span>
                                <span className="size-span" id="128g" onClick={(e) => pick(e.target.id)}>128g</span>
                                <span className="size-span" id="256g" onClick={(e) => pick(e.target.id)}>256g</span>
                            </div>
                        </div>

                        <div className="count">
                            <h2>تعداد : </h2>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>


                        <div className="delivery">

                            <div>
                            <p>7 روز ضمانت بازگشت کالا</p>
                            </div>
                            
                            <div>
                            <p> ارسال با پست پیشتاز </p>
                            </div>
                            
                            <div>
                            <p> 2 سال گارانتی رایگان</p>
                            </div>
                        </div>

                        <button type="button">   
                            <i className="fa fa-plus"></i>

                            افزودن به سبد خرید
                        
                        </button>

                    </div>
                </div>

                
            </div>

            <div className="left-container">
                <div className="payment-card">
                       <h1> جزییات پرداخت</h1> 

                       <div className="payment-detail">
                        <div className="right">
                            <h2>قیمت محصول</h2>
                            <h2>هزینه ارسال</h2>
                            <h2>قابل پرداخت</h2>
                        </div>

                        <div className="left">
                            <h3>تومان 38000000 </h3>
                            <h3>تومان 60000 </h3>
                            <h3>تومان 38060000 </h3>
                        </div>
                       </div>

                       <div className="payment-desc">
                        <span>پرداخت آنلاین با تمام کارت های بانکی امکان پذیر میباشد</span>
                       </div>

                       <button type="button">   
                            <i className="fa fa-plus"></i>

                            افزودن به سبد خرید
                        
                        </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Product