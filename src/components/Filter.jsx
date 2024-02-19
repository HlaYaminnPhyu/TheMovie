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
	<div className=' flex gap-10'>
		<button onClick={()=>setActiveGenre(0)} className=' text-lg text-white hover:text-[#e13100] '>All</button>
		<button onClick={()=>setActiveGenre(28)} className=' text-lg text-white hover:text-[#e13100]'>Actions</button>
		<button onClick={()=>setActiveGenre(80)} className=' text-lg text-white hover:text-[#e13100]'>Comedy</button>

	</div>
  )
}

export default Filter