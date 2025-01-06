import { motion } from "motion/react";

const Button = ({ title, width, logo, role }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`btn text-lg flex justify-center items-center text-white uppercase hover:bg-optional-color bg-secondary-color ${width}`}
    >
      {title}
      {logo && <div className="text-2xl font-bold">{logo}</div>}
    </motion.button>
  );
};

export default Button;
