import { useState } from "react";
import { useGlobalState } from "../Reducer/MovieState";

const Toprated = () => {
  const { state } = useGlobalState();
  const imageUrl = state.imageUrl;
  const [toggleMovieTv, setToggleMovieTv] = useState("Movie");
  const [visibleCards, setVisibleCards] = useState(5);
  const topRatedMovies =
    toggleMovieTv === "Movie" ? state.topRated || [] : state.topRatedTv || [];

  const handlePrev = () => {
    setVisibleCards((prev) => Math.max(prev - 5, 5));
  };

  const handleLoadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 5, topRatedMovies.length));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="ml-5 text-lg">Top-Rated</h1>
        <div className="flex space-x-2 mr-5">
          <button
            className={`px-4 py-2 rounded ${
              toggleMovieTv === "Movie"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setToggleMovieTv("Movie")}
          >
            Movie
          </button>
          <button
            className={`px-4 py-2 rounded ${
              toggleMovieTv === "TV"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setToggleMovieTv("TV")}
          >
            TV
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <i
          className="fa-solid fa-angle-left cursor-pointer text-blue-500 text-2xl hover:text-gray-300 transition duration-200"
          onClick={handlePrev}
        ></i>
      </div>
      <div className="flex flex-wrap justify-center w-full transition-transform duration-700 ease-in-out">
        {topRatedMovies.slice(visibleCards - 5, visibleCards).map((val) => (
          <div
            key={val.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 transition-transform transform duration-700 ease-in-out"
          >
            <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={`${imageUrl}${val.poster_path}`}
                alt={val.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400">
                  Rating: {val.vote_average}
                </p>
                <h3 className="font-semibold text-white">
                  {val.title || val.name}
                </h3>
                <em className="text-xs text-gray-400">
                  {val.release_date || val.first_air_date}
                </em>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <i
          className="fa-solid fa-angle-right cursor-pointer text-blue-500 text-2xl hover:text-gray-300 transition duration-200"
          onClick={handleLoadMore}
        ></i>
      </div>
    </div>
  );
};

export default Toprated;
