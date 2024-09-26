import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Trending from "../Components/Trending";
import {
  setGenre,
  setHomePageCollection,
  useGlobalState,
} from "../Reducer/MovieState";
import Popular from "../Components/Popular";
import Toprated from "../Components/Toprated";
import { getGenre } from "../Apis/GetGenre";

const Home = () => {
  const data = useLoaderData();
  const { dispatch } = useGlobalState();
  const genreData = getGenre();
  useEffect(() => {
    dispatch(setHomePageCollection(data));
  }, [data, dispatch]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await getGenre();
        dispatch(setGenre(genreData));
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };

    fetchGenres();
  }, [dispatch]);
  return (
    <>
      <h1>Home</h1>
      <Trending />
      <Popular />
      <Toprated />
    </>
  );
};

export default Home;
