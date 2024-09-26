import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import HomeRoute from "../Pages/HomeRoute";
import { fetchHomePageMovies, fetchWeeklyMovies } from "../Apis/Apis";
import WeeklyMovies from "../Components/WeeklyMovies";
import Movie from "../Components/Movie";
import { fetchMovies } from "../Apis/Apis";

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
        path: "week",
        element: <WeeklyMovies />,
        loader: fetchWeeklyMovies,
      },
      {
        path:"movies",
        element:<Movie/>,
        loader:fetchMovies
      }
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
