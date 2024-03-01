import React from "react";
import "./FeatureMovie.css";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = ({ originals }) => {
  let genres = [];
  for (let i in originals?.genres) {
    genres.push(originals?.genres[i].name);
  }

  console.log(originals);
  return (
    <div className="">
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${originals?.backdrop_path})`,
        }}
      >
        <div className=" featured--vertical">
          <div className=" featured--horizontal">
            <div className=" featured--name mt-24 md:mt-14 lg:mt-14">
              {originals?.original_name}
            </div>
            <div className="featured--info">
              <div className="featured--points">
                {originals?.vote_average} points
              </div>
              <div className="featured--year text-[hsla(0,0%,100%,.75)]">
                {originals?.first_air_date}
              </div>
              <div className="featured--seasons text-[hsla(0,0%,100%,.75)]">
                {originals?.number_of_seasons} season
                {originals?.number_of_seasons !== 1 ? "s" : ""}
              </div>
            </div>
            <div className=" w-[60%] text-[#ffffff8a] text-balance mt-6">
              {originals?.overview}
            </div>

            <div className="featured--genres mt-6 font-medium">
              <strong>Genres:</strong> {genres?.join(", ")}
            </div>

            {/* <div className=" mt-6 hidden md:flex lg:flex justify-center items-center gap-2 bg-[hsla(0, 0%, 100%, .08)] w-24 h-24 text-white p-4">
              <div className=" ">Trailor</div>
              <Link to={`/watch/${originals?.id}`}>
                <FaPlay className=" text-2xl" />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
