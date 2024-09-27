import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBody = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const navigate=useNavigate()
  function handleSearch(e){
    e.preventDefault()
    navigate("/search",{state:searchQuery})
  }
  return (
    <div className='h-[40vh] w-full flex flex-col justify-center items-center text-center px-4'>
      <h2 className='text-[4em] md:text-[3em] sm:text-[2.5em]'>Welcome</h2>
      <p className='text-[2em] md:text-[1.5em] sm:text-[1.2em]'>Millions of movies, TV shows and people to discover. Explore now.</p>
      <form className='flex items-center mt-4' onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Search for a movie or TV show...'
          className='border w-full max-w-[30em] h-[3em] text-[1.5em] pl-4 rounded-l-[50px] focus:outline-none'
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className='bg-orange-500 p-2 text-white w-[5em] h-[3em] text-[1.5em] rounded-r-[50px] transition duration-200 hover:bg-orange-600'
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBody;
