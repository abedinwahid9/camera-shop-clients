const ProductCard = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full bg-base-100  shadow-lg shadow-secondary-color">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <div className="w-full h-full">
        <h2 className="">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className=" justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
