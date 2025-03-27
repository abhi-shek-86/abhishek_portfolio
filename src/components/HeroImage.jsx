import React from "react";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-full"
    >
      <img
        src="src\assets\tech\Black Suit.jpg" // Put your image in public folder
        alt="Your Profile"
        className="w-full h-full object-contain rounded-full"
      />
    </motion.div>
  );
};

export default HeroImage;