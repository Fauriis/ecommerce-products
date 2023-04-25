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
    return  <div className="text-center flex h-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Ops! No products here, yet! 
  </div>;
  }

  return (
    <main>
      <div className="">
        <ul className="flex justify-around lg:items-start  items-center text-black font-bold ">
          <li>Product</li>
          <li>Count</li>
          <li>Price</li>
          <li className="lg:block hidden">Remove</li>
        </ul>
      </div>

      <div>
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </div>
    </main>
  );
};
