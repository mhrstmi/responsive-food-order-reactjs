import React from 'react'

const Filter = () => {

    const pick = (id) => {
        const element = document.getElementById(id)
        element.classList.toggle("picked")
    }

  return (
    <>
        <div className="filter-container">
            <h1>فیلتر ها</h1>

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

            <div className="price">
                <h2>قیمت : </h2>

                <div className="price-range">
                    <p>از</p>
                    <input type="number" placeholder='حداقل قیمت   ' />
                    <p>تا</p>
                    <input type="number" placeholder='حداکثر قیمت  ' />
                </div>

            </div>

            <button>فیلتر کردن</button>
        </div>
    </>
  )
}

export default Filter