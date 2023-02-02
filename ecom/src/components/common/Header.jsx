import { BiMenu } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="flex justify-between items-center h-full lg:h-10 z-10 relative">
   
        <Link href="/" title="Home">
          <GiRunningShoe size={30} className="hover:text-black hover:animate-spin"></GiRunningShoe>
        </Link>


        <h1 className={`uppercase text-orange-900 tracking-wide font-semibold ${menuOpen ? 'hidden' : 'block'}`}>We love fashion</h1>


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
        className={`absolute left-0 ${
          menuOpen ? " top-0 transform translate-y-5 transition duration-500" : "-top-full "
        }  h-1/6 w-screen text-white bg-yellow-300`}
      >
        <ul className=" flex justify-center gap-6 mt-10 font-thin text-xl lg:uppercase">
          <li className="hover:text-black lg:font-bold transition-colors duration-500">
            <Link href="/" title="Home">Home</Link>
          </li>
          <li className="hover:text-black lg:font-bold transition-colors duration-500">
            <Link href="/contact" title="Contact">Contact</Link>
          </li>

          <li className="hover:text-black lg:font-bold transition-colors duration-500">
            <Link href="/products" title="Products">Products</Link>
          </li>

          <li className="hover:text-black lg:font-bold transition-colors duration-500">
            <Link href="/cart" title="Cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
