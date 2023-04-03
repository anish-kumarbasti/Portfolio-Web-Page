import './Portfolio.css'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Slider from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import Test1 from '../../img/test1.jpg'
import Test2 from '../../img/test2.jpg'
// import Test1 from '../../img/test1.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span>Resent Products</span>
        <span>Portfolio</span>
        {/* Slider Portfolio */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">  
        <SwiperSlide>
            <img src={Slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Test1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Test2} alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio
