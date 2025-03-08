import { API_URL } from "./constants";

// Fetch menu lobby categories.
export const getLobbyCategories = async () => {
  const response = await fetch(`${API_URL}/en/config`);
  return response.json();
};
