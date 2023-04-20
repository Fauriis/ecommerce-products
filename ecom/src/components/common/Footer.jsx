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
      <section className=" px-4 lg:px-4 mx-auto w-full">
        <div className="p-4 container text-white lg:flex lg:justify-between">
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

      <section className="px-4 lg:px-5 mx-auto w-full">
        <div className="container flex justify-center items-center mt-3">
          <button title="Back to top" onClick={scrollToTop}>
            <BiArrowToTop className="text-white"></BiArrowToTop>
          </button>
        </div>

        <div className="text-gray-400 p-4 lg:flex lg:justify-between ">
          <p>Copyright ©2023 All rights reserved by Sneakers.ro</p>

          <ul className="flex gap-4 lg:items-center lg:justify-end mt-2 lg:mt-0">
            <li className="hover:animate-bounce inline-block text-white">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <RiFacebookFill></RiFacebookFill>{" "}
              </a>
            </li>

            <li className="hover:animate-bounce inline-block text-white">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <AiOutlineTwitter></AiOutlineTwitter>{" "}
              </a>
            </li>

            <li className="hover:animate-bounce inline-block text-white">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                title="Our site"
                rel="noopener noreferrer"
              >
                <BsGlobe2></BsGlobe2>{" "}
              </a>
            </li>
          </ul>
        </div>

        
      </section>

      

    </>
  );
};
