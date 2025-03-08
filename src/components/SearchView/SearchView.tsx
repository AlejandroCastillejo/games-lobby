"use client";
import React, { useState } from "react";

import { getGamesByName } from "@/services/pikakasino-api/games-service";

import SearchBar from "../SearchBar/SearchBar";
import GamesView from "../GamesView/GamesView";

function SearchView() {
  const [data, setdata] = useState<{ items: [] }>();

  const handleSearch = async (inputText: string) => {
    getGamesByName(inputText)
      .then((data) => setdata(data))
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <SearchBar onClickSearch={handleSearch} />
      {data?.items ? <GamesView data={data.items} /> : null}
    </div>
  );
}

export default SearchView;
