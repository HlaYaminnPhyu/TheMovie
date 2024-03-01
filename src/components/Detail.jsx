import React, { useEffect, useState } from "react";
import { FaHome, FaImdb, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Detail = () => {
  const { id } = useParams();
  const [deMovie, setDeMovie] = useState([]);
  const [video, setVideo] = useState([]);

  let genres = [];
  for (let i in deMovie?.genres) {
    genres.push(deMovie?.genres[i].name);
  }
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
        // console.log(data);
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

  return (
    <div>
      <div className=" h-full text-white mt-20 w-full">
        <section
          className=" relative w-full"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${deMovie?.backdrop_path})`,
          }}
        >
          <div className=" absolute h-full w-full hero-overlay"></div>
          <div className=" flex justify-center items-center">
            <div className=" flex flex-col md:flex-row lg:flex-row w-full">
              <div className=" w-full lg:w-[35%] flex justify-center items-center h-[500px] z-10">
                <img
                  src={`https://image.tmdb.org/t/p/w300${deMovie?.poster_path}`}
                  className=" rounded flex justify-center items-center"
                  alt=""
                />
              </div>
              <div className=" w-full lg:w-[65%] flex justify-center items-center p-4">
                <div className=" z-10 w-full">
                  <h1 className=" text-3xl font-bold mt-4">
                    {deMovie?.original_title}
                  </h1>
                  <p className=" w-full text-sm font-medium tracking-wide mt-4 text-[#ffffffe4]">
                    {deMovie?.overview}
                  </p>
                  <div className="flex flex-row gap-3">
                    <div className=" flex flex-wrap gap-5 md:gap-14 lg:gap-20 my-4">
                      <div className=" flex gap-3 items-center">
                        <FaImdb className="text-xl text-[#f5c518]" />
                        <p className="text-[hsla(0,0%,100%,.75)]">
                          {deMovie?.vote_average}
                        </p>
                      </div>

                      <div className=" flex gap-3 items-center">
                        <p className="text-[hsla(0,0%,100%,.75)] text-sm font-semibold">
                          Go To Home Page
                        </p>
                        <a href={deMovie?.homepage}>
                          {" "}
                          <FaHome className=" text-xl text-[#e13100] " />
                        </a>
                      </div>
                      <div className=" flex gap-3 items-center">
                        <i>
                          <FaStar className=" text-xl text-[#f5c518]" />
                        </i>
                        <p className="text-[hsla(0,0%,100%,.75)] text-sm font-semibold">
                          {deMovie?.vote_count} counts
                        </p>
                      </div>
                      <div className=" flex gap-2 items-center">
                        <p className="text-[hsla(0,0%,100%,.75)] text-sm font-semibold">
                          Status:
                        </p>
                        <p className="text-[hsla(0,0%,100%,.75)] text-sm font-semibold">
                          {deMovie?.status}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col md:flex-row lg:flex-row gap-12 justify-center md:justify-between lg:justify-between items-center mt-10">
                    <div className="">
                      <div className=" text-sm text-white font-semibold flex gap-3">
                        <p className="text-[#999]">Tagline</p>
                        <p className=" text-[#fffffff1] tracking-normal">
                          {deMovie?.tagline}
                        </p>
                      </div>
                      <div className=" flex text-sm font-semibold mt-2 gap-3">
                        <p className="text-[#999]">Release Date</p>
                        <p className=" text-base text-[#fffffff1] tracking-normal">
                          {deMovie?.release_date}
                        </p>
                      </div>
                      <div className=" mt-2 text-sm font-semibold flex gap-3">
                        <p className="text-[#999]">Genres</p>
                        <p className=" text-[#fffffff1] tracking-normal">
                          {genres?.join(", ")}
                        </p>
                      </div>
                      <div className=" flex text-sm font-semibold mt-2 gap-3">
                        <p className="text-[#999]">Number Of Season</p>
                        <p className=" text-base text-[#fffffff1] tracking-normal">
                          {deMovie?.number_of_seasons}
                        </p>
                      </div>
                    </div>

                    <div className=" ">
                      <YouTube
                        videoId={video[0]?.key}
                        opts={opts}
                        // iframeClassName={string}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
