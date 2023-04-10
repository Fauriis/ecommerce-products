import { createContext } from "react";
import "./../styles/index.css";
import { useCart } from "../hooks/useCart";

export const AppContext = createContext();

// const initialValue = {
//   cart: {
//     qty: 112,
//   },
// };

// mai sus este o functie

function MyApp({ Component, pageProps }) {
const cart = useCart()

  return (
    <AppContext.Provider value={{cart}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
