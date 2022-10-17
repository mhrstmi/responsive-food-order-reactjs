import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



  return (
    <>
        <header className="header" >
            <div className='container d_flex' >
                

                <div className="navlink">
                    <ul className= "link f_flex capitalize" >
                        <li>
                            <Link to='/responsive-food-order-reactjs' >خانه</Link>
                        </li>
                       
                        
                        <li>
                            <Link to='/login' > ورود</Link>
                        </li>
                        <li>
                            <Link to='/login' > حساب کاربری</Link>
                        </li>

                       
                       
                    </ul>

                   
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar