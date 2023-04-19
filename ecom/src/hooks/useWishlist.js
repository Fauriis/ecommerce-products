import { useEffect, useState } from "react";
import { baseUrl } from "..";

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

  return { wish, setWish };
};
