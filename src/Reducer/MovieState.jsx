import { createContext, useContext, useReducer } from "react";

const initialState = {
  trendingMovies: [],
  weeklyMovies: [],
};
const GlobalStateContext = createContext();

function reducer(state, action) {
  return state;
}

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
