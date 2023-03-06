import Head from "next/head";

import { Layout } from "../layouts";
import { motion } from "framer-motion";
import { AiTwotoneStar } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";

const Home = () => {
  const totalStars = 5;

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

        <motion.section
          initial={{
            x: -60,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-zinc-100 py-4"
        >
          <h1 className="pt-8 text-center mb-8 font-bold text-2xl">
            Testimonial
          </h1>

          <div className="m-4 lg:flex lg:flex-row lg:gap-10 lg:justify-center">
            <IoPersonCircleSharp
              className="lg:block hidden"
              size={80}
            ></IoPersonCircleSharp>

            <div>
              <p className=" text-justify">
                ,,Lorem ipsum, dolor sit amet consectetur
                <br className="lg:block hidden" /> adipisicing elit. Dignissimos
                velit aut labore omnis <br className="lg:block hidden" />
                reprehenderit ratione corrupti vel saepe praesentium,
                <br className="lg:block hidden" /> adipisci officiis esse
                tenetur consequatur, laboriosam
                <br className="lg:block hidden" /> voluptatem ex unde minus
                perferendis.
              </p>

              <p className="flex flex-row mt-4">
                {Array(totalStars)
                  .fill("_")
                  .map((_, index) => {
                    return <AiTwotoneStar size="20" key={index} />;
                  })}
              </p>
            </div>

            <IoPersonCircleSharp
              className="lg:block hidden"
              size={80}
            ></IoPersonCircleSharp>

            <div>
              <p className="mt-4 lg:mt-0 text-justify">
                ,,Lorem ipsum, dolor sit amet consectetur
                <br className="lg:block hidden" /> adipisicing elit. Dignissimos
                velit aut labore omnis <br className="lg:block hidden" />
                reprehenderit ratione corrupti vel saepe praesentium,
                <br className="lg:block hidden" /> adipisci officiis esse
                tenetur consequatur, laboriosam
                <br className="lg:block hidden" /> voluptatem ex unde minus
                perferendis.
              </p>

              <p className="flex flex-row mt-4">
                {Array(totalStars)
                  .fill("_")
                  .map((_, index) => {
                    return <AiTwotoneStar size="20" key={index} />;
                  })}
              </p>
            </div>
          </div>
        </motion.section>

        <section className=" lg:flex lg:flex-row bg-red-100 ">
          <div className="lg:w-1/2 ">
            <motion.img
              initial={{
                x: -60,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              src="model.png"
              alt="new collection"
              className=""
            ></motion.img>
          </div>

          <div className="p-4 lg:w-1/2 lg:mt-36 lg:mx-8 lg:text-lg ">
            <p className="">
              <span className="flex flex-col font-bold text-center my-8 text-2xl">
                About us
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              beatae ratione, dicta eaque inventore voluptas voluptatem
              architecto qui repellendus quo recusandae ab expedita nihil rem
              aliquid placeat? Minima, sunt delectus! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Unde beatae ratione,
              dictarchitecto qui repellendus quo recusandae ab expedita nihil
              rem aliquid placeat? Minima, sunt delectus! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Unde beatae ratione, dicta
            </p>

            <button
              type="button"
              className="uppercase font-bold drop-shadow-xl text-center inline text-black bg-pink-500 mt-4 px-5 py-2 rounded-md hover:bg-pink-50"
            >
              <Link href="/">Learn more</Link>
            </button>
          </div>
        </section>

        <section className="bg-zinc-100">
          <h1>Get in touch</h1>
          <div>
            <form action="" className="flex flex-row">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <input type="text" name="" id="" placeholder="Enter your name" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>

              <button type="submit"></button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
