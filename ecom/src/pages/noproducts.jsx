import Head from "next/head";
import { Layout } from "../layouts";
import { AiOutlineDropbox } from "react-icons/ai";
import Link from "next/link";

const ProductsNotFound = () => {
  return (
    <>
      <Head>
        <title>Products not found</title>
      </Head>

      <Layout>
        <section className="my-5 mx-6 text-center lg:justify-center lg:items-center lg:flex lg:flex-col">
          <div className="bg-yellow-100 lg:py-8 lg:h-80 lg:w-1/4 relative -z-10 rounded-md py-4 drop-shadow-xl">
            <AiOutlineDropbox
              size={50}
              color="navy"
              className="inline-block lg:mt-5"
            ></AiOutlineDropbox>
            <h1 className="uppercase font-bold mt-2">No order found</h1>
            <p className="my-2 leading-loose lg:mt-6 text-gray-600 font-semibold">
              Looks like you haven't made your order yet!
            </p>
          </div>

          <button
            type="button"
            className="uppercase font-bold drop-shadow-xl text-black bg-yellow-400 mt-4 px-5 py-2 rounded-md hover:bg-yellow-50"
          >
            <Link href="/">back home</Link>
          </button>
        </section>
      </Layout>
    </>
  );
};

export default ProductsNotFound;
