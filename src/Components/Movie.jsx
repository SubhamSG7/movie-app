import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DropDown from "./DropDown";
import MainWrapper from "./MainWrapper";
import {
  addMovies,
  setMoviesCollection,
  useGlobalState,
} from "../Reducer/MovieState";
import axios from "axios";

const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const [sort, setSort] = useState({
    genre: "",
    order: "",
  });
  const [page, setPage] = useState(1);
  const initialState = useLoaderData();
  const { dispatch } = useGlobalState();
  const handleFilter = async () => {
    const url = "https://api.themoviedb.org/3/discover/movie";
    try {
      const { data } = await axios.get(
        `${url}?page=${page}&with_genres=${sort.genre}&sort_by=${sort.order}&api_key=${apikey}`
      );

      if (page === 1) {
        dispatch(setMoviesCollection(data.results));
      } else {
        dispatch(addMovies(data.results));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    handleFilter();
  }, [sort, page]);
  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPage(1);
  };

  useEffect(() => {
    dispatch(setMoviesCollection(initialState.results));
  }, [initialState, dispatch]);

  return (
    <div>
      <h3>Explore Movies</h3>
      <DropDown setSort={handleSortChange} sort={sort} />
      <MainWrapper setPage={setPage} />
    </div>
  );
};

export default Movie;
