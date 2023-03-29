import Head from "next/head";
import { Layout } from "../../layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { baseUrl } from "../..";
import { CartControl } from "../../components/cart/CartControl";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [pid]);

  if (product === null) {
    return <></>;
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
        <header className="container px-4 lg:px-0 mx-auto flex justify-between">
          <div>Back to shop</div>

          <CartControl></CartControl>
        </header>

        <section className="mt-16 container px-4 lg:px-0 mx-auto grid lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-5">
            <img
              src={image}
              alt={`Image of ${image}`}
              className="block w-full "
            />
          </div>

          <header className="lg:col-start-7 lg:col-span-6 pt-12">
            <h1 className="text-2xl uppercase font-medium">{title}</h1>
            <p className="mt-12">{description}</p>

            <div className="mt-12">
              <span className="text-3xl leading-9 font-bold">{formattedPrice}</span>
            </div>

            <div className="mt-12">
              <button
              className="bg-black text-white uppercase font-bolde text-sm py-3 px-6 hover:bg-pink-500 transition-colors duration-300"
                title={`Add ${title} to cart`}

                type="button"
                onClick={() => {
                  alert(id);
                }}
              >
                Add to cart
              </button>
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
