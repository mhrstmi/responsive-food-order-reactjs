import React from 'react'
import TopCard from './TopCard'

const TopCate = () => {
  return (
    <>
        <section className="topCate background" >
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <i className="fa fa-bars"></i>
                        <h2>دسته بندی های پر طرفدار </h2>
                    </div>


                    <div className="heading-right row">
                        <span>مشاهده همه</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>

                <TopCard />

            </div>
        </section>
    </>
  )
}

export default TopCate