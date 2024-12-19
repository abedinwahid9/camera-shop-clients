import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="w-full border-secondary-color border-2 rounded-lg flex flex-col justify-between h-full bg-base-100  shadow-lg shadow-secondary-color overflow-hidden">
      <h2 className="text-2xl text-center py-1 capitalize font-semibold ">
        Shoes!
      </h2>
      <img
        className="h-full w-full object-fill"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <div className="w-full h-full py-2 px-2">
        <div className="flex justify-between py-1 ">
          <div>
            <p className="text-text-color">If a dog chews he choose?...</p>
            <p className="text-lg font-bold">Price: 180 Tk</p>
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
