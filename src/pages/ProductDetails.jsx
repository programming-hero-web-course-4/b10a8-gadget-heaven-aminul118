import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa"; 
import { addToStoredList, addToStoredWishList } from "../utility/addToDatabase";
import HelmetCompo from "../components/HelmetCompo";

const ProductDetails = () => {
  const { productname } = useParams();
  const allProducts = useLoaderData();
  const [newProduct, setNewProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 

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
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification = [], 
    rating,
    availability,
  } = newProduct;

  const handleToCart = (id) => {
    addToStoredList(id);
  };

  const handleFavouriteHeart = (id) => {
    addToStoredWishList(id);
    toggleFavorite();
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); 
  };

  return (
    <div>
      <HelmetCompo title={`Product Details`}></HelmetCompo>
      <div className="bg-[#9538E2] h-52 flex flex-col items-center">
        <div className="w-8/12 max-auto space-y-2 text-white text-center mt-8">
          <h1 className="text-3xl font-semibold ">Product Details</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="hero bg-white p-8 rounded-xl w-10/12 mx-auto mt-6">
          <div className="hero-content flex-col  lg:flex-row">
            <img
              src={product_image}
              alt={product_title}
              className="rounded-lg min-w-11"
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
              <p className="font-semibold flex gap-2">Rating</p>
              <p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                {rating}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleToCart(product_id);
                  }}
                  className="border-2 px-6 py-2 rounded-full border-purple-700 bg-[#9538E2] text-white flex items-center gap-2"
                >
                  Add to Cart <IoMdCart />
                </button>
                <button
                  onClick={() => {
                    handleFavouriteHeart(product_id);
                  }}
                  className={`text-3xl ${isFavorite ? "text-red-500" : ""}`}
                >
                  {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
