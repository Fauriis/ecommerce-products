import Head from "next/head";
import { useEffect, useState } from "react";
import { CartControl } from "../components/cart/CartControl";
import { Pagination } from "../components/catalog";
import { GridControls } from "../components/catalog/GridControls";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { useCart, useProducts, useWishlist } from "../hooks";
import { Layout } from "../layouts";
import { WishControl } from "../components/common";

const Products = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();

  const [paginatedProducts, setPaginatedProducts] = useState([]);
  // folosim niste valori default []

  const cart = useCart(2);
  const wish = useWishlist(2);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-4 mx-auto mt-4 text-zinc-400">
          <header className="flex justify-end mt-0 items-end gap-4 ">
            <div className="flex-auto flex-wrap">
              <GridControls setPerRow={setPerRow}></GridControls>
            </div>
            <CartControl cart={cart}></CartControl>
            <WishControl wish={wish}></WishControl>
          </header>

          <section className="mt-16">
            <ProductGrid
              products={paginatedProducts}
              perRow={perRow}
            ></ProductGrid>
          </section>

          <section>
            <Pagination
              products={products}
              setPaginatedProducts={setPaginatedProducts}
            ></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Products;
