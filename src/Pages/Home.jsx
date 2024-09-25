import React from "react";
import { useLoaderData } from "react-router-dom";
import Trending from "../Components/Trending";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <h1>Home</h1>
      <Trending />
    </>
  );
};

export default Home;
