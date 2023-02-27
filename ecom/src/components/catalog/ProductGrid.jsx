import { css } from "@emotion/css";
import React from "react";
import ProductsNotFound from "../../pages/noproducts";

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return <ProductsNotFound></ProductsNotFound>
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
        const { name, price } = product;

        return (
          <li key={index}>
            <article className="w-full">
              <header>
                <div className="w-full h-72 bg-gray-200"></div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 mb-4 font-medium">
                  {name}
                </h1>

                <div className="text-zinc-500 font-light mb-2">{price}</div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
