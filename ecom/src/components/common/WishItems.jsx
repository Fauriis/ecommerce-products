import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { WishLineItem } from "./WishLineItem";

export const WishItems = () => {
  const { wish } = useContext(AppContext);

  const { products } = wish;

  return (
    <div>
      {products.map((product) => {
        return (
          <WishLineItem
            product={product}
            key={product.productId}
          ></WishLineItem>
        );
      })}
    </div>
  );
};
