import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getMovies } from '../services/movieSlice';
import Card from '../components/Card';
import Filter from '../components/Filter';
import axios from 'axios';

// https://api.themoviedb.org/3/genre/movie/list?api_key=9e42c112beec9727fcc0524687a55da2&language=en-US
// https://api.themoviedb.org/3/trending/movie/day?api_key=9e42c112beec9727fcc0524687a55da2

const Movies = () => {
	const [filtered,setFiltered]=useState([]);
	const [popular,setPopular]=useState([]);
	const [activeGenre,setActiveGenre]=useState(0);

	useEffect(()=>{
		getData(`popular`);
	}, []);
	

	const BASE_URL=`https://api.themoviedb.org/3/movie/`;
	const apiKey=`9e42c112beec9727fcc0524687a55da2`;
	
	const getData=(url)=>{
		axios.get(`${BASE_URL}${url}?api_key=${apiKey}`).then((response)=>{
			const results=response.data.results;
			console.log(results);
			setPopular(results);
		setFiltered(results);
		})
	}
	
	
  return (
	<>
	<Filter popular={popular} filtered={filtered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered}/>
	<div className=' flex flex-wrap gap-5 justify-center'>
		{filtered?.map(movie=>{
			return(
				<div  key={movie.id} className=''>
					<Card movie={movie}/>
				</div>
				)
			})}
		
	</div>
	</>
	
  )
}

export default Movies