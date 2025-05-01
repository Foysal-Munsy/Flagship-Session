import { toast } from "react-toastify";

export const getFavorites = () => {
  //   const favorites = localStorage.getItem("favorites");
  //   if (favorites) return JSON.parse(favorites);
  //   return [];
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const addFavorite = (phone) => {
  const favorites = getFavorites(); // Get current favorites
  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return toast.error("Already Added!");
  favorites.push(phone); // Add new phone to array
  localStorage.setItem("favorites", JSON.stringify(favorites)); // Save updated array
  //   console.log(favorites);
  toast.success("Phone added Successfully!");
};
export const removeFavorite = (id) => {
  const favorites = getFavorites();
  const remaining = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Phone Removed from Favorite List!");
};
