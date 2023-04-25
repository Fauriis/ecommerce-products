import Head from "next/head";
import { Layout } from "../../layouts";
import { useRouter } from "next/router";
import { CartControl } from "../../components/cart/CartControl";
import { CgSpinner } from "react-icons/cg";
import { useProduct } from "../../hooks";
import Link from "next/link";
import { BackToShop } from "../../components/common/BackToShop";
import { AddToCart } from "../../components/catalog/AddToCart";
import { AddToWishlist } from "../../components/catalog";
import { WishControl } from "../../components/common";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== "404") {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  if (status === "404") {
    return (
      <Layout>
        <section className="my-5 mx-6 text-center lg:justify-center lg:items-center lg:flex lg:flex-col">
          <div className="bg-pink-100 lg:py-8 lg:h-80 lg:w-1/4 relative -z-10 rounded-md py-4 drop-shadow-xl">
            <p className="my-2 leading-loose lg:mt-24 text-black font-semibold">
              404 | Product not found
            </p>
          </div>

          <button
            type="button"
            className="uppercase font-bold drop-shadow-xl text-black bg-pink-500 mt-4 px-5 py-2 rounded-md hover:bg-pink-50"
          >
            <Link href="/">back home</Link>
          </button>
        </section>
      </Layout>
    );
  }

  const { id, title, description, price, image } = product;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <div>
          <BackToShop></BackToShop>
        </div>
        
        <header className="container px-4 flex justify-end items-end gap-2">
          <CartControl></CartControl>

          <WishControl></WishControl>
        </header>

        <section className="mt-16 container px-4 lg:px-0 mx-auto grid lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-5">
            <img
              src={image}
              alt={`Image of ${image}`}
              className="inline"
              width={400}
              height={400}
            />
          </div>

          <header className="lg:col-start-7 lg:col-span-6 pt-12">
            <h1 className="text-2xl uppercase font-medium">{title}</h1>
            <p className="mt-12">{description}</p>

            <div className="mt-12">
              <span className="text-3xl leading-9 font-bold">
                {formattedPrice}
              </span>
            </div>

            <div className="mt-12">
              <AddToCart product={product}></AddToCart>
              <AddToWishlist product={product}></AddToWishlist>
            </div>
          </header>
        </section>
        <section className="border-t"></section>
        <section className="container px-4 lg:px-0 mx-auto">v</section>
      </Layout>
    </>
  );
};

export default ProductPage;
