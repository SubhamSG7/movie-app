import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../Apis/useSearch";
import Loader from "./Loader";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NoResults from "./NoResults";
import { useGenre } from "../Apis/useGenre";
import { useGlobalState } from "../Reducer/MovieState";

const SearchComp = () => {
  const [page, setPage] = useState(1);
  const { state } = useLocation();
  const { state: globalState } = useGlobalState();
  const { searchData, loading } = useSearch(state, page);
  const genredata = useGenre();

  function checkGenre(id) {
    const genre = genredata.find((val) => val.id === id);
    return genre ? genre.name : "Unknown";
  }

  useEffect(() => {
    setPage(1);
  }, [state]);

  if (loading) {
    return <Loader />;
  }

  if (searchData.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="flex flex-wrap">
      {searchData.map((val) => {
        const strokeColor =
          val.vote_average > 7
            ? "rgba(0, 255, 0, 1)"
            : `rgba(255, 215, 0, ${val?.vote_average / 10})`;

        return (
          <div
            key={val?.id}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2"
          >
            <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
              {/* Image Container with aspect ratio */}
              <div className="relative w-full aspect-w-2 aspect-h-3">
                <img
                  src={
                    val.poster_path
                      ? `https://image.tmdb.org/t/p/w500${val.poster_path}`
                      : globalState.noImage
                  }
                  alt={val?.title}
                  className="w-full h-full object-cover"
                />
                {/* Circular Progressbar for rating */}
                <div className="absolute bottom-2 left-2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 rounded-full">
                  <CircularProgressbar
                    value={val.vote_average * 10}
                    text={`${val.vote_average}`}
                    styles={{
                      path: { stroke: strokeColor },
                      trail: { stroke: "#d6d6d6" },
                      text: {
                        fill: "#fff",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>
              </div>
              {/* Card Content */}
              <div className="p-2">
                <h3 className="font-semibold text-white truncate text-md">
                  {val?.title || val?.name}
                </h3>
                <em className="text-xs text-gray-400">
                  {val?.release_date || val?.first_air_date}
                </em>
                <div className="flex mt-2">
                  <span className="text-sm text-gray-300 mr-2">
                    {val.genre_ids && val.genre_ids[0]
                      ? checkGenre(val.genre_ids[0])
                      : "Unknown Genre"}
                  </span>
                  <span className="text-sm text-gray-300">
                    {val.genre_ids && val.genre_ids[1]
                      ? checkGenre(val.genre_ids[1])
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchComp;
