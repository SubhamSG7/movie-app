import React, { useEffect, useState } from "react";
import { useGlobalState } from "../Reducer/MovieState";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { debounce } from 'lodash';
import { useGenre } from "../Apis/useGenre";

const MainWrapper = ({ setPage }) => {
  const genreData = useGenre();
  const { state } = useGlobalState();
  const moviesCollection = state.movies;
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  function checkGenre(id) {
    console.log(id);

    return genreData.map((val) => val.id === id ? val.name : "")
  }

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.body.offsetHeight - 100;
    if (scrollPosition >= threshold && !loading && !isFetching) {
      setLoading(true);
      setIsFetching(true);
      setPage((prev) => prev + 1);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, isFetching]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsFetching(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);
  if (genreData.length == 0) {
    return <div className="flex justify-center items-center h-screen">
      <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>

  }
  return (
    <div className="flex flex-wrap">
      {moviesCollection.map((val) => {
        const strokeColor =
          val.vote_average > 7
            ? "rgba(0, 255, 0, 1)"
            : `rgba(255, 215, 0, ${val?.vote_average / 10})`;

        return (
          <div key={val?.id} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
            <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
              <div className="relative w-full h-40">
                <img
                  src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                  alt={val?.title}
                  className="w-full h-full object-top object-cover"
                />
                <div className="absolute bottom-2 left-2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 rounded-full">
                  <CircularProgressbar
                    value={val.vote_average * 10}
                    text={`${val.vote_average}`}
                    styles={{
                      path: { stroke: strokeColor },
                      trail: { stroke: "#d6d6d6" },
                      text: { fill: "#fff", fontSize: "18px", fontWeight: "bold" },
                    }}
                  />
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-white truncate text-md">
                  {val?.title || val?.name}
                </h3>
                <em className="text-xs text-gray-400">
                  {val?.release_date || val?.first_air_date}
                </em>
                <div className="flex mt-2">
                  <span className="text-sm text-gray-300 mr-2">{val?.genre_ids[0] ? checkGenre(Number(val?.genre_ids[0])) : "Unknown Genre"}</span>
                  <span className="text-sm text-gray-300">{val?.genre_ids[1] ? checkGenre(Number(val?.genre_ids[1])) : "Unknown Genre"}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainWrapper;
