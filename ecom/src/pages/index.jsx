import Head from "next/head";

import { Layout } from "../layouts";

const Home = () => {


  return (
   <>

   <Head>
    <title>Homepage</title>
   </Head>

   <Layout>
    <main className="bg-red-200">
     <div>
      <h1>See the latest collection!</h1>

      <h3>A brand to remember!</h3>
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
