import Head from "next/head";
import { useWishlist } from "../hooks";
import { Layout } from "../layouts";
import { WishControl, WishItems } from "../components/common";

const Wishlist = () => {
  const wish = useWishlist(2);

  return (
    <>
      <Head>
        <title>Wishlist</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <WishControl wish={wish}></WishControl>
          </header>

          <div>
            <WishItems></WishItems>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Wishlist;
