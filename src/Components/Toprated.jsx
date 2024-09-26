import { useState } from "react";
import { useGlobalState } from "../Reducer/MovieState";
import MoveTvToogle from "./MoveTvToogle";


const Toprated = () => {
    const { state } = useGlobalState();

    const imageUrl = state.imageUrl;
    const [toggleMovieTv, settoggleMovieTv] = useState("Movie")
    const [visibleCards, setVisibleCards] = useState(5);
    let topRatedMovies;

    if (toggleMovieTv === "Movie") {
        topRatedMovies = state.topRated || [];
    } else {
        topRatedMovies = state.topRatedTv || [];
    }

    const handlePrev = () => {
        if (visibleCards - 5 >= 5) {
            setVisibleCards((prev) => prev - 5);
        }
    };
    const handleLoadMore = () => {
        if (visibleCards + 5 > topRatedMovies.length) {
            setVisibleCards(5);
        } else {
            setVisibleCards((prev) => prev + 5);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex justify-between items-center w-full">
                <h1 className="ml-20">Top-Rated</h1>
                <div>
                    <MoveTvToogle settoggleMovieTv={settoggleMovieTv} />
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
                    <div key={val.id} className="w-1/5 p-2 transition-transform transform duration-700 ease-in-out">
                        <div className="bg-[#04152d] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src={`${imageUrl}${val.poster_path}`}
                                alt={val.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-400">Rating: {val.vote_average}</p>
                                <h3 className="font-semibold text-white">{val.title ? val.title : val.name}</h3>
                                <em className="text-xs text-gray-400">{val.release_date ? val.release_date : val.first_air_date
                                }</em>
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
}

export default Toprated;
