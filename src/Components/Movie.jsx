import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DropDown from "./DropDown";
import MainWrapper from "./MainWrapper";
import { setMoviesCollection, useGlobalState } from "../Reducer/MovieState";
import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const [sort, setSort] = useState({
    genre: "",
    order: ""
  });
  const initialState = useLoaderData();
  const { dispatch } = useGlobalState();

  useEffect(() => {
    dispatch(setMoviesCollection(initialState.results));
  }, [initialState, dispatch]);

  useEffect(() => {
    const handleFilter = async () => {
      if (sort.genre || sort.order) {
        const url = "https://api.themoviedb.org/3/discover/movie";
        try {
          const { data } = await axios.get(
            `${url}?with_genre=${sort.genre}&sort_by=${sort.order}?api_key=${apikey}`
          );
          dispatch(setMoviesCollection(data.results));  
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    handleFilter(); 
  }, [sort, dispatch]); 

  return (
    <div>
      <h3>Explore Movies</h3>
      <DropDown setSort={setSort} sort={sort} />
      <MainWrapper />
    </div>
  );
};

export default Movie;
