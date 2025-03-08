import { API_URL } from "./constants";

export const getPageData = async (path: string) => {
  const response = await fetch(`${API_URL}/pages/en${path}`);
  return response.json();
};

export const getGamesByName = async (
  name: string,
  pageSize: number = 50,
  pageNumber: number = 1
) => {
  const response = await fetch(
    `${API_URL}/en/games/tiles?search=${name}&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json();
};
