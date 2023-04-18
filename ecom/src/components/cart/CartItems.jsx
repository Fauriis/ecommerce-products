import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { CartLineItem } from "./CartLineItem";
import { CgSpinner } from "react-icons/cg";


export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return  <div className="text-center flex h-screen w-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Please wait...
  </div>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return  <div className="text-center flex h-screen w-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Please wait...
  </div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
