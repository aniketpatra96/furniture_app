import { FavoriteReducer } from "../Reducers/favorite.reducer";
import { createContext, useReducer, useState } from "react";
export const initialFavoriteState = [];
export const favoriteContext = createContext({
  favorite: initialFavoriteState,
  isFavorite: false,
  setIsFavorite: () => !isFavorite,
});
export const FavoriteProvider = ({ children }) => {
  const [favorite, dispatch] = useReducer(FavoriteReducer, {
    favorite: initialFavoriteState,
  });
  return (
    <favoriteContext.Provider value={{ favorite, dispatch }}>
      {children}
    </favoriteContext.Provider>
  );
};
