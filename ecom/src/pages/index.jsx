import Head from "next/head";
import { useState } from "react";
import { CartControl } from "../components/cart/CartControl";
import { GridControls } from "../components/catalog/GridControls";
import { ProductGrid } from "../components/catalog/ProductGrid";
import { Layout } from "../layouts";

const Home = () => {
const [perRow, setPerRow] = useState(4);


  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-4 mx-auto">
          <header className="flex justify-start text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid products={Array(12).fill({
              name:'Prod',
              price: '$12',
            })}
            perRow={perRow}
            ></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
