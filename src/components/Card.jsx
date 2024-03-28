import React from 'react'
import { FaStar } from "react-icons/fa";
import NoImg from "../img/20.jpg"
import {IoPlayCircleOutline} from "react-icons/io5"
import { Link } from 'react-router-dom';


const Card = ({movie,videos}) => {
  
  // console.log(movie.id);
// console.log(videos);
  // var containsJapanese = string.match(/[\u3400-\u9FBF]/);


//   var a=$('a[href$="culture/new/index.html"]').text();
//   a=a+'K';
//  for(i=0;i<3;i++){ 
//     console.log(a.charCodeAt(i));
//  }

	
  return (

	
		<div className=" card w-full h-full my-2 relative bg-[#000]">
     
            <div className=" overflow-hidden">
              <div className=" relative">
              <img className=' image object-fill w-full h-[350px]' src={`${movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: NoImg} `} alt="" />
            <div className="middle">
            <Link to={`/detail/${movie.id}`}>
            <IoPlayCircleOutline className=' text-6xl font-extralight hover:text-[#e13100]'/>

            </Link>
           

  </div>
  <div className="b">
  <Link to={`/detail/${movie.id}`}>
              <button className=' w-full py-2 px-5 backdrop-blur-sm bg-white/20'>Detail</button>

            </Link>
  </div>
 
              </div>
            
            </div>
            
             <div className="">
             
              <p className=' text-lg font-bold break-words'>{movie.original_title.substring(0,20)}</p>
              <div className="flex justify-between items-center">
              <div className=" flex flex-col justify-start items-center gap-1">
              <p className=' text-xs text-[hsla(0,0%,100%,.75)]'>Release Date</p>
              <p className=' text-xs text-[hsla(0,0%,100%,.75)]'>{movie.release_date}</p>
              </div>
              <div className="flex flex-row-reverse gap-3 my-4">
             <i><FaStar className=' text-xl text-[#f5c518]'/></i>
             <p className='text-[hsla(0,0%,100%,.75)]'>{Number((movie.vote_average).toFixed(1))}</p>
             </div>
              </div>
              
              
            </div> 
            
            
	</div>
  )
}

export default Card