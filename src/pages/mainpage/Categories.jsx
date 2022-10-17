import React from 'react'
const Categories = () => {

    const data = [
        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "همبرگر 30 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "همبرگر 60 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "همبرگر 90 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "چیزبرگر 30 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "چیزبرگر 60 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "چیزبرگر 90 درصد",
        },

        {
            cateImg: require('./images/category/hamber.png'),
            cateName: " سوسیس بندری",
        },


        {
            cateImg: require('./images/category/hamber.png'),
            cateName: "هات داگ",
        },

        {
            cateImg: require('./images/category/fries.png'),
            cateName: "چیبس",
        },

        
        {
            cateImg: require('./images/category/fries.png'),
            cateName: "چیپس و پنیر",
        },

        {
            cateImg: require('./images/category/pepsi.png'),
            cateName: "نوشابه کوچک پپسی",
        },

        {
            cateImg: require('./images/category/pepsi.png'),
            cateName: "نوشابه کوچک کوکا کولا",
        },
       

        


        
    ]
  return (
    <>
        <div className="category">
             {data.map((value, index) => {
                return (
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>)
             })}
        </div>
    </>
  )
}

export default Categories