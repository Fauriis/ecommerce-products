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


  return (
    <>
      <main className=" text-black ">
        <div className="">
          <Link href="/wishlist">
            <BsFillSuitHeartFill
              size={25}
              className="hover:text-red-500"
              title="Wishlist"
            ></BsFillSuitHeartFill>
          </Link>
        </div>
     

      </main>
    </>
  );
};
