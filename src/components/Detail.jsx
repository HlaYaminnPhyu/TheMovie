import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
	const {id}=useParams();
	const [deMovie,setDeMovie]=useState([]);
	// const API_KEY='9e42c112beec9727fcc0524687a55da2'

	// let Api=`https://api.themoviedb.org/3/`;

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9e42c112beec9727fcc0524687a55da2`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			// console.log(data);
			setDeMovie(data);
		  });
	  }, [deMovie]);

// console.log(deMovie);
	// const getDeMovie=async()=>{
	// 	setDeMovie(await Api(`movie/${id}&api_key=${API_KEY}`))
	// }
	// useEffect(()=>{
	// 	getDeMovie();
	// },[deMovie])
console.log(deMovie);
	// console.log(deMovie.budget);
  return (
	<div>
		<div className=" h-full text-white mt-20">
		<section className=" relative" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${deMovie?.backdrop_path})`
        }}>
		<div className=' absolute h-full w-full hero-overlay'></div>
			<div className=" grid grid-cols-3 w-full">
				 
			<div className=" col-span-1 flex justify-center items-center h-[500px] z-10">
				<img src={`https://image.tmdb.org/t/p/w300${deMovie.poster_path}`} className=' rounded' alt="" />
				{/* https://image.tmdb.org/t/p/w300${item.poster_path} */}
			</div>
			<div className=" col-span-2 flex justify-center items-center ">
				<div className=" z-10">
				<h1 className=' text-2xl'>{deMovie.original_title}</h1>
				<h1 className=' text-sm'>{deMovie.overview}</h1>
<p className=' text-lg'>{deMovie.release_date}</p>
<h1 className=' text-base'>{deMovie.tagline}</h1>
				</div>
			</div>

		</div>
			
			</section>
	
			
		</div>
	</div>
  )
}

export default Detail