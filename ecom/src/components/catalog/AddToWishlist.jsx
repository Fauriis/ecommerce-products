import { useContext } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { baseUrl } from "../..";
import { AppContext } from "../../pages/_app";


export const AddToWishlist = ({ product }) => {
  const { wish, removeProduct } = useContext(AppContext);

  if (wish === null) {
    return;
  }

  const { id: wishId } = wish;
  const { id: productId, title } = product;

  const newWish = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${wishId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWish),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
      removeProduct(productId)
      });
  };

  return (
    <button
      className="bg-pink-500 text-black text-sm p-3 rounded-md  hover:bg-white transition-colors duration-300"
      title={`Add ${title} to wishlist`}
      type="button"
      onClick={onClick}
    >
      <BsBookmarkHeartFill size={20}></BsBookmarkHeartFill>
    </button>
  );
};
