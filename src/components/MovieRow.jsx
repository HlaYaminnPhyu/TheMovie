import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoPlayCircleOutline } from 'react-icons/io5';

const MovieRow = ({ title, items ,desc }) => {
	
	const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        // let listW = items.results.length * 200;

        if ((window.innerWidth - listW) > x) {
            // x = (window.innerWidth - listW) - 60;
            x = (window.innerWidth - listW) - 60;

        }
        setScrollX(x);
    }
  return (
	<div className="movieRow">
		<div className=" ml-5">
		<div className=" flex justify-start items-center gap-3">
		<div className=" w-1 h-8 bg-[#e13100]"></div>
	<h3 className=' text-xl font-bold'>{title}</h3>
		</div>
		<h3 className=' text-base my-2 font-semibold text-[hsla(0,0%,100%,.7)]'>{desc}</h3>
		</div>
		
	<div className="movieRow--left" onClick={handleLeftArrow}>
	<FaAngleLeft style={{fontSize: 50}} className=' hover:text-[#e13100]' />
	</div>
	<div className="movieRow--right">
	<FaAngleRight style={{fontSize: 50}} className=' hover:text-[#e13100]' onClick={handleRightArrow}/>
	</div>
	<div className="movieRow--listarea">
		<div className="movieRow--list" style={{
			marginLeft: scrollX,
			width: items.results.length * 150
			// width: items.results.length * 300

			}}>
			{items.results.length > 0 && items.results.map((item, key) => (
			   <div key={key} className="movieRow--item">
				
				<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
				<div className="mid">
          
		  {/* <a href=""><IoPlayCircleOutline className=' text-6xl font-extralight'/></a> */}
</div>
			</div>
			))}
		</div>
	</div>
</div>
  )
}

export default MovieRow