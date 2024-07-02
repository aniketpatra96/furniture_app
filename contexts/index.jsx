import UserContextProvider from "./userContext";
import { CartProvider } from "./cartContext";
import { FavoriteProvider } from "./favoriteContext";
import NumColsProvider from "./numCols";

export function ShoppingProvider({ children }) {
  return (
    <UserContextProvider>
      <CartProvider>
        <FavoriteProvider>
          <NumColsProvider>{children}</NumColsProvider>
        </FavoriteProvider>
      </CartProvider>
    </UserContextProvider>
  );
}
