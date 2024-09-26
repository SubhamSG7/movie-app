import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between ml-20 mr-20 ">
      <div>
    <Link to="/"> <img src="" alt="api" /></Link>
      </div>
      <div className="flex">
       <Link to="/movies"> <p>Movies</p></Link>
        <p>TV Shows</p>
        <img src="" alt="search" />
      </div>
    </div>
  );
};

export default Header;
