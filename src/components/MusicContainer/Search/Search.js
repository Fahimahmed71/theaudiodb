import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchResult from "./SearchResult/SearchResult";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSearch(data.artists));
  }, [searchText]);

  const searchValue = (e) => {
    setSearchText(e.target.value);
  };

  if (search === null) {
    return;
  }

  return (
    <div className="search">
      <input
        onChange={searchValue}
        className="bg-slate-800 px-5 py-5 block mx-auto text-white rounded-lg"
        type="search"
        placeholder="Search Music"
      />

      {search.map((search) => (
        <SearchResult key={search.idArtist} search={search}></SearchResult>
      ))}
    </div>
  );
};

export default Search;
