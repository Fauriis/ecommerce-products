import Head from "next/head";
import { Layout } from "../layouts";
import { CartControl } from "../components/cart/CartControl";
import { useCart } from "../hooks";

const Cart = () => {
  const cart = useCart(2);

  if (cart === null){
    return <></>
  }



  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div></div>
            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16">{cart.id}</section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
