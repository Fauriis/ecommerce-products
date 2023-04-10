import Head from "next/head";
import { Layout } from "../layouts";
import { CartControl } from "../components/cart/CartControl";
import { useCart } from "../hooks";
import { CartItems } from "../components/cart/CartItems";
import { CartVoucher } from "./../components/cart/CartVoucher";
import { CartTotals } from "./../components/cart/CartTotals";

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return <></>;
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

          <section className="mt-16 grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <CartItems></CartItems>
              <CartVoucher></CartVoucher>
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
