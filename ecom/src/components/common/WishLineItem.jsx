import React from "react";
import Image from "next/image";
import { useProduct } from "../../hooks";


export const WishLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const {product: wishItem} = useProduct(productId);
  const isLoaded = wishItem !== null;

  if (!isLoaded) {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);
  const { image, price, id, title } = wishItem;
  console.log(wishItem);


  return (
    <tr>
      <td>
        <Link href={`/products/${id}`}>
          <Image
            alt={title}
            title={title}
            src={image}
            height="100"
            width="100"
            style={{ objectFit: "contain" }}
          ></Image>
        </Link>

        <Link href={`/products/${id}`}>
          <p>{title}</p>
        </Link>
      </td>
      <td></td>
      <td>{quantity}</td>
      <td>{formattedPrice}</td>
    </tr>
  );
};
