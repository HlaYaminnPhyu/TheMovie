import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
	const {id}=useParams();
	const [deMovie,setDeMovie]=useState({});
	// const API_KEY='9e42c112beec9727fcc0524687a55da2'

	// let Api=`https://api.themoviedb.org/3/`;

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9e42c112beec9727fcc0524687a55da2`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setDeMovie(data);
		  });
	  }, []);

// console.log(deMovie);
	// const getDeMovie=async()=>{
	// 	setDeMovie(await Api(`movie/${id}&api_key=${API_KEY}`))
	// }
	// useEffect(()=>{
	// 	getDeMovie();
	// },[deMovie])

	// console.log(deMovie.budget);
  return (
	<div><h1 className=' text-5xl text-white'>{deMovie.budget}</h1></div>
  )
}

export default Detail