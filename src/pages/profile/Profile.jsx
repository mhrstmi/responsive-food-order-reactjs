import React from 'react'
import './Profile.css'
import Tdata from '../../components/top/Tdata'
import Ndata from '../../components/new/Ndata'

const Profile = () => {
  return (
    <>
        <section className="profile">

            <div className="container">

                <div className="new-heading">

                    <img src={require("../../components/new/images/new.png")} alt="" />
                    
                    <h1>جدیدترین محصولات </h1>

                </div>

                {Ndata.slice(0, 3).map((value, index) => {
                    return (

                        
                        <div className="new product" key={index}>
                            <h2>{value.name}</h2>

                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>

                            <h3>{value.price} تومان</h3>

                            
                        </div>
                    )
                })}

                
            </div>
            <div className="container-profile">
                

                    <div className="buttons">

                            <button type="button">سفارشات <b>درحال اماده سازی</b></button>
                            
                            <button type="button">سفارشات <b>تحویل داده شده</b></button>
                            
                           
                       
                    </div>

                    <div className="inputs">


                        <div className="right">
                        <label>شماره تلفن :</label>
                        <input type="number" placeholder="شماره تلفن" />

                        <label> ایمیل :</label>
                        <input type="email" placeholder="ایمیل" />
                        </div>

                        <div className="left">

                        <label>نام :</label>
                        <input type="text" placeholder="نام" />

                        <label> نام خانوادگی :</label>
                        <input type="text" placeholder="نام خانوادگی" />
                        </div>
                        
                    
                    </div>

                    <hr />
                    
                    <div className="address" >
                        <h1>آدرس </h1>
                        <input type="number" placeholder="کد پستی" />

                        <textarea placeholder="ادرس خود را وارد کنید"></textarea>
                    </div>

                    <div className="btn">
                    <button type="button" >ذخیره اطلاعات</button>
                    </div>

                    
            </div>


            <div className="container">

                <div className="cate-heading">

                    <i className="fa fa-bars"></i>
                
                    <h1> دسته بندی های محبوب</h1>
                </div>

            {Tdata.slice(0, 3).map((value, index) => {
                    return (
                        <div className="cate product" key={index}>
                            <h2>{value.para}</h2>

                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>

                            <p>{value.desc}</p>

                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Profile