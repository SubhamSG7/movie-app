import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY;

export async function fetchHomePageMovies() {
  try {
    const trending = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`
    );
    const week = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}`
    );
    const popular = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
    );
    const topRated = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
    );
    const popularTv = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`
    );
    const topRatedTv = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`
    );
    return { trending: trending.data.results, week: week.data.results, popular: popular.data.results, topRated: topRated.data.results, popularTv: popularTv.data.results,topRatedTv:topRatedTv.data.results }
  } catch (error) {
    console.log("Failed to fetch HomePage Movies", error);
  }
}
export async function fetchWeeklyMovies() {

}
export  async function  fetchMovies() {
  try {
    const movies=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
    return movies.data
    
  } catch (error) {
    console.log(error);
    
  }
}