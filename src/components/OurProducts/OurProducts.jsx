import { Link } from "react-router-dom";
import Button from "../share/Button";
import ProductCard from "../share/ProductCard";
import Title from "../share/Title";

const OurProducts = () => {
  return (
    <div>
      <Title title="our products" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Link to="/products" className="py-5 flex justify-center">
        <Button title="all products" />
      </Link>
    </div>
  );
};

export default OurProducts;
