import Head from "next/head";
import { Layout } from "../layouts";
import { CartControl } from "../components/cart/CartControl";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div></div>
            <CartControl></CartControl>
          </header>

          <section className="mt-16">cart here</section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
