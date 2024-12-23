import { Link } from "react-router-dom";
import Button from "../share/Button";
import ProductCard from "../share/ProductCard";
import Title from "../share/Title";
import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Loading from "../../pages/Loading/Loading";

const OurProducts = () => {
  const { productData, loading } = useContext(DataContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Title title="our products" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {productData?.slice(0, 8).map((data) => {
          return <ProductCard key={data?._id} data={data} />;
        })}
      </div>
      <Link to="/products" className="py-5 flex justify-center">
        <Button title="all products" />
      </Link>
    </div>
  );
};

export default OurProducts;
