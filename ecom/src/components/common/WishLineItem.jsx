import React, { useContext } from "react";
import Image from "next/image";
import { useProduct } from "../../hooks";
import { CgSpinner } from "react-icons/cg";
import Link from "next/link";
import {BsTrash} from 'react-icons/bs'
import { AppContext } from "../../pages/_app";
import { baseUrl } from "../..";

export const WishLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: wishItem } = useProduct(productId);
  const isLoaded = wishItem !== null;

  const {wish, removeProduct} = useContext(AppContext)

  const {id: cartId} = wish

  if (!isLoaded) {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: "DELETE",
    }).then((_) => {
      removeProduct(productId, -quantity);
    });
  }

  const { image, price, id, title } = wishItem;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <>
      <tr className="">
        <td className=" flex flex-col lg:flex-row lg:gap-6 mt-8 items-center justify-center text-center ml-10 lg:mx-8">
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
            <p className="font-bold mt-4">{title}</p>
          </Link>
        </td>
      </tr>
      <tr className="flex flex-row justify-between mt-6 mb-3 lg:mx-8">

        <td className="font-light text-zinc-400"><span className="font-bold text-black">Price: </span>{formattedPrice}</td>
        <td className="font-light text-zinc-400"><span span className="font-bold text-black">Stock: </span>in stock</td>
      </tr>

      <div className="flex items-end justify-end  lg:mr-8 mb-6">
        <p className="font-light text-zinc-400"><span className="font-bold text-black">Number of products:</span> {quantity}</p>
        <button type="button" onClick={onClick}>
          <BsTrash size={30} title={`Delete ${title} from wishlist`}></BsTrash>
        </button>
      </div>
    </>
  );
};
