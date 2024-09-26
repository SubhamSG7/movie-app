import React from 'react'

const MoveTvToogle = ({settoggleMovieTv}) => {
    function handleMovieClick(){
        settoggleMovieTv("Movie")
    }
    function handleTvShowsClick(){
        settoggleMovieTv("tv")
    }
  return (
    <>
    <button onClick={handleMovieClick} className=' rounded-full bg-yellow-50 w-[5rem]'>Movies</button>
    <button onClick={handleTvShowsClick} className=' rounded-full bg-slate-300 w-[5rem]'>TV Shows</button>
    </>
  )
}

export default MoveTvToogle
