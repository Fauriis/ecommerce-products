import Head from "next/head";
import { Layout } from "../layouts";
import { HiHome, HiPhone, HiOutlineMail } from "react-icons/hi";
import useCollapse from "react-collapsed";
import { useState } from "react";

const ContactPage = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout>
        {/* <main className="container flex items-center justify-center my-5">
          <section className="mx-4 lg:mx-0 ">
            <div className="">
              <h1>Contact us</h1>
              <h3>Get in touch with us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam molestias voluptate commodi, hic dolore, modi, autem
                vel nesciunt blanditiis error temporibus. Pariatur, minima
                impedit error rerum officiis temporibus consectetur accusamus.
              </p>

              <ul>
                <li className="flex flex-row gap-2">
                  <HiHome
                    className="mt-3 bg-blue-900 rounded-sm"
                    size={20}
                    color="white"
                  ></HiHome>
                  <p>
                    <span>Our location</span> <br /> Bucuresti, Romania
                  </p>
                </li>

                <li className="flex flex-row gap-2">
                  <HiPhone
                    className="mt-3 bg-blue-900 rounded-sm"
                    size={20}
                    color="white"
                  ></HiPhone>
                  <p>
                    <span>Phone Number</span> <br /> (+04)867939583
                  </p>
                </li>

                <li className="flex flex-row gap-2">
                  <HiOutlineMail className="mt-3 bg-blue-900 rounded-sm"
                    size={20}
                    color="white"></HiOutlineMail>
                  <p>
                    <span>Email Address</span> <br /> sneakers@sneakers.ro
                  </p>
                </li>
              </ul>
            </div>


            <div className="bg-blue-900 px-2 py-3 rounded-md mt-4">
              <form action="" className="text-center">
                <input type="text" placeholder="Your Name" className="px-5" />
                <input type="text" placeholder="Your Name" className="px-5" />
                <input type="text" placeholder="Your Name" className="px-5" />
              </form>
            </div>
          </section>
        </main> */}
        <div>
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
          <section {...getCollapseProps()}>Collapsed content 🙈</section>
        </div>
        
      </Layout>
    </>
  );
};

export default ContactPage;
