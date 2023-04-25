import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full h-72 text-center">
          <Link href={`/products/${id}`}>
            <motion.img
              initial={{
                x: -60,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                borderRadius: "10%",
              }}
              src={image}
              title={title}
              className="h-full inline cursor-pointer"
              alt={`Image for ${title}`}
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
            ></motion.img>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm">
        <h1 className="uppercase text-zinc-400 mb-4 font-medium">{title}</h1>

        <div className="text-zinc-500 font-light mb-2">{formattedPrice}</div>

      </section>
    </article>
  );
};
