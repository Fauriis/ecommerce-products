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

        <section className="container px-4 lg:px-0 mx-auto">s</section>
        <section className="border-t"></section>
        <section className="container px-4 lg:px-0 mx-auto">v</section>
      </Layout>
    </>
  );
};

export default ProductPage;
