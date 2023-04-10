import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { CartLineItem } from "./CartLineItem";

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
    // pune spinner
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
    // pune spinner (poate fi si o componenta spinner)
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
