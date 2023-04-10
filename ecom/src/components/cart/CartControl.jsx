import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AppContext } from "../../pages/_app";

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null){
    return <></>
    // pune un spinner aici
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
