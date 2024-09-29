import React from "react";

const DropDown = ({ setSort, sort }) => {
  const handleChange = (field) => (e) => {
    setSort((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <select
        name="genre"
        value={sort.genre || ""}
        onChange={handleChange("genre")}
        className="border rounded-md p-2 bg-white text-gray-700"
      >
        <option value="" disabled>
          Select Genre
        </option>
        {[
          "Action",
          "Adventure",
          "Animation",
          "Comedy",
          "Documentary",
          "Drama",
          "Family",
          "Fantasy",
        ].map((label, index) => (
          <option
            key={index}
            value={[28, 12, 16, 35, 99, 18, 10751, 14][index]}
          >
            {label}
          </option>
        ))}
      </select>

      <select
        name="order"
        value={sort.order || ""}
        onChange={handleChange("order")}
        className="border rounded-md p-2 bg-white text-gray-700"
      >
        <option value="" disabled>
          Sort By
        </option>
        {[
          { value: "popularity.desc", label: "Popularity Descending" },
          { value: "popularity.asc", label: "Popularity Ascending" },
          { value: "vote_average.desc", label: "Rating Descending" },
          { value: "vote_average.asc", label: "Rating Ascending" },
          {
            value: "primary_release_date.desc",
            label: "Release Date Descending",
          },
          {
            value: "primary_release_date.asc",
            label: "Release Date Ascending",
          },
          { value: "original_title.asc", label: "Title (A-Z)" },
        ].map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
