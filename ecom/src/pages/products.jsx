import Head from "next/head";
import { useEffect, useState } from "react";
import { baseUrl } from "..";
import { CartControl } from "../components/cart/CartControl";
import { GridControls } from "../components/catalog/GridControls";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { Layout } from "../layouts";

const Products = () => {
  const [perRow, setPerRow] = useState(4);

  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    perPage: 12,
    page: 1,
    total: 20,
  });

  const { perPage, page, total } = pagination;
  const pagesCount = Math.ceil(total / perPage);

  useEffect(() => {
    fetch(`${baseUrl}/products?limit=${perPage}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-4 mx-auto">
          <header className="flex justify-start text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid products={products} perRow={perRow}></ProductGrid>
          </section>

          <section>
            <ul className="flex gap-2">
              {Array(pagesCount)
                .fill("_")
                .map((_, index) => {
                  const i = index + 1;
                  return (
                    <li
                    key={index}
                      className={`${i === page ? "font-bold" : ""}`}
                      onClick={() => {
                        if (i === page) {
                          return;
                        }

                        setPagination({
                          ...pagination,
                          page: i,
                        })
                      }}
                    >
                      {i}
                    </li>
                  );
                })}
            </ul>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Products;
