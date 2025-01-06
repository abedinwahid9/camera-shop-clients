import { useRef } from "react";
import Title from "../share/Title";
import { useInView, motion } from "motion/react";

const Faqs = () => {
  const quses = [
    {
      id: 1,
      qus: "What types of cameras do you sell",
      ans: " We sell a wide range of cameras, including DSLRs, mirrorless, cameras, compact point-and-shoot cameras, action cameras, and professional video cameras",
    },
    {
      id: 2,
      qus: "Do you offer both new and used cameras",
      ans: "Yes, we offer both brand-new and certified pre-owned cameras that are thoroughly inspected for quality",
    },
    {
      id: 3,
      qus: "How do I choose the right camera for my needs",
      ans: "Our website features a detailed buying guide, and you can also contact our customer support team for personalized advice based on your requirements",
    },
    {
      id: 4,
      qus: "How can I place an order on your website",
      ans: "Simply browse our catalog, add items to your cart, and proceed to checkout. You’ll need to create an account or log in to complete the purchase",
    },
    {
      id: 5,
      qus: "What payment methods do you accept",
      ans: "We accept major credit/debit cards, PayPal, and bank transfers. Some regions may also have local payment options available",
    },
  ];

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
      className="md:px-5 px-2"
    >
      <Title title="frequently asked question" />
      <div>
        {quses?.map((qus) => {
          return (
            <div key={qus.id} className="collapse collapse-arrow bg-base-200">
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={qus.id === 1}
              />
              <div className="collapse-title text-xl font-medium">
                {qus.id} {qus.qus}?
              </div>
              <div className="collapse-content">
                <p>{qus.ans}.</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Faqs;
