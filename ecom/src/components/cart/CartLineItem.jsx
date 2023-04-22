import Link from "next/link";
import { useProduct } from "../../hooks";
import Image from "next/image";
import { CgSpinner } from "react-icons/cg";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { TiDelete } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { baseUrl } from "../..";

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  // atunci cand cartItem nu va fi egal cu null, consideram ca este incarcat

  const { cart, alterProduct } = useContext(AppContext);

  const { id: cartId } = cart;

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
      alterProduct(productId, -quantity);
    });
  };

  const { image, price, id, title } = cartItem;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <>
      <button type="button" title={`Remove ${title}`} onClick={onClick}>
        <AiOutlineClose
          className="border rounded hover:bg-pink-500"
          size="20"
        ></AiOutlineClose>
      </button>

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
        <td>
          <div className="">
            <div className="border flex items-center justify-center gap-1 lg:mb-8 mb-4 ">
              {quantity === 1 ? (
                <span className="cursor-pointer">
                  <TiDelete
                    size={20}
                    className="hover:text-pink-300"
                    title="Delete"
                    onClick={() => {
                      alterProduct(id, -1);
                    }}
                  ></TiDelete>
                </span>
              ) : (
                <button
                  type="button"
                  title="Delete"
                  className=" p-2"
                  onClick={() => {
                    alterProduct(id, -1);
                  }}
                >
                  -
                </button>
              )}
              {quantity}

              <button
                type="button"
                title="Add"
                className="p-2"
                onClick={() => {
                  alterProduct(id, 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td>{formattedPrice}</td>
      </tr>
    </>
  );
};
