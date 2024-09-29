import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import HomeRoute from "../Pages/HomeRoute";
import { fetchHomePageMovies } from "../Apis/Apis";
import Movie from "../Components/Movie";
import { fetchMovies } from "../Apis/Apis";
import SearchComp from "../Components/SearchComp";
import IndividualWrapper from "../Components/IndividualWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchHomePageMovies,
      },
      {
        path: "movies",
        element: <Movie />,
        loader: fetchMovies,
      },
      {
        path: "search",
        element: <SearchComp />,
      },
      {
        path: "selected",
        element: <IndividualWrapper />,
      },
    ],
  },
]);

const Route = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Route;
