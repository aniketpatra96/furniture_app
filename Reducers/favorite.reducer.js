import { Alert } from "react-native";

export const FAVORITE_ACTIONS = Object.freeze({
  REMOVE_FROM_FAVORITE: 0,
  ADD_TO_FAVORITE: 1,
  REMOVE_ALL: 2,
});

export const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case FAVORITE_ACTIONS.ADD_TO_FAVORITE: {
      const favoriteToAdd = action.payload;
      let { favorite } = state;
      if (favorite && Array.isArray(favorite)) {
        const foundIndex = favorite.findIndex(
          (item) => item._id === favoriteToAdd._id
        );
        if (foundIndex === -1) {
          favorite.push(favoriteToAdd);
        } else {
          favorite[foundIndex].quantity += 1;
        }
      } else {
        favorite = [favoriteToAdd];
      }
      return { ...state, favorite };
    }
    case FAVORITE_ACTIONS.REMOVE_FROM_FAVORITE: {
      const id = action.payload;
      let { favorite } = state;
      if (favorite && Array.isArray(favorite)) {
        favorite = favorite.filter((item) => item._id !== id);
      }
      return { ...state, favorite };
    }
    case FAVORITE_ACTIONS.REMOVE_ALL: {
      return { ...state, favorite: [] };
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
