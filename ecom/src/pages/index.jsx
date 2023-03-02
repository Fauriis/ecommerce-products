import Head from "next/head";

import { Layout } from "../layouts";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="bg-red-200">
          <div>
            <motion.img
              initial={{
                x: -60,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              src="banner.png"
              alt="new collection"
              className="w-full"
            ></motion.img>
          </div>
        </main>

        <section className="bg-zinc-100">
          <h1>more to come</h1>
          <p>Are you ready?</p>
        </section>
      </Layout>
    </>
  );
};

export default Home;
