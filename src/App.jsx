import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import Path from "./routes/Path";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Movies from "./pages/Movies";
import api from "./api";
import Carousel from "./components/Carousel";
import "./App.css"
import { FaSearch } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
// https://preview.themeforest.net/item/unded-creative-agency-and-portfolio-react-template/full_screen_preview/49841815?_ga=2.126775822.2070452220.1706285728

// https://api.themoviedb.org/3/discover/tv?api_key=9e42c112beec9727fcc0524687a55da2
// https://api.themoviedb.org/3/movie/changes?api_key=9e42c112beec9727fcc0524687a55da2
// https://api.themoviedb.org/3/movie/43901?api_key=9e42c112beec9727fcc0524687a55da2
// https://api.themoviedb.org/3/movie/10751/videos?api_key=9e42c112beec9727fcc0524687a55da2
// https://api.themoviedb.org/3/movie/10751/similar?api_key=9e42c112beec9727fcc0524687a55da2
// https://api.themoviedb.org/3/person/popular?api_key=9e42c112beec9727fcc0524687a55da2

const App = () => {

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
	let Api=`https://api.themoviedb.org/3/discover/movie`;
	// let Api=`https://api.themoviedb.org/3/${shown}/movie`;

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
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      console.log(list);
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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <MantineProvider>
      <div className=" min-h-full text-white">
        
        <nav className=" w-full px-1 py-2 lg:p-4 lg:pt-5 flex justify-between items-center font-bold sticky bg-transparent z-20">
      
      <div className=" flex items-center gap-10">
      
      <span className="logos">
        <a
          href=""
        >
          <MdMovieFilter className="text-4xl" />
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
        
        <div className=" flex items-center gap-2 border-b-2 rounded px-3 py-2">
          <FaSearch className=" text-white"/>
         <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className=" outline-none text-white bg-transparent" type="text" placeholder="Search..."/>
          
        </div>
     
    
 
  </nav>
        
      


        <Carousel originals={featuredData}/>
       
        <div className='page'>
      {/* <Header black={blackHeader} /> */}
      {/* {featuredData &&
        <FeaturedMovie item={featuredData} />} */}
      <section className='lists'>
        {movieList.map((item, key) => (<MovieRow key={key} title={item.title} items={item.items} />))}
      </section>


      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando' size={13}></img>
        </div>
      }
    </div>


        <Filter popular={movieData} filtered={filtered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltered={setFiltered}/>
	<div className=' flex flex-wrap justify-center items-center gap-3 min-h-screen'>
		{filtered?.map(movie=>{
			return(
				<div  key={movie.id} className=' w-[240px] h-[500px] rounded-lg'>
					<Card movie={movie} videos={video}/>
          
				</div>
				)
			})}
		
	</div>
      </div>
    </MantineProvider>
  );
};

export default App;
