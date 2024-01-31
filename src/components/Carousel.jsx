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
            <div className=" featured--vertical">
                <div className=" featured--horizontal">
                    <div className=" featured--name">
                        {originals?.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{originals?.vote_average} points</div>
                        {/* <div className="featured--year">{originals?.getFullYear()}</div> */}
                        <div className="featured--seasons">{originals?.number_of_seasons} season{originals?.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{originals?.overview}</div>
                    <div className="featured--buttons">
                        <a href='/watch/${item.id}' className="featured--watchbutton"><FaPlay size={13} /> Watch</a>
                        <a href='/list/add/${item.id}' className="featured--mylistbutton"><FaPlus size={13} /> Add</a>
                    </div>
                    <div className="featured--genres"><strong>Genres:</strong> {genres?.join(', ')}</div>
                </div>
            </div>
        </section>

		
	</div>
  )
}

export default Carousel