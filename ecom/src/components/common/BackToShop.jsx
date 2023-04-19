import Link from "next/link";

export const BackToShop = () => {
  return (
    <Link href="/products" >
      <button  title="Back to shop" className="bg-black font-bold rounded-lg text-white text-sm p-2 hover:bg-pink-500 transition-colors duration-300">
        Back to shop
      </button>
    </Link>
  );
};
