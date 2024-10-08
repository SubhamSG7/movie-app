import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function navigateToMovie() {
    navigate("/movies", { state: "movie" });
  }
  function navigateToTvShows() {
    navigate("movies", { state: "tv" });
  }
  return (
    <header className="flex h-[100%] flex-col sm:flex-row justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <div className="mb-2 sm:mb-0">
        <Link to="/">
          <img
            src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg"
            alt="Movix Logo"
            className="h-10"
          />
        </Link>
      </div>
      <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <p
          onClick={navigateToMovie}
          className="text-lg hover:text-gray-400 transition duration-200 cursor-pointer"
        >
          Movies
        </p>

        <p
          onClick={navigateToTvShows}
          className="text-lg hover:text-gray-400 transition duration-200 cursor-pointer"
        >
          TV Shows
        </p>
        <div className="flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-gray-400 transition duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
