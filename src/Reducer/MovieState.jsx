import { createContext, useContext, useReducer } from "react";

const initialState = {
  trending: [],
  week:[],
  popular:[],
  topRated:[],
  popularTv:[],
  movies:[],
  imageUrl:"https://image.tmdb.org/t/p/original/"
};
const GlobalStateContext = createContext();

function reducer(state, action) {
  switch(action.type){
    case "setHomePageCollection":
      const {trending,popular,topRated,week,popularTv,topRatedTv}=action.payload
      return {...state,trending,popular,topRated,week,popularTv,topRatedTv};
    case "setMoviesCollection":
      return {...state,movies:action.payload}
}
  return state;
}

export const setHomePageCollection = (movies) => ({
  type: 'setHomePageCollection',
  payload: movies,
});
export const setMoviesCollection=(movies)=>({
  type:"setMoviesCollection",
  payload:movies
})

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
