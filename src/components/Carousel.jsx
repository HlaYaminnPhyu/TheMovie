import React from 'react'
import './FeatureMovie.css'
import { FaPlay, FaPlus } from 'react-icons/fa'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/autoplay";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";
// import Sidebar from './Sidebar';

const Carousel = ({originals}) => {


  let firstDate = new Date(originals?.first_air_date);
  let genres = [];
  for(let i in originals?.genres) {
      genres.push( originals?.genres[i].name );
  }
  return (
	<div className=''>


<section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${originals?.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {originals?.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{originals?.vote_average} pontos</div>
                        {/* <div className="featured--year">{originals?.getFullYear()}</div> */}
                        <div className="featured--seasons">{originals?.number_of_seasons} temporada{originals?.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{originals?.overview}</div>
                    <div className="featured--buttons">
                        <a href='/watch/${item.id}' className="featured--watchbutton"><FaPlay size={13} /> Assistir</a>
                        <a href='/list/add/${item.id}' className="featured--mylistbutton"><FaPlus size={13} /> Minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres?.join(', ')}</div>
                </div>
            </div>
        </section>
		{/* <div className=" flex">
    <div className=" flex-initial w-[75%]">

<Swiper
      className=""
      modules={[Autoplay]}
    //   autoplay={{ delay: 1000 }}
    >
      <SwiperSlide>
        <div className=" p-5 h-fit">
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
    </div> */}
		
	</div>
  )
}

export default Carousel