import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useGenre } from "../Apis/useGenre";
import Loader from "./Loader";
import { useGlobalState } from "../Reducer/MovieState";
import { useNavigate } from "react-router-dom";

const MainWrapper = ({ setPage, fetching, setIsFetching, movies, type }) => {
  const genreData = useGenre();
  const [contentType, setContentType] = useState(type);
  const scrollPosition = useRef(0);
  const { state } = useGlobalState();
  const noImage = state.noImage;
  const navigate = useNavigate();
  function handleSelected(id) {
    navigate("/selected", { state: { id, contentType } });
  }
  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.offsetHeight - 200 &&
      !fetching
    ) {
      scrollPosition.current = window.scrollY;
      if (!fetching) {
        setIsFetching(true);
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (genreData.length === 0 || movies.length === 0) {
    return <Loader />;
  }

  return (
    <div className="flex flex-wrap">
      {movies.map((val) => {
        const strokeColor =
          val.vote_average > 7
            ? "rgba(0, 255, 0, 1)"
            : `rgba(255, 215, 0, ${val.vote_average / 10})`;

        return (
          <div
            key={val.id}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 cursor-pointer"
            onClick={() => handleSelected(val.id)}
          >
            <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
              <div className="relative w-full h-64">
                <img
                  src={
                    val.poster_path
                      ? `https://image.tmdb.org/t/p/w500${val.poster_path}`
                      : noImage
                  }
                  alt={val.title}
                  className="w-full h-full object-cover"
                />
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
              <div className="p-2">
                <h3 className="font-semibold text-white truncate text-md">
                  {val.title || val.name}
                </h3>
                <em className="text-xs text-gray-400">
                  {val.release_date || val.first_air_date}
                </em>
                <div className="flex mt-2">
                  <span className="text-sm text-gray-300 mr-2">
                    {val.genre_ids[0]
                      ? genreData.find((genre) => genre.id === val.genre_ids[0])
                          ?.name || "Unknown Genre"
                      : "Unknown Genre"}
                  </span>
                  <span className="text-sm text-gray-300">
                    {val.genre_ids[1]
                      ? genreData.find((genre) => genre.id === val.genre_ids[1])
                          ?.name || "Unknown Genre"
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

export default MainWrapper;
