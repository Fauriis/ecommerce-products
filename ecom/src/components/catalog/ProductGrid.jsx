import { css } from "@emotion/css";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { ProductTile } from "./ProductTile";
import { useProduct } from "../../hooks";
import { useRouter } from "next/router";
import { AddToCart } from "./AddToCart";
import { AddToWishlist } from "./AddToWishlist";

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (products.length <= 0) {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 30px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        const { id, title, description, price, image } = product;

        return (
          <li key={index}>
            <ProductTile product={product}></ProductTile>
            <div className="my-6 flex justify-center gap-2">
              <AddToCart product={product}></AddToCart>

              <AddToWishlist product={product}></AddToWishlist>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
