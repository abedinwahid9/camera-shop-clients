import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import Button from "./Button";

const ProductCard = ({ data }) => {
  return (
    <div className="w-full border-secondary-color border-2 rounded-lg flex flex-col justify-between h-full bg-base-100  shadow-lg shadow-secondary-color overflow-hidden">
      <h2 className="text-2xl text-center py-1 capitalize font-semibold ">
        {data?.name.slice(0, 15)}
      </h2>
      <img
        className="h-56 w-full object-cover"
        src={data?.imageLink}
        alt="Shoes"
      />
      <div className="w-full h-full py-2 px-2">
        <div className="flex justify-between py-1 ">
          <div>
            <p className="text-text-color">
              {data?.description.slice(0, 25)}...
            </p>
            <p className="text-lg font-bold">Price: {data?.price} Tk</p>
          </div>
          <FaRegHeart className="text-2xl text-secondary-color" />
        </div>

        <div>
          <Button title="buy now" width="w-full" logo={<CiShoppingCart />} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
