import { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonitalsCard from "../share/TestimonitalsCard";
import { Parallax } from "react-parallax";
import bg from "../../assets/bg.jpg";
import { useInView, motion } from "motion/react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        // Auto-slide is initialized in the plugin below
      },
    },
    [
      (slider) => {
        let timeout;
        let isMouseOver = false;

        function clearNextTimeout() {
          if (timeout) {
            clearTimeout(timeout);
          }
        }

        function nextTimeout() {
          clearNextTimeout();
          if (isMouseOver) return; // Pause auto-slide when hovered
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          // Start auto-slide and attach event listeners
          slider.container.addEventListener("mouseover", () => {
            isMouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            isMouseOver = false;
            nextTimeout();
          });
          nextTimeout(); // Start the auto-slide initially
        });

        slider.on("dragStarted", clearNextTimeout); // Stop auto-slide on drag
        slider.on("animationEnded", nextTimeout); // Restart auto-slide after animation
        slider.on("updated", nextTimeout); // Restart auto-slide after update
      },
    ]
  );

  const adsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  // Reference for the box container
  const boxRef = useRef(null);

  // useInView hook to detect when the element is in the viewport
  const isInView = useInView(boxRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={boxRef}
      variants={adsVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="navigation-wrapper py-5"
    >
      <Parallax blur={{ min: -15, max: 10 }} bgImage={bg} strength={-100}>
        <h3 className="text-secondary-color font-bold text-3xl capitalize text-center py-5">
          Testimonials
        </h3>
        <div ref={sliderRef} className="keen-slider py-10">
          <div className="keen-slider__slide">
            <TestimonitalsCard />
          </div>
          <div className="keen-slider__slide">
            <TestimonitalsCard />
          </div>
          <div className="keen-slider__slide">
            <TestimonitalsCard />
          </div>
          <div className="keen-slider__slide">
            <TestimonitalsCard />
          </div>
        </div>
      </Parallax>
    </motion.div>
  );
};

export default Testimonials;
