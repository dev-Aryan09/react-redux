import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const submitHander = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchText));
    // console.log(searchText);
    setSearchText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHander(e);
        }}
        className="flex gap-5 p-10 bg-green-950"
      >
        <input
          className="w-full border-3 border-white text-black bg-gray-400 px-4 py-2 text-xl rounded outline-none"
          required
          type="text"
          value={searchText}
          placeholder="search anythig..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};
