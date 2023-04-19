import Link from "next/link";
import { useProduct } from "../../hooks";
import Image from "next/image";
import { CgSpinner } from "react-icons/cg";

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  // atunci cand cartItem nu va fi egal cu null, consideram ca este incarcat

  if (!isLoaded) {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  const { image, price, id, title } = cartItem;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

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