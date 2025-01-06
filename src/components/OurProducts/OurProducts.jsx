import { Link } from "react-router-dom";
import Button from "../share/Button";
import ProductCard from "../share/ProductCard";
import Title from "../share/Title";
import { useContext, useRef } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import Loading from "../../pages/Loading/Loading";
import { useInView, motion } from "motion/react";

const OurProducts = () => {
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

  if (loading) {
    return <Loading />;
  }
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
    >
      <Title title="our products" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        {productData?.slice(0, 8).map((data) => {
          return <ProductCard key={data?._id} data={data} />;
        })}
      </div>
      <Link to="/products" className="py-5 flex justify-center">
        <Button title="all products" />
      </Link>
    </motion.div>
  );
};

export default OurProducts;
