import React from 'react'
import {BsClock} from 'react-icons/bs'

const Card = ({movie}) => {
	
  return (
	
		<div className=" my-2 shadow-lg shadow-[#191528] rounded-[5px] border-[1px] relative">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
           
            <div className="">
              <p className=''>{movie.original_title.substring(0,25)}</p>
              
            </div>
            
          
	</div>
  )
}

export default Card