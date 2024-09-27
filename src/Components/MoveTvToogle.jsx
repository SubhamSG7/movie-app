import React from 'react';

const MoveTvToggle = ({ setToggleMovieTv, activeToggle }) => {
  const handleToggle = (type) => {
    setToggleMovieTv(type);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleToggle("Movie")}
        className={`rounded-full w-[5rem] ${activeToggle === "Movie" ? 'bg-yellow-50' : 'bg-gray-200'}`}
      >
        Movies
      </button>
      <button
        onClick={() => handleToggle("tv")}
        className={`rounded-full w-[5rem] ${activeToggle === "tv" ? 'bg-yellow-50' : 'bg-gray-200'}`}
      >
        TV Shows
      </button>
    </div>
  );
};

export default MoveTvToggle;
