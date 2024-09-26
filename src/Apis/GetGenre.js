import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY;

export const getGenre = async () => {
  try {
    const genre = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
    );
    return genre.data;
  } catch (error) {
    console.log(error);
  }
};
