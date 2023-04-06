import Head from "next/head";
import { Layout } from "../../layouts";
import { useRouter } from "next/router";
import { CartControl } from "../../components/cart/CartControl";
import { CgSpinner } from "react-icons/cg";
import { useProduct } from "../../hooks";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  // MUTAT in useProduct.js
  // useEffect(() => {
  //   if (pid === undefined) {
  //     return;
  //   }

  //   fetch(`${baseUrl}/products/${pid}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setProduct(result);
  //     });
  // }, [pid]);
  // aici chemam produsul

  if (product === null && status !== "404") {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
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
        <header className="container px-4 lg:px-0 mx-auto flex justify-between">
          <div>Back to shop</div>

          <CartControl></CartControl>
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
