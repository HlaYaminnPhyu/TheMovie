import React from 'react'
import { FaStar } from "react-icons/fa";
import NoImg from "../img/download.jpg"
/* #110e1b */
/* #7c162e */
/* #5c162e */
/* #3c162f */
/* #191528 */

const Card = ({movie}) => {
	
  return (
	
		<div className=" w-48 my-2 shadow-lg shadow-[#191528] rounded-[5px] relative bg-[#191528 ]">
            <img src={`${movie.poster_path? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`: NoImg} `} alt="" />
           
            <div className="">
             <div className="flex gap-4 my-4">
             <i><FaStar className=' text-xl text-yellow-500'/></i>
             <p>{Number((movie.vote_average).toFixed(2))}</p>
             </div>
              <p className=' text-lg font-normal break-words mb-3'>{movie.original_title.substring(0,20)}</p>
              <button className=' bg-[#602424] w-[100%] text-white py-2 mb-1'>Detail</button>
              
            </div>
            
          
	</div>
  )
}

export default Card