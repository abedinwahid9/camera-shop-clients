import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonitalsCard from "../share/TestimonitalsCard";
import Title from "../share/Title";
import { Parallax } from "react-parallax";
import bg from "../../assets/bg.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper py-5">
        <Parallax
          blur={{ min: -15, max: 10 }}
          bgImage={bg}
          bgImageAlt="bf"
          strength={-100}
        >
          <h3 className="text-secondary-color font-bold text-3xl capitalize text-center py-5">
            testimonials
          </h3>
          <div ref={sliderRef} className="keen-slider py-10">
            <div className="keen-slider__slide number-slide1">
              <TestimonitalsCard />
            </div>
            <div className="keen-slider__slide number-slide1">
              <TestimonitalsCard />
            </div>
            <div className="keen-slider__slide number-slide1">
              <TestimonitalsCard />
            </div>
            <div className="keen-slider__slide number-slide1">
              <TestimonitalsCard />
            </div>
          </div>{" "}
        </Parallax>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Testimonials;
