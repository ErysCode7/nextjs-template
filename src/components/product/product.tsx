import { Products } from "@/services/products";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  product: Products;
};

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-md shadow-md transition duration-500 lg:hover:scale-105 flex-flex-col">
      <div
        onClick={() => router.push(`/product/${product?.id}`)}
        className="relative h-[280px] w-[280px] m-auto lg:cursor-pointer"
      >
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div className="flex flex-col gap-5 px-5 py-5 relative h-36">
        <h2
          onClick={() => router.push(`/product/${product?.id}`)}
          className="text-sm lg:text-base font-bold text-blue-500 lg:cursor-pointer hover:underline"
        >
          {product.title.length > 70
            ? `${product.title.slice(0, 70)}...`
            : product.title}
        </h2>
        <p className="text-sm text-gray-500 absolute bottom-5">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
