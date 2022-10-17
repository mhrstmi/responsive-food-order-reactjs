import React from 'react'
import './Cart.css'

const Cart = ({cartItem, addToCart, removeFromCart}) => {

    const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price, 0);

  return (
    <>
        <section className="cart-items">
            <div className="container d_flex">
                <div className="cart-details">
                    {cartItem.length === 0 && <h1 className="no-items product">محصولی در سبد خرید شما نیست</h1>}

                    {cartItem.map((item) => {
                        const productQty = item.price * item.qty;

                        return (

                            <div className="cart-list product d_flex">
                                <div className="img">
                                    < img src={item.cover} alt="" />
                                </div>

                                <div className='cart-details'>
                                    <h3>{item.name}</h3>
                                    <h4>تعداد : {item.qty}</h4>
                                    <h4>قیمت: {item.price}
                                    
                                        <span>مجموع: {productQty} تومان</span>
                                    </h4>
                                    
                                </div>

                                <div className="cart-items-function">
                                    <div className="removeCart">

                                        <button>
                                            <i className="fa fa-times close home-btn"></i>
                                        </button>
                                        
                                    </div>

                                    <div className="cartControl d_flex">
                                        <button className="incCart" onClick={() => addToCart(item)}>
                                            <i className="fa fa-plus"></i>
                                        </button>

                                        <button className="decCart" onClick={() => removeFromCart(item)}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>

                                </div>

                                <div className="cart-item-price"></div>
                            </div>


                            )
                    })}

                    </div>

                    <div className="cart-total product">
                        <h2>خلاصه سبدخرید</h2>
                        <div className="cart-total-details d_flex">

                            <div className="cart-total-detail">
                                <h4>جمع سبدخرید : </h4>
                                <h3>{totalPrice} تومان</h3>
                            </div>
                            
                            
                            <div className="cart-total-detail">
                                <h4>هزینه ارسال   : </h4>
                                <h3>60000 تومان</h3>
                            </div>
                            

                            <div className="cart-total-detail">
                                <h4>جمع کل سبدخرید : </h4>
                                <h3>{totalPrice + 60000} تومان</h3>
                            </div>


                            <button>رفتن به صفحه پرداخت</button>
                            
                        </div>
                    </div>
                    
                
            </div>
        </section>
    </>
  )
}

export default Cart