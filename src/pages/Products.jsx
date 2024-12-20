import AdsSection from "../components/AdsSection/AdsSection";
import adsbanner4 from "../assets/banner/banner6.png";
import adsbanner5 from "../assets/banner/banner7.png";
import Title from "../components/share/Title";
import ProductCard from "../components/share/ProductCard";

const Products = () => {
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

  const allCategory = ["canon", "nekon", "rode", "sony"];

  return (
    <div className="container mx-auto">
      <AdsSection firstAds={secondeAds} />
      <div className="md:px-5 px-2">
        <Title title="our products" />
        <div className="flex justify-between gap-3">
          <label className="focus-within:!outline-primary-color input lg:w-1/4 w-1/2  input-bordered border-secondary-color flex items-center gap-2">
            <input type="text" className="grow " placeholder="Search" />
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
          <select className="focus-within:!outline-primary-color select select-bordered border-secondary-color lg:w-1/4 w-1/2">
            <option>low price to high price</option>
            <option>high price to low price</option>
          </select>
        </div>
        <div className="pt-5 flex gap-2 flex-wrap justify-center">
          <div className="btn border-secondary-color bg-secondary-color text-white font-semibold text-lg hover:bg-optional-color">
            All
          </div>
          {allCategory?.map((category, i) => {
            return (
              <div
                key={i}
                className="btn capitalize border-secondary-color bg-secondary-color text-white font-semibold text-lg hover:bg-optional-color"
              >
                {category}
              </div>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:my-10 my-5 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
