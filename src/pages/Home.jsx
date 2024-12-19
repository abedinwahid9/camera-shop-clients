import AdsSection from "../components/AdsSection/AdsSection";
import FeatureProducts from "../components/FeatureProducts";
import Banner from "../components/share/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-2">
        <AdsSection />
        <FeatureProducts />
      </div>
    </div>
  );
};

export default Home;
