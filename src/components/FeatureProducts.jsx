import ProductCard from "./share/ProductCard";
import Title from "./share/Title";
import sidebanner1 from "../assets/sidebanner/sidebanner1.jpg";
import sidebanner2 from "../assets/sidebanner/sidebanner2.jpg";
import { useContext, useRef } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import Loading from "../pages/Loading/Loading";
import { useInView, motion } from "motion/react";

const FeatureProducts = () => {
  const { productData, loading } = useContext(DataContext);
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
  const rightsideVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
  const leftsideVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  if (loading) {
    return <Loading />;
  }
  // Reference for the box container
  const boxRef = useRef(null);
  const sideRef = useRef(null);

  // useInView hook to detect when the element is in the viewport
  const isInView = useInView(boxRef, { triggerOnce: true, threshold: 0.1 });
  const sideInView = useInView(sideRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={boxRef}
      variants={adsVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="pb-3"
    >
      <Title title="feature products" />
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-9 col-span-12 order-2 lg:order-1">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full h-full">
            {productData?.slice(0, 6).map((data) => {
              return <ProductCard key={data?._id} data={data} />;
            })}
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12  gap-2 order-1 lg:order-2">
          <motion.div
            className=" grid grid-cols-12 gap-2 h-full "
            ref={sideRef}
          >
            <motion.img
              variants={rightsideVariants}
              initial="hidden"
              animate={sideInView ? "visible" : "hidden"}
              className="col-span-6 w-full h-full object-cover border-2 border-secondary-color rounded-lg lg:col-span-12 shadow-lg shadow-secondary-color"
              src={sidebanner1}
              alt="sidebanner"
            />
            <motion.img
              variants={leftsideVariants}
              initial="hidden"
              animate={sideInView ? "visible" : "hidden"}
              className="col-span-6 w-full h-full object-cover border-2 border-secondary-color rounded-lg lg:col-span-12 shadow-lg shadow-secondary-color"
              src={sidebanner2}
              alt="sidebanner"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureProducts;
