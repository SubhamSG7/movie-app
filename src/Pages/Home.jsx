import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Trending from "../Components/Trending";
import { setHomePageCollection, useGlobalState } from "../Reducer/MovieState";
import Popular from "../Components/Popular";
import Toprated from "../Components/Toprated";
import SearchBody from "../Components/SearchBody";
import Loader from "../Components/Loader";

const Home = () => {
  const data = useLoaderData();
  const { dispatch } = useGlobalState();
  useEffect(() => {
    dispatch(setHomePageCollection(data));
  }, [data, dispatch]);

  return (
    <>
      <div>
        <SearchBody />
        <Trending />
        <Popular />
        <Toprated />
      </div>
    </>
  );
};

export default Home;
