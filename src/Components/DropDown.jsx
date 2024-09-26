const DropDown = ({ setSort, sort }) => {
  const handleGenre = (e) => {
    setSort({ ...sort, genre: e.target.value });
  };

  const handleOrder = (e) => {
    setSort({ ...sort, order: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <select
        name="genre"
        value={sort.genre || ""} // Default to empty string if no genre is selected
        onChange={handleGenre}
        className="border rounded-md p-2 bg-white text-gray-700"
      >
        <option value="" disabled>
          Select Genre
        </option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
      </select>

      <select
        name="order"
        value={sort.order || ""} // Default to empty string if no order is selected
        onChange={handleOrder}
        className="border rounded-md p-2 bg-white text-gray-700"
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
        <option value="vote_average.asc">Rating Ascending</option>
        <option value="primary_release_date.desc">
          Release Date Descending
        </option>
        <option value="primary_release_date.asc">Release Date Ascending</option>
        <option value="original_title.asc">Title (A-Z)</option>
      </select>
    </div>
  );
};

export default DropDown;
