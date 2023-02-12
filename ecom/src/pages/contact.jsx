import Head from "next/head";
import { Layout } from "../layouts";
import {
  HiHome,
  HiPhone,
  HiOutlineMail,
  HiInformationCircle,
} from "react-icons/hi";
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
        <section className="mt-10">
          <div className="text-center">
            <h1>Contact us</h1>
            <p>
              Get in touch and let us know how we can help you! Click bellow to
              get more informations!
            </p>
          </div>
        </section>

        <section className="flex text-center">
          <div>
            <button
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
              {isExpanded ? (
                <HiInformationCircle
                  title="More info"
                  className="mt-3 bg-blue-900 rounded-sm"
                  size={40}
                  color="white"
                /> 
              ) : (
                <HiInformationCircle
                  className="mt-3 bg-blue-900 rounded-sm"
                  size={40}
                  color="white"
                />
              )}
            </button>
            <div {...getCollapseProps()}>
              <HiPhone
                title="our location"
                className="mt-3 bg-blue-900 rounded-sm"
                size={20}
                color="white"
              />
              <span>Our phone</span> <br /> Bucuresti, Romania
              <HiHome
                title="our location"
                className="mt-3 bg-blue-900 rounded-sm"
                size={20}
                color="white"
              />
              <span>Our location</span> <br /> Bucuresti, Romania
              <HiOutlineMail
                title="Our email"
                className="mt-3 bg-blue-900 rounded-sm"
                size={20}
                color="white"
              />
              <span>Send us a message here:</span> <br /> Bucuresti, Romania
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
