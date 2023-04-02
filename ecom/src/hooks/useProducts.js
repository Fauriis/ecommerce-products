import { useEffect, useState } from "react";
import { baseUrl } from "..";

export const useProducts = (limit = 20) => {
  const [products, setProducts] = useState([]);
  // array gol care contine toate produsele

  useEffect(() => {
    fetch(`${baseUrl}/products?limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, []);
  // [] se intampla o data in momentul in care componenta este executata prima oara
  return [products];
  //   scot un array de produse
};
