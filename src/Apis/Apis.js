import axios from "axios"
const apikey=import.meta.env.VITE_API_KEY;




export async function fetchTrendingMovies(){
    const result=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`)
    return result.data
  }
export async function fetchWeeklyMovies() {
    const result=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}`)
    return result.data
}
