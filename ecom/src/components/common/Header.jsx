import { BiMenu } from "react-icons/bi";
import { GiHighHeel } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import { css } from "@emotion/css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const underline = css`
    display: inline-block;
    position: relative;
    color: white;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: black;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `;

  return (
    <>
      <section className="flex justify-between items-center h-full lg:h-10 z-10 relative">
        <h1
          className={`uppercase text-black tracking-wide font-semibold ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          We love fashion
        </h1>
        <Link href="/" title="Home">
          <GiHighHeel
            size={30}
            className="hover:text-black hover:animate-spin"
          ></GiHighHeel>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <BiMenu size={30} className="hover:text-black"></BiMenu>
        </button>
      </section>

      <nav
        className={`absolute right-0 ${
          menuOpen
            ? " top-0 transition-all duration-700 ease-in-out"
            : "-top-full transition-all duration-700 ease-in transform scale-y-50"
        }  h-1/6 w-screen text-white bg-pink-200`}
      >
        <ul className=" flex justify-center gap-6 mt-10 font-thin text-xl lg:uppercase">
          <li
            className={`${underline} transition-colors duration-500 hover:text-black`}
          >
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
          <li
            className={`${underline} transition-colors duration-500 hover:text-black`}
          >
            <Link href="/contact" title="Contact">
              Contact
            </Link>
          </li>

          <li
            className={`${underline} transition-colors duration-500 hover:text-black`}
          >
            <Link href="/products" title="Products">
              Products
            </Link>
          </li>
        </ul>

        <ul className="flex justify-center gap-6 mt-2 font-thin text-xl lg:uppercase">
          <li
            className={`${underline} transition-colors duration-500 hover:text-black`}
          >
            <Link href="/cart" title="Cart">
              {/* tre sa scrii cu litere mici fisierul ca sa ti l ia */}
              Cart
            </Link>
          </li>

          <li
            className={`${underline} transition-colors duration-500 hover:text-black`}
          >
            <Link href="/wishlist" title="Wishlist">
              Wishlist
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
