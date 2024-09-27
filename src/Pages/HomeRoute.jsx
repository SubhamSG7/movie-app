import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { GlobalStateProvider } from "../Reducer/MovieState";

const HomeRoute = () => {
  return (
    <div className="h-100%">
      <Header className="h-[10%]" />
      <GlobalStateProvider>
        <Outlet />
      </GlobalStateProvider>
      <Footer className="h-[20%]" />
    </div>
  );
};

export default HomeRoute;
