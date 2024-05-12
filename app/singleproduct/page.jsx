import Image from "next/image";
import { getSingleProduct } from "../helpers/index";

const singleProduct = async ({ searchParams }) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div className="max-w-screen-xl mx-auto xl:flex md:flex items-center gap-10 xl:gap-0 pb-1">
      <Image
        src={product.image}
        alt="product image"
        height={500}
        width={500}
        className="  "
      />
      <div className="flex flex-col sm:mx-4 sm:block md:block gap-2">
        <p className="text-xl font-semibold">{product.title}</p>
        <p>{product.description}</p>
        <p>Price : ${product.price}</p>
        <p>Category : {product.category}</p>
      </div>
    </div>
  );
};

export default singleProduct;
