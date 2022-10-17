import React from 'react'
import './Style.css'

const Login = () => {
  return (
    <>
        <section className="login">
            <div className="login-container">
                <h1>وارد شوید</h1>

                
                    <form>
                    
                        <label>شماره تلفن : </label>
                        <input type="number" placeholder='__  __  __  __  __  __  __  __  __  __  __'/>
                        <span>شماره تلفن خود را وارد کنید</span>
                    
                    </form>
                

                <button type="button">ورود </button>
            </div>
        </section>
    </>
  )
}

export default Login