import React from 'react'
import './Style.css'

const Register = () => {
  return (
    <>
        <section className="register">
            <div className="register-container">
                <h1>یک حساب کاربری ایجاد کنید</h1>

                <div className="inputs">

                    <div className="right">

                        <div className="input">
                            <label> شماره تلفن : </label>
                            <input type="number" placeholder="شماره تلفن" />
                            <span>شماره تلفن خود را وارد کنید</span>
                        </div>

                        <div className="input">
                            <label> ایمیل : </label>
                            <input type="email" placeholder="ایمیل " />
                            <span> ایمیل خود را وارد کنید  </span>
                        </div>

                        <div className="input">
                            <label>  نام : </label>
                            <input type="text" placeholder="نام " />
                            <span>نام  خود را وارد کنید</span>
                        </div>

                        <div className="input">
                            <label>  نام خانوادگی : </label>
                            <input type="text" placeholder="نام خانوادگی " />
                            <span>نام خانوادگی  خود را وارد کنید</span>
                        </div>
                    </div>

                    <div className="left">
                        <div className="input">
                            <label> تاریخ تولد : </label>
                            <input type="date" placeholder="تاریخ تولد " />
                            <span>تاریخ تولد خود را وارد کنید</span>
                        </div>

                        <div className="input">
                            <label> نام کاربری : </label>
                            <input type="text" placeholder=" نام کاربری" />
                            <span> نام کاربری خود را وارد کنید</span>
                        </div>

                        <div className="input">
                            <label>  رمز عبور : </label>
                            <input type="password" placeholder="رمز عبور " />
                            <span> رمز عبور خود را وارد کنید</span>
                        </div>

                        <div className="input">
                            <label>  تکرار رمز عبور : </label>
                            <input type="password" placeholder=" رمز عبور" />
                            <span> رمز عبور خود را وارد کنید</span>
                        </div>
                    </div>

                </div>

                <div className="rules">
                    <input type="checkbox" />
                    <span> <b>ضوابط و قوانین</b> را مطالعه کرده ام و با آن ها موافقم</span>
                </div>
                
                <button type="button">ایجاد حساب کاربری</button>
            </div>
        </section>
    </>
  )
}

export default Register