import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../../pages/_app";
import { CgSpinner } from "react-icons/cg";


export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null){
    return  <div className="text-center flex h-screen w-screen justify-center items-center">
    <CgSpinner size={48} className="animate-spin"></CgSpinner>
    Please wait...
  </div>;
  }

  const {products} = cart

const cartQty = products.reduce((cartQty, product) =>{
const {quantity} = product;

cartQty += quantity;

return cartQty;
}, 0)

  return (
    <>
      <ul>
        <li className="flex justify-center items-center ">
          <Link href="/cart">
            <AiOutlineShoppingCart size={30}></AiOutlineShoppingCart>
            {cartQty}
          </Link>
        </li>
      </ul>
    </>
  );
};
