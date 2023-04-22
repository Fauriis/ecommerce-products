import { useEffect, useState } from "react";
import { baseUrl } from "..";

const alterWish = (wish, productId, quantity) =>{
  const {products} = wish;

  const product = products.find((product) =>{
    return product.productId === productId;

  })

  if (product === undefined) {
    products.push({
      productId,
      quantity,
    });
  } else {
    if (product.quantity + quantity <= 0) {
      wish.products = wish.products.filter((product) => {
        return product.productId !== productId;
      });
    } else {
      product.quantity += quantity;
    }
  }

  return wish
}

export const useWishlist = (wishId = 2) => {
  const [wish, setWish] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/carts/${wishId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setWish(result);
      });
  }, [setWish, wishId]);

  const removeProduct =(productId, quantity = 1) => {
    const newWish = alterWish(wish, productId, quantity);
    setWish({ ...newWish });
  };

  return { wish, setWish, removeProduct };
};
