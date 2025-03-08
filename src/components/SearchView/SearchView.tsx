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
        console.log("error", error);
        alert(error.message);
      });
  };
  console.log("data", data);

  return (
    <div>
      <SearchBar onClickSearch={handleSearch} />
      {data?.items ? <GamesView data={data.items} /> : null}
    </div>
  );
}

export default SearchView;
