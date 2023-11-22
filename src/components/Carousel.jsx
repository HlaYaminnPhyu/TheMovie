import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Sidebar from './Sidebar';

const Carousel = () => {
  return (
	<div className=' flex'>
		<div className=" flex-initial w-[75%]">

		<Swiper
          className=""
          modules={[Autoplay]}
        //   autoplay={{ delay: 1000 }}
        >
          <SwiperSlide>
            <div className=" p-5 h-full">
              <img
                className=" w-full"
                src="https://image.tmdb.org/t/p/w500/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg
				"
                
              />

            </div>
          </SwiperSlide>
          <SwiperSlide>
		  <div className=" p-5 h-full">
              <img
                className=" w-full"
                src="https://image.tmdb.org/t/p/w500/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg
				"
                
              />

            </div>
          </SwiperSlide>
          <SwiperSlide>
		  <div className=" p-5 h-full">
              <img
                className=" w-full"
                src="https://image.tmdb.org/t/p/w500/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg
				"
                
              />

            </div>
          </SwiperSlide>
          <SwiperSlide>
		  <div className=" p-5 h-full">
              <img
                className=" w-full"
                src="https://image.tmdb.org/t/p/w500/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg
				"
                
              />

            </div>
          </SwiperSlide>
        </Swiper>
		</div>
		<div className=" flex-initial w-[25%]">
			<Sidebar/>
		</div>
		
	</div>
  )
}

export default Carousel