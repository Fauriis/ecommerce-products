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

  useEffect(() => {
    fetch(`${baseUrl}/products?limit=12`)
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
        </main>
      </Layout>
    </>
  );
};

export default Products;
