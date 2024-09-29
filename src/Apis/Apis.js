import axios from "axios";
import { useEffect, useState } from "react";

const apikey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchHomePageMovies() {
  try {
    const [trending, week, popular, topRated, popularTv, topRatedTv] =
      await Promise.all([
        axios.get(`${BASE_URL}/trending/all/day?api_key=${apikey}`),
        axios.get(`${BASE_URL}/trending/all/week?api_key=${apikey}`),
        axios.get(`${BASE_URL}/movie/popular?api_key=${apikey}`),
        axios.get(`${BASE_URL}/movie/top_rated?api_key=${apikey}`),
        axios.get(`${BASE_URL}/tv/popular?api_key=${apikey}`),
        axios.get(`${BASE_URL}/tv/top_rated?api_key=${apikey}`),
      ]);

    return {
      trending: trending.data.results,
      week: week.data.results,
      popular: popular.data.results,
      topRated: topRated.data.results,
      popularTv: popularTv.data.results,
      topRatedTv: topRatedTv.data.results,
    };
  } catch (error) {
    console.error("Failed to fetch HomePage Movies", error);
    throw error;
  }
}

export async function fetchMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${apikey}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Movies", error);
    throw error;
  }
}

export const useGetSelectedCard = (id, type) => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const useSelectedcard = async (id, type) => {
      try {
        const getData = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${apikey}`
        );
        setResult(getData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) useSelectedcard(id, type);
  }, [id]);
  return { result, error, loading };
};
