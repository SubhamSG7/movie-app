import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
    const data=useLoaderData();
    console.log(data);
    
  return (
   <>
    <h1>Home</h1>
   </>
  )
}

export default Home
