import React from "react";
import { motion } from "framer-motion";
import Black from "../assets/tech/Black.png"; // Correct import without curly braces

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full shadow-2xl border-4 border-[#915EFF] mt-10 md:mt-0"
    >
      <img
        src={Black} // Use the imported image
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
        style={{
           // Move the image slightly down
          // objectPosition: "left center",
          objectPosition: "center top",
          
        }}
        onError={(e) => {
          console.error("Image failed to load:", e);
          e.target.onerror = null; // Prevent infinite loop
        }}
      />
    </motion.div>
  );
};

export default HeroImage;