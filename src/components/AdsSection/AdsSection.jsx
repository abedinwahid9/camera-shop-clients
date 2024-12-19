import adsbanner1 from "../../assets/banner/banner13.png";
import adsbanner2 from "../../assets/banner/banner12.png";
import adsbanner3 from "../../assets/banner/banner11.png";
import "./adsSection.css";

const AdsSection = () => {
  return (
    <div className="flex gap-3 py-5">
      <div className="ads overflow-hidden shadow-lg shadow-secondary-color">
        <img className="w-full h-full " src={adsbanner2} alt="banner" />
      </div>
      <div className="ads overflow-hidden shadow-lg shadow-secondary-color">
        <img
          className="w-full h-full shadow-lg shadow-secondary-color"
          src={adsbanner1}
          alt="banner"
        />
      </div>
      <div className="ads overflow-hidden shadow-lg shadow-secondary-color">
        <img
          className="w-full h-full shadow-lg shadow-secondary-color"
          src={adsbanner3}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default AdsSection;
