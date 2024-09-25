
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../Pages/Home"
import HomeRoute from "../Pages/HomeRoute"
import { fetchTrendingMovies } from "../Apis/Apis"


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeRoute/>,
        children:[{
          index:true,
          element:<Home/>,
          loader:fetchTrendingMovies
        },{
          
        }]
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
