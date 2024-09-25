
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../Pages/Home"
import HomeRoute from "../Pages/HomeRoute"
import { fetchTrendingMovies ,fetchWeeklyMovies} from "../Apis/Apis"
import WeeklyMovies from "../Components/WeeklyMovies"


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeRoute/>,
        children:[{
          index:true,
          element:<Home/>,
          loader:fetchTrendingMovies
        },{
          path:"week",
          element:<WeeklyMovies/>,
          loader:fetchWeeklyMovies
        },
      ]
    },
])

const Route = () => {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Route
