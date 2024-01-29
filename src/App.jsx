import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";

import Path from "./routes/Path";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Movies from "./pages/Movies";
import api from "./api";
import Carousel from "./components/Carousel";
// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
// https://preview.themeforest.net/item/unded-creative-agency-and-portfolio-react-template/full_screen_preview/49841815?_ga=2.126775822.2070452220.1706285728
const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
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

  return (
    <MantineProvider>
      <div className=" bg-[#040707] h-fit">
        <Carousel originals={featuredData}/>
        {/* <Path/> */}
        <Movies />
      </div>
    </MantineProvider>
  );
};

export default App;
