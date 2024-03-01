import React, { useEffect } from 'react'

const Filter = ({popular, setActiveGenre, filtered, activeGenre, setFiltered}) => {
	useEffect(()=>{
		if(activeGenre === 0){
			setFiltered(popular);
			return;
		}
		const filterMovie=popular.filter(movie=>movie.genre_ids.includes(activeGenre));
		
		setFiltered(filterMovie)
	},[activeGenre]);
	
  return (
	<div className=' flex gap-10 md:gap-8 lg:gap-10'>


		
		<button onClick={()=>setActiveGenre(0)} className=' text-sm md:text-base lg:text-base text-white hover:text-[#e13100] '>All</button>
		<button onClick={()=>setActiveGenre(28)} className=' text-sm md:text-base lg:text-base text-white hover:text-[#e13100]'>Actions</button>
		<button onClick={()=>setActiveGenre(16)} className=' text-sm md:text-base lg:text-base text-white hover:text-[#e13100]'>Animation</button>
		<button onClick={()=>setActiveGenre(53)} className=' text-sm md:text-base lg:text-base text-white hover:text-[#e13100]'>Thriller</button>


	</div>
  )
}

export default Filter