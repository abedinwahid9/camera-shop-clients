import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Title = ({ title }) => {
  const text = title.split("");

  const textVariants = {
    hidden: {
      rotateX: 90,
      translateY: -1,
    },
    visible: (index) => ({
      // opacity: 1,
      rotateX: 0,
      translateY: 0,
      transition: {
        duration: 1,
        delay: index * 0.2, // Delays each letter
        type: "tween",
        stiffness: 400,
        damping: 20,
      },
    }),
  };
  // Reference for the box container
  const textRef = useRef(null);

  // useInView hook to detect when the element is in the viewport
  const isInView = useInView(textRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={textRef} className="py-5 flex first-letter:uppercase ">
      {text?.map((str, i) => {
        return (
          <motion.h2
            key={i}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:text-3xl text-xl font-bold capitalize  bg-gradient-to-b from-primary-color  to-optional-color text-transparent bg-clip-text "
          >
            {str === " " ? "\u00A0" : str}
          </motion.h2>
        );
      })}
      <div className="border-b-[1px] py-1 border-primary-color "></div>
    </div>
  );
};

export default Title;
