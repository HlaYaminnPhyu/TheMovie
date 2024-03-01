import React, { useEffect, useState } from 'react'
import MovieRow from './MovieRow';
import api from '../api';
import Filter from './Filter';
import { FaSearch } from 'react-icons/fa';
import Hero from './Hero';
import axios from 'axios';
import { MantineProvider } from '@mantine/core';
import Card from './Card';

const MovieList = () => {


	const [movieData,setMovieData]=useState([]);
	const [filtered,setFiltered]=useState([]);
	const [activeGenre,setActiveGenre]=useState(0);
	const [inputValue,setInputValue]=useState('');
  const [video,setVideo]=useState([]);
  useEffect(()=>{
		Movie();
    getVideos();
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
const getVideos=async()=>{
  try{
    await fetch("https://api.themoviedb.org/3/movie/10751/videos?api_key=9e42c112beec9727fcc0524687a55da2")
    .then(res=>res.json())
    .then(json=>setVideo(json.results))
  }catch(err){
    console.error(err);
  }
  
}


  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
    
    
      
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");
   

      setFeaturedData(chosenInfo);

      console.log(chosenInfo);
    };

    loadAll();
  }, []);



  return (
    <MantineProvider>
      
      <div className=" min-h-full text-white">

        <Hero originals={featuredData}/>
    <div className=" -mt-10 lg:-mt-8">
    <nav className=" w-full py-2 p-4 lg:pt-5 flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between items-center font-bold sticky bg-transparent z-20">
      
      <div className=" flex items-center">
      
     
      <Filter popular={movieData} filtered={filtered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered}/>
      
      </div>
        
        <div className=" my-4 md:mt-0 lg:mt-0 flex items-center gap-2 border-b-2 rounded px-3 py-2">
          <FaSearch className=" text-white"/>
         <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className=" outline-none text-white bg-transparent" type="text" placeholder="Search..."/>
          
        </div>
  </nav>
        
    </div>
	<div className=' flex flex-wrap justify-center items-center gap-3 min-h-screen'>
		{filtered?.map(movie=>{
			return(
				<div  key={movie.id} className=' w-[230px] h-[480px] rounded-lg'>
					<Card movie={movie} videos={video}/>
          
				</div>
				)
			})}
		
	</div>
  <hr  className=" text-white w-full my-20"/>
  <section className='lists'>
        {movieList.map((item, key) => (<MovieRow key={key} title={item.title} desc={item.desc} items={item.items} />))}
      </section>


      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando' size={13}></img>
        </div>
      }
      </div>
    </MantineProvider>
  );
}

export default MovieList