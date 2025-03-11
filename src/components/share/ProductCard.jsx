/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Swal from "sweetalert2";
import useUserData from "../../hooks/useUserData";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { motion } from "motion/react";

const ProductCard = ({ data }) => {
  const { cart, setCart } = useContext(DataContext);
  const userId = useUserData();
  const useAxios = useAxiosPublic();

  const handleCart = () => {
    const check = cart.find((item) => item._id === data._id);

    if (check) {
      Swal.fire("this product already add");
    } else {
      setCart((prevState) => [...prevState, { ...data, quantity: 1 }]);
    }
  };

  // handle wish list
  const handleWishlist = async () => {
    const res = await useAxios.put(`/wishlist/${userId._id}`, { id: data._id });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full border-secondary-color border-2 rounded-lg flex flex-col justify-between h-full bg-base-100  shadow-lg shadow-secondary-color hover:shadow-primary-color overflow-hidden"
    >
      <h2 className="md:text-2xl text-sm text-center py-1 capitalize font-semibold ">
        {data?.name.slice(0, 15)}
      </h2>
      <img
        className="md:h-56 h-28 w-full object-contain"
        src={data?.imageLink}
        alt="Shoes"
      />
      <div className="w-full h-full py-2 px-2">
        <div className="flex justify-between py-1 ">
          <div>
            <p className="text-text-color md:text-base text-xs">
              {data?.description.slice(0, 25)}...
            </p>
            <p className="font-bold md:text-lg text-xs">
              Price: {data?.price} Tk
            </p>
          </div>
          <div onClick={handleWishlist}>
            <FaRegHeart className="md:text-2xl text-lg text-secondary-color" />
          </div>
        </div>

        {userId?.role === "admin" && userId?.role === "seller" ? (
          <button
            disabled
            className={`btn text-lg flex justify-center items-center text-white uppercase hover:bg-optional-color bg-secondary-color w-full`}
          >
            buy now
            <CiShoppingCart />
          </button>
        ) : (
          <div onClick={handleCart}>
            <Button title="buy now" width="w-full" logo={<CiShoppingCart />} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
