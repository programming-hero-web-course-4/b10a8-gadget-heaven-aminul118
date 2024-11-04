import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const ProductDetails = () => {
  const { productname } = useParams();
  const allProducts = useLoaderData();
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    const findMatchingProduct = allProducts.find(
      (product) => product.product_title === productname
    );
    setNewProduct(findMatchingProduct);
  }, [allProducts, productname]);

  if (!newProduct) {
    return <p>Loading...</p>;
  }

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
    availability,
  } = newProduct;

  return (
    <div>
      <div className="hero bg-white p-8 rounded-xl">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src={product_image}
            alt={product_title}
            className="max-w-sm rounded-lg"
          />

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="py-6">Price: $ {price}</p>

            <div>
              {availability ? (
                <button className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                  In Stock
                </button>
              ) : (
                <button className="px-2 py-1 bg-red-200 text-red-800 rounded-full">
                  Out of Stock
                </button>
              )}
            </div>
            <p>{description}</p>
            <p className="font-semibold">Specification:</p>
            <ol className="list-decimal list-inside">
              {Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
            <p className="font-semibold">Rating</p>
            <p>{rating}</p>

            <button className="border-2 px-6 py-2 rounded-full border-purple-700 bg-[#9538E2] text-white flex items-center gap-2">
              Add to Cart <IoMdCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
