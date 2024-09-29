import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
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
  const [sort, setSort] = useState({ genre: "", order: "" });
  const location = useLocation();
  const [path, setPath] = useState(location.state);
  const { state } = useGlobalState();
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialState = useLoaderData();
  const { dispatch } = useGlobalState();

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/${path}`;
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${url}?page=${page}&with_genres=${sort.genre}&sort_by=${sort.order}&api_key=${apikey}`
      );

      if (page === 1) {
        dispatch(setMoviesCollection(data.results));
      } else {
        dispatch(addMovies(data.results));
      }

      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovieList(state.movies);
  }, [state.movies, path]);
  useEffect(() => {
    if (path) {
      fetchMovies();
    }
  }, [sort, page, path]);

  useEffect(() => {
    if (location.state) {
      setPath(location.state);
    }
  }, [location.state]);

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPage(1);
  };

  useEffect(() => {
    dispatch(setMoviesCollection(initialState.results));
  }, [initialState, dispatch]);

  return (
    <div className="w-full mx-auto p-4 flex flex-col justify-center space-y-6">
      <h3 className="text-2xl font-bold text-center text-gray-800">
        Explore Movies
      </h3>
      <div className="flex justify-center">
        <DropDown setSort={handleSortChange} sort={sort} />
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {loading ? (
        <div className="text-center">Loading movies...</div>
      ) : (
        <MainWrapper
          setPage={setPage}
          fetching={loading}
          setIsFetching={setLoading}
          movies={movieList}
          type={path}
        />
      )}
    </div>
  );
};

export default Movie;
