import { createContext, useContext, useReducer } from "react";

const initialState = {
  trending: [],
  week: [],
  popular: [],
  topRated: [],
  popularTv: [],
  movies: [],
  genre: [],
  imageUrl: "https://image.tmdb.org/t/p/original/",
  noImage: `https://movix-app-murex.vercel.app/assets/no-poster-4xa9LmsT.png`,
};
const GlobalStateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setHomePageCollection":
      const { trending, popular, topRated, week, popularTv, topRatedTv } =
        action.payload;
      return {
        ...state,
        trending,
        popular,
        topRated,
        week,
        popularTv,
        topRatedTv,
      };
    case "setMoviesCollection":
      return { ...state, movies: action.payload };
    case "addMovies":
      return { ...state, movies: state.movies.concat(action.payload) };
    case "setGenre":
      return { ...state, genre: action.payload };
    default:
      return { ...state };
  }
}
export const addMovies = (movies) => ({
  type: "addMovies",
  payload: movies,
});
export const setHomePageCollection = (movies) => ({
  type: "setHomePageCollection",
  payload: movies,
});
export const setMoviesCollection = (movies) => ({
  type: "setMoviesCollection",
  payload: movies,
});
export const setGenre = (genreData) => ({
  type: "setGenre",
  payload: genreData,
});

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
