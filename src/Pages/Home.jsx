import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Trending from "../Components/Trending";
import { setHomePageCollection, useGlobalState } from "../Reducer/MovieState";
import Popular from "../Components/Popular";
import Toprated from "../Components/Toprated";

const Home = () => {
  const data = useLoaderData();
  const {dispatch}=useGlobalState();
  
  useEffect(()=>{
    dispatch(setHomePageCollection(data))
  },[data,dispatch])

  return (
    <>
      <h1>Home</h1>
      <Trending />
      <Popular/>
      <Toprated/>
    </>
  );
};

export default Home;
