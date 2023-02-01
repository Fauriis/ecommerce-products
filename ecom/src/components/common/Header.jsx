import { BiMenu } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative">
        <Link href="/" title="Home">
          <GiRunningShoe size={30}></GiRunningShoe>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <BiMenu size={30}></BiMenu>
        </button>
      </section>

      <nav
        className={`absolute left-0  ${
          menuOpen ? "top-0" : "-top-full"
        }  h-1/6 w-screen text-white bg-yellow-300`}
      >
        <ul className=" flex justify-center gap-6 mt-10 font-thin text-xl">
          <li className="hover:text-black">
            <Link href="/" title="Home">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/contact" title="Contact">Contact</Link>
          </li>

          <li className="hover:text-black">
            <Link href="/products" title="Products">Products</Link>
          </li>

          <li className="hover:text-black">
            <Link href="/cart" title="Cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
