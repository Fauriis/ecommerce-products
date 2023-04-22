import { useEffect, useState } from "react";
import { baseUrl } from "..";

const alterCart = (cart, productId, quantity) => {
  const { products } = cart;

  const product = products.find((product) => {
    // find este ca forEach, in stanga {products} plural in dreapta sg
    return product.productId === productId;
  });

  if (product === undefined) {
    products.push({
      productId,
      quantity,
    });
  } else {
    if (product.quantity + quantity <= 0) {
      // cart.products = [...cart.products].splice(index, 1);
      // o copie simpla de array
      cart.products = cart.products.filter((product) => {
        // filter ne da o bucata din arrayul respectiv
        return product.productId !== productId;
      });
    } else {
      product.quantity += quantity;
    }
  }

  return cart;
};

export const useCart = (cartId = 2) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCart(result);
      });
  }, [setCart, cartId]);

  const alterProduct = (productId, quantity = 1) => {
    const newCart = alterCart(cart, productId, quantity);
    setCart({ ...newCart });
  };

  // alterProduct primeste un productId si cantitatea pe care o alteram/care variaza

  return { cart, setCart, alterProduct };
};
