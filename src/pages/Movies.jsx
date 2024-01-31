import { Input } from '@mantine/core';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card';
import { FaSearch } from 'react-icons/fa';
import Filter from '../components/Filter';


const Movies = () => {
	
	const [movieData,setMovieData]=useState([]);
	const [filtered,setFiltered]=useState([]);
	const [activeGenre,setActiveGenre]=useState(0);
	const [inputValue,setInputValue]=useState('');


	useEffect(()=>{
		Movie();
	},[inputValue]);
	const shown=inputValue?'search':'discover';
	let Api=`https://api.themoviedb.org/3/${shown}/movie`;
	const Movie=async()=>{
		const data=await axios.get(Api,{
			params:{
				api_key:`9e42c112beec9727fcc0524687a55da2`,
				query:inputValue
			}
		})
		const results=data.data.results
		setMovieData(results);
		setFiltered(results);
	}
	// let Detail=`https://api.themoviedb.org/3/movie/926599`;
  https://api.themoviedb.org/3/discover/movie?api_key=9e42c112beec9727fcc0524687a55da2


// console.log(movieData);
// console.log(inputValue);

  return (
	<div className="min-h-full text-white">
   
		<nav className=" w-full px-1 py-2 lg:p-4 lg:pt-5 md:mx-auto flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:justify-between font-bold fixed bg-black z-20">
      <div className=" flex items-center justify-between container mx-auto px-5 py-2 rounded">
        <div className=" flex items-center gap-7">
        
        <span className="logos">
          <a
            href=""
          >
            <img
              src="https://asuratoon.com/wp-content/uploads/2021/03/Group_1.png"
              className=" w-[50px] h-[50px]"
              alt="asura scans manhwa comic"
            />
          </a>
        </span>
        <div className="">
          <ul className=" flex gap-6">
            <li className=" text-lg">
            <a href="">Movies
            </a>
            </li>
            <li className="text-lg">
              <a href="">TV Show</a>
            </li>
            <li className="text-lg">
              <a href="">People</a>
            </li>
            <li className="text-lg">
              <a href="">Recruitment</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="">
          
          <div className=" flex items-center gap-2 border-1 rounded px-2 py-2 bg-[#3c162f]">
            <FaSearch />
           <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className=" outline-none bg-transparent" type="text" placeholder="Search..."/>
            
          </div>
        </div>
      </div>
   
    </nav>
	<Filter popular={movieData} filtered={filtered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered}/>
	<div className=' flex flex-wrap justify-center items-center gap-3 min-h-screen'>
		{filtered?.map(movie=>{
			return(
				<div  key={movie.id} className=' w-[240px] h-[500px] rounded-lg'>
					<Card movie={movie}/>
          
				</div>
				)
			})}
		
	</div>
	</div>
  )
}

export default Movies