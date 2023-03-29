import { css } from "@emotion/css";
import React from "react";
import ProductsNotFound from "../../pages/noproducts";
import { motion } from "framer-motion";
import Link from "next/link";

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
        const { title, price, image, id } = product;
        const formattedPrice = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);

        return (
          <li key={index}>
            <article className="w-full">
              <header>
                <div className="w-full h-72 text-center">
                  <Link href={`/products/${id}`}>
                    <motion.img
                      initial={{
                        x: -60,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{
                        scale: 0.8,
                        borderRadius: "10%",
                      }}
                      src={image}
                      title={title}
                      className="h-full inline cursor-pointer"
                    ></motion.img>
                  </Link>
                </div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 mb-4 font-medium">
                  {title}
                </h1>

                <div className="text-zinc-500 font-light mb-2">
                  {formattedPrice}
                </div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
