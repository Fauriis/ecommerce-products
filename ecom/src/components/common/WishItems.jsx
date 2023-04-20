import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { WishLineItem } from "./WishLineItem";
import { CgSpinner } from "react-icons/cg";


export const WishItems = () => {
  const { wish } = useContext(AppContext);

  if (wish === null) {
    return  <div className="text-center flex h-screen w-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Please wait...
  </div>;
  }

  const { products } = wish;

  
  if (products.length <= 0) {
    return  <div className="text-center flex h-screen w-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Please wait...
  </div>;
  }

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
