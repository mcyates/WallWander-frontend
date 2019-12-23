import React, { useState } from "react";

import searchSVG from "../../icons/search.svg";

export const Search = props => {
  const [searchText, setSearchText] = useState("");

  const search = e => {
    e.preventDefault();
    if (searchText === "") {
      return;
    }
    let tags = searchText.split(" ");
    tags = tags.join("+");
    setSearchText("");
    props.navigate(`/wallpapers/search/?tags=${tags}`);
  };

  return (
    <form className="flex mx-auto my-8 min-h-4 shadow" onSubmit={search}>
      <input
        className="text-4xl py-2 px-4 text-gray-900 rounded-r-none"
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search"
        type="text"
      />
      <button
        type="submit"
        className="bg-blue-900 min-h-full rounded-l-none p-2"
      >
        <img src={searchSVG} alt="search button" />
      </button>
    </form>
  );
};

export default Search;
