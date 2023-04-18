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

        <section className="text-center py-6 lg:block hidden">
          <h1 className="mb-2 inline-block font-bold text-2xl hover:animate-pulse">
            Get in touch
          </h1>

          <div className="relative left-44 ml-96 max-w-sm rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-700">
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] border border-zinc-200 w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput7"
                  placeholder="Name"
                />
                <label
                  htmlFor="exampleInput7"
                  className="pointer-events-none  absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Name
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border border-zinc-200 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput8"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleInput8"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border border-zinc-200 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Message
                </label>
              </div>
              <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                <input
                  className="mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  type="checkbox"
                  value=""
                  id="exampleCheck10"
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="exampleCheck10"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Send
              </button>
            </form>
          </div>

      
        </section>
      </Layout>
    </>
  );
};

export default Home;
