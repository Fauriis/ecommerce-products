import Head from "next/head";
import { Layout } from "../layouts";
import { HiHome, HiPhone, HiOutlineMail } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout>
        <section className="text-center container">
          <div className="my-8">
            <h1 className="uppercase font-bold mb-4">Have some questions?</h1>

            <ul className="flex gap-5 items-center justify-center">
              <li className="flex gap-2">
                <BsGlobe size={15} className=""></BsGlobe>
                <h6 className="uppercase text-xs">Romania</h6>
              </li>
              <li className="text-xs uppercase">Street:</li>
              <li className="text-xs">Voicului, nr. 14</li>
            </ul>
          </div>

          <div className="lg:mt-8 lg:flex lg:justify-center">
            <div className="inline-block text-center">
              <svg
                width="190px"
                height="190px"
                viewBox="0 0 1024.00 1024.00"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                stroke="#000000"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                stroke-width="0.01024"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="2.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M910.3 842.3H173.6c-27.4 0-49.7-22.3-49.7-49.7V296.1c0-27.4 22.3-49.7 49.7-49.7h736.7c27.4 0 49.7 22.3 49.7 49.7v496.4c0 27.5-22.3 49.8-49.7 49.8z"
                    fill="#A7B8C6"
                  ></path>
                  <path
                    d="M272.4 195.3H118.8c-22.8 0-41.3 18.5-41.3 41.3v513.3c0 22.8 18.5 41.3 41.3 41.3h753.5c22.8 0 41.3-18.5 41.3-41.3V236.6c0-22.8-18.5-41.3-41.3-41.3H272.4z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M914.2 430.2H846c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c0 1.4-1.1 2.4-2.4 2.4z"
                    fill="#E74138"
                  ></path>
                  <path
                    d="M914.2 505.6H846c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c0 1.3-1.1 2.4-2.4 2.4z"
                    fill="#3474B9"
                  ></path>
                  <path
                    d="M914.2 581H846c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c0 1.3-1.1 2.4-2.4 2.4zM153.2 430.2H85c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c-0.1 1.4-1.1 2.4-2.4 2.4z"
                    fill="#E74138"
                  ></path>
                  <path
                    d="M153.2 505.6H85c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c-0.1 1.3-1.1 2.4-2.4 2.4z"
                    fill="#3474B9"
                  ></path>
                  <path
                    d="M153.2 581H85c-1.3 0-2.4-1.1-2.4-2.4v-43c0-1.3 1.1-2.4 2.4-2.4h68.2c1.3 0 2.4 1.1 2.4 2.4v43c-0.1 1.3-1.1 2.4-2.4 2.4z"
                    fill="#E74138"
                  ></path>
                  <path
                    d="M873.5 223.9c12.5-8.9 6.2-28.7-9.2-28.7H126.9c-15.4 0-21.7 19.7-9.2 28.7l332.1 236.7c27.4 19.5 64.1 19.5 91.4 0l332.3-236.7z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M495.6 485.8c-18.7 0-36.6-5.7-51.8-16.6L111.7 232.5c-9.5-6.8-13.4-18.4-9.8-29.5 3.6-11.1 13.4-18.3 25.1-18.3h737.4c11.7 0 21.5 7.2 25.1 18.3 3.6 11.1-0.3 22.7-9.8 29.5L547.4 469.2c-15.2 10.9-33.1 16.6-51.8 16.6z m-368.7-280c-3.5 0-4.6 2.6-5 3.6-0.4 1.1-0.9 3.9 2 5.9L456 452.1c11.6 8.3 25.3 12.7 39.6 12.7s28-4.4 39.6-12.7l332.1-236.7c2.8-2 2.3-4.8 2-5.9-0.4-1.1-1.5-3.6-5-3.6H126.9z"
                    fill="#3E3A39"
                  ></path>
                  <path
                    d="M872.4 804.7H118.8c-30.2 0-54.8-24.6-54.8-54.8V236.6c0-30.2 24.6-54.8 54.8-54.8h753.5c30.2 0 54.8 24.6 54.8 54.8v513.3c0.1 30.2-24.5 54.8-54.7 54.8zM118.8 208.8c-15.3 0-27.7 12.4-27.7 27.7v513.3c0 15.3 12.4 27.7 27.7 27.7h753.5c15.3 0 27.7-12.4 27.7-27.7V236.6c0-15.3-12.4-27.7-27.7-27.7H118.8z"
                    fill="#3E3A39"
                  ></path>
                  <path
                    d="M496.1 474.3m-71.2 0a71.2 71.2 0 1 0 142.4 0 71.2 71.2 0 1 0-142.4 0Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M496.1 556c-45.1 0-81.7-36.7-81.7-81.7s36.7-81.7 81.7-81.7 81.7 36.7 81.7 81.7-36.7 81.7-81.7 81.7z m0-142.4c-33.4 0-60.6 27.2-60.6 60.6 0 33.4 27.2 60.6 60.6 60.6s60.6-27.2 60.6-60.6c0-33.4-27.2-60.6-60.6-60.6z"
                    fill="#3E3A39"
                  ></path>
                  <path
                    d="M496.1 474.3m-39.2 0a39.2 39.2 0 1 0 78.4 0 39.2 39.2 0 1 0-78.4 0Z"
                    fill="#E74138"
                  ></path>
                  <path
                    d="M496.1 524c-27.4 0-49.7-22.3-49.7-49.7s22.3-49.7 49.7-49.7 49.7 22.3 49.7 49.7-22.3 49.7-49.7 49.7z m0-78.3c-15.8 0-28.6 12.8-28.6 28.6s12.8 28.6 28.6 28.6 28.6-12.8 28.6-28.6-12.9-28.6-28.6-28.6z"
                    fill="#336EAD"
                  ></path>
                  <path
                    d="M666.7 685h-490c-2 0-3.6-1.6-3.6-3.6v-14.6c0-2 1.6-3.6 3.6-3.6h490c2 0 3.6 1.6 3.6 3.6v14.6c0 2-1.6 3.6-3.6 3.6zM511.5 725.7H176.8c-2 0-3.6-1.6-3.6-3.6v-14.6c0-2 1.6-3.6 3.6-3.6h334.8c2 0 3.6 1.6 3.6 3.6v14.6c0 2-1.7 3.6-3.7 3.6zM817.4 638.6H176.8c-2 0-3.6-1.6-3.6-3.6v-14.6c0-2 1.6-3.6 3.6-3.6h640.6c2 0 3.6 1.6 3.6 3.6V635c0 2-1.6 3.6-3.6 3.6z"
                    fill="#C9E6E6"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="mx-4">
              <form action="" className="lg:flex lg:flex-col" id="form">
                <input
                  type="text"
                  className="rounded-md bg-zinc-100 my-2"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="rounded-md bg-zinc-100 my-2"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  className="rounded-md bg-zinc-100 my-2"
                  placeholder="Whats your email?"
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="rounded-md bg-zinc-100 my-2"
                  placeholder="Your questions..."
                ></textarea>
              </form>
              <button
                type="submit"
                form="form"
                className="bg-pink-600 mt-4 text-sm px-5 py-2 font-medium uppercase rounded-md hover:bg-zinc-100"
              >
                Send message
              </button>
            </div>
          </div>
        </section>

        <section className="my-10">
          <div className="text-center">
            <h1 className="font-bold lg:text-2xl">Contact Us</h1>
            <p>Get in touch and let us know how we can help you!</p>
          </div>
        </section>

        <section className="mb-5 flex flex-col justify-center items-center gap-3">
          <motion.div
            initial={{
              x: -60,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-blue-300 rounded-md lg:w-1/3 lg:h-12 w-1/2 h-18 flex shadow-md"
          >
            <HiPhone
              title="Our phone number"
              className="m-3 bg-blue-900 rounded-sm"
              size={20}
              color="white"
            />
            <p>
              <span className="font-bold">Our phone:</span> <br />
              +046893985
            </p>
          </motion.div>

          <motion.div
            initial={{
              x: -60,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-blue-300 rounded-md lg:w-1/3 lg:h-12 w-1/2 h-18 flex shadow-md"
          >
            <HiHome
              title="Our location"
              className="m-3 bg-blue-900 rounded-sm"
              size={20}
              color="white"
            />
            <p>
              <span className="font-bold">Our location:</span> <br /> Bucuresti,
              Romania
            </p>
          </motion.div>

          <motion.div
            initial={{
              x: -60,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-blue-300 rounded-md lg:w-1/3 lg:h-12 w-1/2 h-18 flex shadow-md"
          >
            <HiOutlineMail
              title="Our email"
              className="lg:m-3 mt-2 ml-3 bg-blue-900 rounded-sm inline-block"
              size={20}
              color="white"
            />
            <p>
              <span className="font-bold">Our email address:</span> <br />
              sneakers@sneakers.ro
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
