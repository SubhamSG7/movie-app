import { useEffect, useState } from "react";
import axios from "axios";
import { setGenre, useGlobalState } from "../Reducer/MovieState";

const apikey = import.meta.env.VITE_API_KEY;

export const useGenre = () => {
  const [genredata,setGenreData]=useState([])
  const { dispatch } = useGlobalState();
  
  useEffect(() => {
    const getGenre = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
        );

        if (data?.genres) {
          setGenreData(data.genres)
          dispatch(setGenre(data.genres));
        }
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    getGenre();
  }, []);
  return genredata; 
};

