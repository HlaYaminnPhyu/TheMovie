import React from 'react'
import { FaStar } from "react-icons/fa";
import NoImg from "../img/download.jpg"
import {IoPlayCircleOutline} from "react-icons/io5"
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
/* #110e1b */
/* #7c162e */
/* #5c162e */
/* #3c162f */
/* #191528 */


// #bc6c25
// #dda15e
// #fefae0
// #283618
// #606c38
// #

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
            {/* <IoPlayCircleOutline className=' text-6xl font-extralight'/> */}
            <a href=""><IoPlayCircleOutline className=' text-6xl font-extralight hover:text-[#e13100]'/></a>
            <Link to={`/detail/${movie.id}`}>
              <button className='bg-gray-500 px-4 py-2'>Detail</button>
            </Link>
            {/* <YouTube videoId={videos[0]?.key} className=' text-6xl font-extralight'/> */}
            

  </div>
  <div className=" b absolute">
              <button className=' w-full py-2 px-10 bg-slate-500 text-black'>Detail</button>
            </div>
              </div>
            
            </div>
            
             <div className="">
             
              <p className=' text-lg font-bold break-words mt-4'>{movie.original_title.substring(0,25)}</p>
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