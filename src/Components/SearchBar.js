import React, { useState } from "react";
import { filterData } from "../Helper/Helper";

const SearchBar = (props) => {
  let [inputSearch, setInputSearch] = useState("");

  const onCHangeInput = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="search-container"
        type="text"
        placeholder="Serach"
        value={inputSearch}
        onChange={onCHangeInput}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={() => {
          const data = filterData(props.allData, inputSearch);
          props.setResData(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
