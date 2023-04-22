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
          <div>
            <WishControl wish={wish}></WishControl>
          </div>

          <div>
            <WishItems></WishItems>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Wishlist;
