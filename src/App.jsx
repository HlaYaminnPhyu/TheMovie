import React, { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import api from "./api";
import "./App.css";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Watch from "./components/Watch";

const App = () => {
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      console.log(list);

      let originals = list.filter((i) => i.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");

      console.log(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <MantineProvider>
      <div className=" min-h-full text-white">
        <Header black={blackHeader} />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
    </MantineProvider>
  );
};

export default App;
