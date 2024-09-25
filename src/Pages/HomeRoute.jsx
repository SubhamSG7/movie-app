import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { GlobalStateProvider } from "../Reducer/MovieState";

const HomeRoute = () => {
  return (
    <>
      <Header />
      <GlobalStateProvider>
        <Outlet />
      </GlobalStateProvider>
      <Footer />
    </>
  );
};

export default HomeRoute;
