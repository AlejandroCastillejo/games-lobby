"use client";
import React, { useState } from "react";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onClickSearch: (inputText: string) => void;
}

//TODO: implement search on enter key press
//TODO: implement throttle for searching without pressing button

function SearchBar({ onClickSearch }: SearchBarProps) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleOnClickSearch = () => {
    onClickSearch(inputText);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleOnClickSearch}>
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
    </div>
  );
}

export default SearchBar;
