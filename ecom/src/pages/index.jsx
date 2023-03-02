import Head from "next/head";

import { Layout } from "../layouts";
import { motion } from "framer-motion";
import { AiTwotoneStar } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";

const Home = () => {
  const totalStars = 5;

  return (
    <>
      <Head>
        <title>Homepagee</title>
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

        <motion.section
          initial={{
            x: -60,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-zinc-100 py-4"
        >
          <h1 className="pt-8 text-center mb-4 font-bold">Testimonial</h1>

          <div className="m-4 lg:flex lg:flex-row lg:gap-10 lg:justify-center">
            <IoPersonCircleSharp
              className="lg:block hidden"
              size={80}
            ></IoPersonCircleSharp>

            <div>
              <p className=" text-justify">
                ,,Lorem ipsum, dolor sit amet consectetur{" "}
                <br className="lg:block hidden" /> adipisicing elit. Dignissimos
                velit aut labore omnis <br className="lg:block hidden" />{" "}
                reprehenderit ratione corrupti vel saepe praesentium,{" "}
                <br className="lg:block hidden" /> adipisci officiis esse
                tenetur consequatur, laboriosam{" "}
                <br className="lg:block hidden" /> voluptatem ex unde minus
                perferendis.''
              </p>

              <p className="flex flex-row mt-4">
                {Array(totalStars)
                  .fill("_")
                  .map((_) => {
                    return <AiTwotoneStar size="20" />;
                  })}
              </p>
            </div>

            <IoPersonCircleSharp
              className="lg:block hidden"
              size={80}
            ></IoPersonCircleSharp>

            <div>
              <p className="mt-4 lg:mt-0 text-justify">
                ,,Lorem ipsum, dolor sit amet consectetur{" "}
                <br className="lg:block hidden" /> adipisicing elit. Dignissimos
                velit aut labore omnis <br className="lg:block hidden" />{" "}
                reprehenderit ratione corrupti vel saepe praesentium,{" "}
                <br className="lg:block hidden" /> adipisci officiis esse
                tenetur consequatur, laboriosam{" "}
                <br className="lg:block hidden" /> voluptatem ex unde minus
                perferendis.''
              </p>

              <p className="flex flex-row mt-4">
                {Array(totalStars)
                  .fill("_")
                  .map((_) => {
                    return <AiTwotoneStar size="20" />;
                  })}
              </p>
            </div>
          </div>
        </motion.section>

        <section className="lg:flex lg:flex-row bg-red-100">
          <div>
            <motion.img
              initial={{
                x: -60,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              src="model.png"
              alt="new collection"
              className="w-full h-full"
            ></motion.img>
          </div>

          <div>
            <p>
              <span>About us</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              beatae ratione, dicta eaque inventore voluptas voluptatem
              architecto qui repellendus quo recusandae ab expedita nihil rem
              aliquid placeat? Minima, sunt delectus!
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
