import React, { useEffect, useState } from "react";
import { baseUrl } from "../..";
import Link from "next/link";
import Image from "next/image";
import { AddToCart } from "./AddToCart";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const RelatedProducts = ({ productCategory }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=2`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, [productCategory]);

  if (products === null) {
    return <></>;
  }

  return (
    <section className="text-center mt-10">
      <h1 className=" uppercase text-lg lg:ml-32 font-bold my-5">Related Products</h1>

      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center mt-14">
        <RiArrowLeftSLine
          size={40}
          className="cursor-pointer hover:text-pink-500 lg:block hidden"
        ></RiArrowLeftSLine>

        {products.map((product) => {
          const { title, price, image, id } = product;
          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price);

          return (
            <div className=" items-center " key={id}>
                  <div className="">
                    <Link href={`/products/${id}`}>
                      <Image
                        alt={`Image for product ${title}`}
                        src={image}
                        width={150}
                        height={150}
                        style={{ objectFit: "contain" }}
                        className="inline cursor-pointer"
                      ></Image>
                    </Link>
                  </div>

                <section className="mt-8 text-center text-sm lg:text-md">
                  <h1 className="uppercase text-black mb-2 cursor-pointer">
                    {title}
                  </h1>

                  <div className="text-pink-500 font-bold cursor-pointer">
                    {formattedPrice}
                  </div>

                  <div className="mt-12 mb-6">
                    <AddToCart product={product}></AddToCart>
                  </div>
                </section>
            </div>
          );
        })}

        <RiArrowRightSLine
          size={40}
          className="cursor-pointer hover:text-pink-500 lg:block hidden"
        ></RiArrowRightSLine>
      </div>
    </section>
  );
};
