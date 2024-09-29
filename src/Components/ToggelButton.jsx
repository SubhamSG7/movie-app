import React from "react";

const ToggelButton = ({ setToggleDayWeek }) => {
  function handleDay() {
    setToggleDayWeek("day");
  }
  function handleWeek() {
    setToggleDayWeek("week");
  }
  return (
    <>
      <button
        className="rounded-full bg-yellow-50 w-[5rem]"
        onClick={handleDay}
      >
        Day
      </button>
      <button
        className="rounded-full bg-slate-500 w-[5rem]"
        onClick={handleWeek}
      >
        Week
      </button>
    </>
  );
};

export default ToggelButton;
