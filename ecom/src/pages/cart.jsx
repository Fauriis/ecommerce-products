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
          <header className="flex justify-between text-zinc-400 mx-4">
            <h1 className="text-xl font-bold text-black">Cart</h1>
            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <CartItems></CartItems>
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>
              <CartVoucher></CartVoucher>

            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
