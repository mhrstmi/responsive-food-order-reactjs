import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer className="desktop">
            <div className="container grid2">
                <div className="box">
                    <h1> <b>Sharif</b> Food</h1>
                    <p>هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!</p>

                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <img className="google-store" src={require('./images/googlestore.png')} alt='' />
                            <span>google play</span>
                            
                        </div>

                        <div className="img d_flex">
                            
                        <img className="app-store" src={require('./images/Appstore.png')} alt='' />
                            <span>App Store</span>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2>درباره ما</h2>
                    <ul>
                        <li>فروشگاه های ما</li>
                        <li>خدمات ما</li>
                        <li>شرایط و قوانین</li>
                        <li>سیاست های ما</li>
                        <li></li>
                    </ul>
                </div>


                <div className="box">
                    <h2>خدمات مشتریان</h2>

                    <ul>
                        <li>کمک لازم دارید؟ </li>
                        <li>راهنمای خرید </li>
                        <li>نحوه ارسال  </li>
                        <li> زمان کاری</li>
                       

                    </ul>
                </div>


                <div className="box">
                    <h2>ارتباط با ما</h2>
                    <ul>
                        <li>آدرس : شیراز-ملاصدرا-ساختمان تجاری پارس -طبقه 2-کامپیوتر پارس</li>
                        <li>ایمیل : example:@gmail.com</li>
                        <li>شماره تلفن : 090000000000</li>
                    </ul>
                </div>

            </div>


        
        </footer>

        <footer className="mobile">
            <div className="container grid2">
                <div className="box">
                    <h1>digi<b>kala</b></h1>
                    <p>هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!</p>

                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <img className="google-store" src={require('./images/googlestore.png')} alt='' />
                            <span>google play</span>
                            
                        </div>

                        <div className="img d_flex">
                            
                        <img className="app-store" src={require('./images/Appstore.png')} alt='' />
                            <span>App Store</span>
                        </div>
                    </div>
                </div>


                

            </div>

        </footer>
    </>
  )
}

export default Footer