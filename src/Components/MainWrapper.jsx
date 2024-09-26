import React, { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../Reducer/MovieState";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MainWrapper = ({ setPage }) => {
  const [halfWay, setHalfWay] = useState(false);
  const { state } = useGlobalState();
  const divRef = useRef();
  const imageUrl = state.imageUrl;
  const moviesCollection = state.movies;

  const handleScroll = () => {
    const div = divRef.current;
    if (div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      if (scrollTop + clientHeight >= scrollHeight / 2 && !halfWay) {
        setPage((prev) => prev + 1);
        setHalfWay(true);
      }
      if (scrollTop + clientHeight < scrollHeight / 2) {
        setHalfWay(false);
      }
    }
  };

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, [halfWay]);

  return (
    <div
      ref={divRef}
      className="flex flex-wrap overflow-y-auto"
      style={{ height: "400px" }}
    >
      {moviesCollection.map((val) => {
        const strokeColor =
          val.vote_average > 7
            ? "rgba(0, 255, 0, 1)"
            : `rgba(255, 215, 0, ${val.vote_average / 10})`;

        return (
          <div
            key={val.id}
            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 transition-transform transform duration-700 ease-in-out"
          >
            <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
              <div className="relative w-full h-40">
                <img
                  src={`${imageUrl}${val.poster_path}`}
                  alt={val.title}
                  className="w-full h-full object-top object-cover"
                />
                <div className="absolute bottom-2 left-2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 rounded-full">
                  <CircularProgressbar
                    value={val.vote_average * 10}
                    text={`${val.vote_average}`}
                    styles={{
                      path: {
                        stroke: strokeColor,
                        strokeLinecap: "butt",
                        transition: "stroke-dashoffset 0.5s ease 0s",
                      },
                      trail: {
                        stroke: "#d6d6d6",
                      },
                      text: {
                        fill: "#fff",
                        fontSize: "18px", // Reduced font size
                        fontWeight: "bold",
                      },
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-white truncate text-md">
                  {val.title ? val.title : val.name}
                </h3>
                <em className="text-xs text-gray-400">
                  {val.release_date ? val.release_date : val.first_air_date}
                </em>
                <div className="mt-1">
                  <span className="px-2 py-1 text-xs rounded-md bg-red-600">
                    Action
                  </span>
                  <span className="ml-1 px-2 py-1 text-xs rounded-md bg-pink-500">
                    Fantasy
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
