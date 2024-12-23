import ProductCard from "./share/ProductCard";
import Title from "./share/Title";
import sidebanner1 from "../assets/sidebanner/sidebanner1.jpg";
import sidebanner2 from "../assets/sidebanner/sidebanner2.jpg";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import Loading from "../pages/Loading/Loading";

const FeatureProducts = () => {
  const { productData, loading } = useContext(DataContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Title title="feature products" />
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-9 col-span-12 order-2 lg:order-1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full h-full">
            {productData?.slice(0, 6).map((data) => {
              return <ProductCard key={data?._id} data={data} />;
            })}
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12  gap-2 order-1 lg:order-2">
          <div className=" grid grid-cols-12 gap-2 h-full ">
            {" "}
            <img
              className="col-span-6 w-full h-full object-cover border-2 border-secondary-color rounded-lg lg:col-span-12 shadow-lg shadow-secondary-color"
              src={sidebanner1}
              alt="sidebanner"
            />
            <img
              className="col-span-6 w-full h-full object-cover border-2 border-secondary-color rounded-lg lg:col-span-12 shadow-lg shadow-secondary-color"
              src={sidebanner2}
              alt="sidebanner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
