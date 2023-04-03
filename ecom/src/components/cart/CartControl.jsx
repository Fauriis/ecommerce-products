import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartControl = ({ cart = null }) => {
  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <>
      <ul>
        <li className="flex justify-center items-center ">
          <Link href="/cart">
            <AiOutlineShoppingCart size={30}>{cartQty}</AiOutlineShoppingCart>
          </Link>
        </li>
      </ul>
    </>
  );
};
