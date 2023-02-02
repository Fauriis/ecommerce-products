import { FiSend } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="container px-4 lg:px-0 mx-auto">
        <div className="p-4 text-white lg:flex lg:justify-between">
          <div className="mt-5">
            <h1 className="font-bold text-white mb-4">About us</h1>
            <p className="font-light text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <br className="lg:block hidden" /> Blanditiis illum aspernatur
              beatae neque culpa magnam commodi{" "}
              <br className="lg:block hidden" /> voluptate accusantium.
              Exercitationem, id placeat? <br className="lg:block hidden" />{" "}
              Aperiam porro saepe quibusdam odit quos vero hic illum.
            </p>
          </div>

          <ul className="text-gray-400 mt-5">
            <h1 className="text-white font-bold mb-4">Contact Info</h1>

            <li>
              <a href="">Address: Bucuresti, Romania</a>
            </li>
            <li>
              <a href="tel:+0465382934">Phone: +045662742</a>
            </li>
            <li>
              <a href="mailto:sneakers@sneaker.ro">
                Email: sneakers@sneakers.ro
              </a>
            </li>
          </ul>

          <ul className="mt-5 text-gray-400">
            <h1 className="text-white font-bold mb-4">Important Links</h1>

            <li>
              <a href="">Shopping Cart</a>
            </li>
            <li>
              <a href="">My account</a>
            </li>
            <li>
              <a href="">Our shop</a>
            </li>
          </ul>

          <form action="" className="mt-5">
            <h1 className="font-bold mb-4">Newsletter</h1>

            <p className="text-gray-400">Follow us for more content!</p>

            <input
              type="text"
              id="email"
              placeholder="Email Address"
              className="rounded-xl "
            />
            <button
              type="button"
              id="email"
              title="Send"
              className="bg-orange-300 rounded-xl px-4 pt-1.5 relative right-10 top-2 hover:bg-gray-200"
            >
              <FiSend size={20}></FiSend>
            </button>
          </form>
        </div>
      </section>

      <div className="border border-t border-l-neutral-900"></div>

      <section className="container px-4 lg:px-0 mx-auto">
        <div className="flex justify-center items-center mt-3">
          <button title="Back to top" onClick={scrollToTop}>
            <BiArrowToTop className="text-white"></BiArrowToTop>
          </button>
        </div>

        <div className="text-gray-400 p-4 lg:flex lg:justify-between ">
          <ul className="flex gap-2 items-center justify-end ">
            <p>Copyright ©2023 All rights reserved by Sneakers.ro</p>

            <li>
              <a href="facebook.com" title="Facebook">
                <RiFacebookFill className="text-white"></RiFacebookFill>{" "}
              </a>
            </li>

            <li>
              <a href="twitter.com" title="Twitter">
                <AiOutlineTwitter className="text-white"></AiOutlineTwitter>{" "}
              </a>
            </li>

            <li>
              <a href="sneakers.com" title="Our Site">
                <BsGlobe2 className="text-white"></BsGlobe2>{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
