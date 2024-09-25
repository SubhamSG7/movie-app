import { useReducer } from "react";

const initialState = {
  trendingMovies: [],
  weeklyMovies: [],
};

function reducer(state, action) {
  console.log("hello");
  return state;
}

const MoviesState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return children({
    state,
    dispatch,
  });
};
export default MoviesState;
