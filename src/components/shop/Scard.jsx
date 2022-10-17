import React, {useState} from 'react'

const Scard = ({shopItems, addToCart}) => {

    const [count, setCount] = useState(0);

    const increment = () => {
 
        setCount(count + 1)
 
    }

  return (
    <>
        {shopItems.map((productItem) => {

            return (


            <div className="box" key={productItem.id}>
                <div className="product mtop">
                    <div className="img">
                        <span className="discount">{productItem.discount} تخفیف</span>
                        <img src={productItem.cover} alt="" />
                        <div className="product-like">
                            <label>{count}</label> <br />
                            <i className="fa fa-heart" onClick={increment}></i>
                        </div>
                    </div>

                    <div className="product-details">
                        <h3>{productItem.name}</h3>
                        <div className="rate">
                            
                            <div className="starts">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>

                            <p>امتیاز دهید</p>
                        </div>


                        <div className="price">
                            <h4>{productItem.price} تومان</h4>
                            <button onClick={() => addToCart(productItem)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            )

            })}
    </>
  )
}

export default Scard