import React from 'react'
import { useGlobalState } from '../Reducer/MovieState'

const MainWrapper = () => {
  const {state}=useGlobalState();
  let moviesCollection=state.movies;
  console.log(moviesCollection);
  
  
  return (
    <>

    </>
  )
}

export default MainWrapper
