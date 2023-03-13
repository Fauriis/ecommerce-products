import Head from "next/head";
import { Layout } from "../../layouts";

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>

      <Layout>
        <main>
            product
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;