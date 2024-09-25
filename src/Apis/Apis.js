import axios from "axios"



export async function fetchTrendingMovies(){
    const result=await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=fa89a24b6ec93d795380bdb4810bb735")
    console.log(result.data);
    return result.data
  }