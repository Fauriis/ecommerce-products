import { useContext } from "react";
import { AppContext } from "../../pages/_app";

export const CartTotals = () => {
  const { cart } = useContext(AppContext);

  return (
    <main className="bg-zinc-200 w-full h-full lg:h-80 mb-6 rounded-md shadow-md inline-block">
      <div className="my-4 mx-8">
        <h1 className="font-bold text-black mb-4">Promo code</h1>

        <input
          type="text"
          className="bg-transparent border border-zinc-500 rounded-md"
          placeholder="Type here..."
        />
        <button
          type="button"
          className="bg-black text-white rounded-md relative right-12 px-2"
        >
          Apply
        </button>
      </div>

      <div className="border border-black mx-4"></div>

      <section className="my-6 mx-8">
        <ul className="my-8">
          <li className="text-zinc-400 mb-2">Subtotal <span className="ml-36">$2738</span></li>
          <li className="text-zinc-400 mb-4">Discount <span className="ml-36">10%</span> </li>
          <li className="text-black font-bold">Total <span className="ml-40">$2619</span></li>
        </ul>
      </section>

      <div className="bg-black mx-4 mb-6 rounded-md flex justify-center ">
        <button type="submit" className="text-white p-2 font-bold ">Continue to checkout</button>
      </div>
    </main>
  );
};
