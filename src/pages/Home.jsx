import AdsSection from "../components/AdsSection/AdsSection";
import FeatureProducts from "../components/FeatureProducts";
import Banner from "../components/share/Banner";
import adsbanner1 from "../assets/banner/banner13.png";
import adsbanner2 from "../assets/banner/banner12.png";
import adsbanner3 from "../assets/banner/banner11.png";
import adsbanner4 from "../assets/banner/banner6.png";
import adsbanner5 from "../assets/banner/banner7.png";
import OurProducts from "../components/OurProducts/OurProducts";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";

const Home = () => {
  const firstAds = [
    {
      name: "adsBanner2",
      img: adsbanner2,
    },
    {
      name: "adsBanner1",
      img: adsbanner1,
    },
    {
      name: "adsBanner3",
      img: adsbanner3,
    },
  ];
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

  return (
    <div>
      <Banner />
      <div className="md:px-5 px-2">
        <AdsSection firstAds={firstAds} />
        <FeatureProducts />
        <AdsSection firstAds={secondeAds} />
        <OurProducts />
      </div>
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Home;
