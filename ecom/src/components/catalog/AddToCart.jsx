import { useContext } from "react";
import { baseUrl } from "../..";
import { AppContext } from "../../pages/_app";
import { MdAddShoppingCart } from "react-icons/md";



export const AddToCart = ({ product }) => {
  const { cart, addProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId } = cart;
  const { id: productId, title } = product;

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
      addProduct(productId)
      });
  };

  return (
    <button
      className="bg-pink-500 text-black text-sm p-3 rounded-md  hover:bg-white transition-colors duration-300"
      title={`Add ${title} to cart`}
      type="button"
      onClick={onClick}
    >
      <MdAddShoppingCart size={20}></MdAddShoppingCart>
    </button>
  );
};
