import React from 'react'
import { FaStar } from "react-icons/fa";
import NoImg from "../img/download.jpg"
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
	
		<div className=" w-48 my-2 rounded-[5px] relative bg-[#282828]">
            <img className=' object-fill w-48 h-72' src={`${movie.poster_path? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`: NoImg} `} alt="" />
           
            <div className="">
             <div className="flex gap-4 my-4">
             <i><FaStar className=' text-xl text-yellow-500'/></i>
             <p>{Number((movie.vote_average).toFixed(2))}</p>
             </div>
              <p className=' text-lg font-normal break-words mb-3'>{movie.original_title.substring(0,15)}</p>
              <button className=' bg-[#f1603c] w-[100%] text-[#282828] py-2 mb-1'>Detail</button>
              
            </div>
            
          
	</div>
  )
}

export default Card