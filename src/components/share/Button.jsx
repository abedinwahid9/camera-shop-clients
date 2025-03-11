import { motion } from "motion/react";

const Button = ({ title, width, logo, role }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`py-2 px-2 rounded-md font-semibold md:text-xl text-xs flex justify-center items-center text-white uppercase hover:bg-optional-color bg-secondary-color ${width}`}
    >
      {title}
      {logo && (
        <div className="md:text-2xl text-lg font-semibold ml-1">{logo}</div>
      )}
    </motion.button>
  );
};

export default Button;
