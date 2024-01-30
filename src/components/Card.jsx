import React from 'react'
import { FaStar } from "react-icons/fa";
import NoImg from "../img/download.jpg"
import {IoPlayCircleOutline} from "react-icons/io5"
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

const Card = ({movie}) => {

  // var containsJapanese = string.match(/[\u3400-\u9FBF]/);


//   var a=$('a[href$="culture/new/index.html"]').text();
//   a=a+'K';
//  for(i=0;i<3;i++){ 
//     console.log(a.charCodeAt(i));
//  }
	
  return (

	
		<div className=" card w-full my-2 relative bg-[#000]">
            <div className=" overflow-hidden">
            <img className=' image object-fill w-full h-72' src={`${movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: NoImg} `} alt="" />
            <div className="middle">
            <IoPlayCircleOutline className=' text-6xl font-extralight'/>
  </div>
            </div>
            
             <div className="">
             <div className="flex gap-4 my-4">
             <i><FaStar className=' text-xl text-yellow-500'/></i>
             <p>{Number((movie.vote_average).toFixed(2))}</p>
             </div>
              <p className=' text-lg font-normal break-words mb-3'>{movie.original_title.substring(0,15)}</p>
              <button className=' bg-[#fdae16] w-[100%] text-[#282828] py-2 mb-1'>Detail</button>
              
            </div> 
            
          
	</div>
  )
}

export default Card