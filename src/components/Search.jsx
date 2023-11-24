import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [state, setState] = React.useState({
    location: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  return (
    <div className="mt-7 border-2 border-[rgba(0, 0, 0, .2)] sm:w-full lg:w-3/4 mx-auto p-2 rounded-lg sm:flex hidden">
      <div className="border-r border-r-[rgba(0, 0, 0, .2)] w-1/3">
        <label className="text-[#070707]">Where you want to go</label>
        <span className="flex">
          <CiSearch size={19} fill="#555" className="mt-[5px]" />
          <input
            type="text"
            name="location"
            value={state.location}
            className="outline-none ml-1 mt-[3px] pr-1 sm:w-1/2"
            placeholder="Search your location"
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="border-r border-r-[rgba(0, 0, 0, .2)] w-1/4 ml-5">
        <label className="text-[#070707]">Check-in</label>
        <span className="flex">
          <input
            type="date"
            name="startDate"
            value={state.startDate}
            className="outline-none ml-1 mt-[3px] w-3/4 cursor-pointer"
            placeholder="Add Date"
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="w-1/4 ml-5">
        <label className="text-[#070707]">Check-out</label>
        <span className="flex">
          <input
            type="date"
            name="endDate"
            value={state.startDate}
            className="outline-none ml-1 mt-[3px] w-3/4 cursor-pointer"
            placeholder="Add Date"
            onChange={handleChange}
          />
        </span>
      </div>
      <button
        type="button"
        className="rounded-md text-sm p-2 text-center text-white uppercase font-semibold bg-[dodgerblue] w-[200px] hover:opacity-80"
      >
        explore now
      </button>
    </div>
  );
};

export default Search;
