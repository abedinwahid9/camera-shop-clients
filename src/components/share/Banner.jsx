import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import banner1 from "./../../assets/banner/banner1.png";
import banner2 from "./../../assets/banner/banner2.png";
import banner3 from "./../../assets/banner/banner3.png";
import banner4 from "./../../assets/banner/banner4.png";

const Banner = () => {
  const [sliderRef] = useKeenSlider({ loop: true }, [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 3000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);
  return (
    <div
      ref={sliderRef}
      className="keen-slider !w-full !h-full overflow-x-hidden shadow-lg shadow-secondary-color"
    >
      <div className="keen-slider__slide number-slide1">
        <img className="w-full h-full" src={banner1} alt="banner1" />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img className="w-full h-full" src={banner2} alt="banner2" />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img className="w-full h-full" src={banner3} alt="banner3" />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img className="w-full h-full" src={banner4} alt="banner4" />
      </div>
    </div>
  );
};

export default Banner;
