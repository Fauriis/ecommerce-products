import { createContext } from "react";
import "./../styles/index.css";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
const {cart, setCart, alterProduct} = useCart()
const {wish, setWish} = useWishlist()

  return (
    <AppContext.Provider value={{cart, setCart, alterProduct, wish, setWish}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
