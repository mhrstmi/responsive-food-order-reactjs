import React from 'react'

const Scat = () => {

    const cat = [
        {
            catImg: require('./images/brands/hamber.png'),
            catName: 'همبر 30 درصد',
        },

        {
            catImg: require('./images/brands/hamber.png'),
            catName: 'همبر 60 درصد',
        },

        {
            catImg: require('./images/brands/hamber.png'),
            catName: 'همبر 90 درصد',
        },

        {
            catImg: require('./images/brands/hamber.png'),
            catName: 'چیزبرگر 30 درصد ',
        },

        {
            catImg: require('./images/brands/hamber.png'),
            catName: ' چیزبرگر 60 درصد',
        },

        {
            catImg: require('./images/brands/hamber.png'),
            catName: 'چیزبرگر 90 درصد',
        },
       

    ]
  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>غذ ها</h1>
                <h1>پیش غذا ها</h1>
            </div>

            {cat.map((value, index) => {
                
                return (

                    <div className="box f_flex" key={index}>
                        <img src={value.catImg} alt='' />
                        <span>{value.catName}</span>
                    </div>

                )

            })}


            

        </div>
    </>
  )
}

export default Scat