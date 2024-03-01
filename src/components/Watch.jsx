import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Watch = () => {
	const { id } = useParams();
  const [deMovie, setDeMovie] = useState([]);
  const [video, setVideo] = useState([]);
	const getVideos = async () => {
		try {
		  await fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9e42c112beec9727fcc0524687a55da2`
		  )
			.then((res) => res.json())
			.then((json) => setVideo(json.results));
		} catch (err) {
		  console.error(err);
		}
	  };
	
	  useEffect(() => {
		fetch(
		  `https://api.themoviedb.org/3/movie/${id}?api_key=9e42c112beec9727fcc0524687a55da2`
		)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setDeMovie(data);
		  });
		getVideos();
	  }, [deMovie]);
	  const opts = {
		
		height: "250",
		width: "400",
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
			// autoplay: 1,
		},
		
	  };
	  console.log(video);
  return (
	<div>
      <div className=" h-full flex justify-center items-center text-white mt-20 w-full ">
        <section
          className=" relative w-full my-6"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${deMovie?.backdrop_path})`,
          }}
        >
          <div className=" absolute h-full w-full hero-overlay"></div>
          <div className=" flex justify-center items-center p-10">
		  <div className=" z-20">
                      <YouTube 
                        videoId={video?.[0]?.key}
                        // opts={opts}
                        // iframeClassName={string} 
                        
                      />
                    </div>
		  </div>
        </section>
      </div>
    </div>
  )
}

export default Watch