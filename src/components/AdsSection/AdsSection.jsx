import "./adsSection.css";

const AdsSection = ({ firstAds }) => {
  return (
    <div className="flex gap-3 py-5 ">
      {firstAds?.map((ads, i) => {
        return (
          <div
            key={i}
            className="ads overflow-hidden shadow-lg shadow-secondary-color"
          >
            <img className="w-full h-full " src={ads.img} alt={ads.name} />
          </div>
        );
      })}
    </div>
  );
};

export default AdsSection;
