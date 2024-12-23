import { useContext, useState } from "react";
import AdsSection from "../components/AdsSection/AdsSection";
import adsbanner4 from "../assets/banner/banner6.png";
import adsbanner5 from "../assets/banner/banner7.png";
import Title from "../components/share/Title";
import ProductCard from "../components/share/ProductCard";
import { DataContext } from "../DataProvider/DataProvider";
import Loading from "./Loading/Loading";

const Products = () => {
  const { productData, loading } = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (loading) {
    return <Loading />;
  }

  const secondeAds = [
    {
      name: "adsBanner4",
      img: adsbanner4,
    },
    {
      name: "adsBanner5",
      img: adsbanner5,
    },
  ];

  console.log(productData);

  const allCategory = ["all", "canon", "nekon", "rode", "sony"];

  // Filter products based on search and category
  const filteredProducts = productData?.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product?.brand === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto">
      <AdsSection firstAds={secondeAds} />
      <div className="md:px-5 px-2">
        <Title title="our products" />
        <div className="flex justify-between md:flex-row flex-col gap-3">
          {/* Search Input */}
          <label className="focus-within:!outline-primary-color input lg:w-1/4 md:w-1/2 w-full input-bordered border-secondary-color flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70 text-secondary-color"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* Sort Dropdown */}
          <select
            className="focus-within:!outline-primary-color select select-bordered border-secondary-color lg:w-1/4 md:w-1/2 w-full"
            // onChange={(e) => setSelectedCategory(e.target.value)}
            // value={selectedCategory}
          >
            <option>low price to high price</option>
            <option>high price to low price</option>
          </select>
        </div>
        {/* Categories Filter Buttons */}
        <div className="pt-5 flex gap-2 flex-wrap justify-center">
          {allCategory.map((category, i) => (
            <button
              key={i}
              className={`btn capitalize border-secondary-color ${
                selectedCategory === category
                  ? "bg-primary-color text-white"
                  : "bg-secondary-color text-white"
              } font-semibold md:text-lg text-sm hover:bg-optional-color`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:my-10 my-5 gap-3">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((data) => (
              <ProductCard key={data._id} data={data} />
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
