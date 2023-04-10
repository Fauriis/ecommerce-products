import { useEffect, useState } from "react";
import { baseUrl } from "..";

const productCashe = {};

export const useProduct = (pid) => {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("200");

  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    if (productCashe[pid] !== undefined) {
      setProduct(productCashe[pid]);
    } // daca produsul exista in memorie, productCash DE pid
    else {
      fetch(`${baseUrl}/products/${pid}`)
        .then((response) => {
          try {
            return response.json()
          } catch (_) {
            return Promise.reject("404");
          }
        })
        .then((result) => {
          productCashe[pid] = result;
          setProduct(result);
        })
        .catch((_) => {
         setStatus('404')
        });
    }
  }, [pid, setProduct, setStatus]);

  return { status, product };
};

// productCache = produsul din memorie
//
