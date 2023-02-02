import Head from "next/head";
import { GridControls } from "../components/catalog/GridControls";
import { Layout } from "../layouts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-4 mx-auto">
          <div className="flex justify-start text-zinc-400">
            <GridControls></GridControls>
          </div>

  
        </main>
      </Layout>
    </>
  );
};

export default Home;
