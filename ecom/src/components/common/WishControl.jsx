import React, { useContext } from "react";
import { AppContext } from "../../pages/_app";
import { CgSpinner } from "react-icons/cg";
import Link from "next/link";
import { BsFillSuitHeartFill } from "react-icons/bs";

export const WishControl = () => {
  const { wish } = useContext(AppContext);

  if (wish === null) {
    return (
      <div className="text-center flex h-screen w-screen justify-center items-center">
        <CgSpinner size={48} className="animate-spin"></CgSpinner>
        Please wait...
      </div>
    );
  }

  const { products } = wish;

  const wishQty = products.reduce((wishQty, product) => {
    const { quantity } = product;

    wishQty += quantity;

    return wishQty;
  }, 0);

  return (
    <>
      <main className="flex flex-col text-center justify-center items-center text-black ">
        <div className="mt-10">
          <Link href="/wishlist">
            <BsFillSuitHeartFill
              size={30}
              className="hover:text-red-500"
              title="Wishlist"
            ></BsFillSuitHeartFill>
          </Link>
        </div>
        <div className=" ">
          <h1 className="uppercase font-bold text-xl mt-2">My wishlist</h1>
        </div>

        <div className="">{wishQty} products</div>
      </main>
    </>
  );
};
