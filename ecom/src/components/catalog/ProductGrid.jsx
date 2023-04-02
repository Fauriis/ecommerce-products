import { css } from "@emotion/css";
import React from "react";
import ProductsNotFound from "../../pages/noproducts";
import { ProductTile } from "./ProductTile";

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return <ProductsNotFound></ProductsNotFound>;
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
        return (
          <li key={index}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
