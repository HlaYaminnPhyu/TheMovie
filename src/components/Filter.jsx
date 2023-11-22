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
	<div className=' my-5 ml-20 flex gap-3'>
		<button onClick={()=>setActiveGenre(0)} className=' bg-[#5c162e] text-white rounded px-6 py-1'>All</button>
		<button onClick={()=>setActiveGenre(28)} className=' bg-[#5c162e] text-white rounded px-6 py-1'>Actions</button>
		<button onClick={()=>setActiveGenre(80)} className=' bg-[#5c162e] text-white rounded px-6 py-1'>Comedy</button>

	</div>
  )
}

export default Filter