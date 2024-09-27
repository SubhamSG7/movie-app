import { Link } from "react-router-dom";
const NoResults = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 12l-2-2m0 0l-2 2m2-2v8m2-8l2 2m-2-2l2 2m2 0l2-2m-2 2v8"
                    />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-700">Sorry, No Results Found</h2>
                <p className="mt-2 text-gray-500">Try a different search or check your filters.</p>
               <Link to="/"> <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                    Go Back
                </button>
               </Link>
            </div>
        </div>
    );
};

export default NoResults;
