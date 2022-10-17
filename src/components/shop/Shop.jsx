import React, {useState} from 'react'
import Scard from './Scard'
import Scat from './Scat'
import './Style.css'

const Shop = ({shopItems, addToCart}) => {

    const [showFood, setShowFood] = useState(true)
    const [pickedFood, setPickedFood] = useState('1')

    
    
  return (
    <>
        <section className="shop background">
            <div className="container d_flex">
                <Scat />

                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2> انتخاب غذا  </h2>
                        </div>

                    </div>

                    <div className="mobile-heading ">
                        <button type="button"  className={showFood ? ('active'): ('')} onClick={() => {setShowFood(true)}}>غذا ها</button>
                        <button type="button" className={showFood ? (''): ('active')} onClick={() => {setShowFood(false)}}> پیش غذا ها</button>
                        
                    </div>

                    <div className="mobile-category">

                        
                            {showFood ? (
                                <div className="food grid2">
                                    <button type="button" id="1" className={pickedFood ? ('active'): ('')} onClick={(e) => setPickedFood(e.currentTarget.id)}>همبر</button>
                                    <button type="button" id="2" className="button">همبر</button>
                                    <button type="button" id="3" className="button">همبر</button>
                                    <button type="button" id="4" className="button">همبر</button>
                                    <button type="button" id="5" className="button">همبر</button>
                                    <button type="button" id="6" className="button">همبر</button>
                                </div>
                             ) : (
                                <div className="subfood grid2">
                                    <button type="button" className="button active">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                    <button type="button" className="button">نوشابه</button>
                                </div>
                             )}
                                
                        
                        
                        
                    </div>

                    <div className="product-content grid1">
                        <Scard shopItems={shopItems} addToCart={addToCart} />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Shop