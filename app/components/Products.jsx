"use client";

import Link from "next/link";
import Image from "next/image";

const Products = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {products.map((item) => (
        <Link
          href={{ pathname: "/singleproduct", query: { _id: item._id } }}
          key={item._id}
        >
          <div className="border-[1px] border-gray-300 rounded-xl overflow-hidden hover:border-gray-950 duration-300 sm:mx-3 md:mx-6">
            <Image
              src={item.image}
              priority={true}
              width={500}
              height={500}
              alt="product image"
              className="w-full h-80 object-contain"
            />
            <div className="flex flex-col px-4 pb-2 text-sm">
              <p className=" text-gray-600">{item.title}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
