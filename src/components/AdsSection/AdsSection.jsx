import { useRef } from "react";
import "./adsSection.css";
import { motion, useInView } from "motion/react";

const AdsSection = ({ firstAds }) => {
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
      className="flex gap-3 py-5 "
    >
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
    </motion.div>
  );
};

export default AdsSection;
