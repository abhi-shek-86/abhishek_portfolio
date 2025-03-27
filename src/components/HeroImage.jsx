import React from "react";
import { motion } from "framer-motion";
import Black from "../assets/tech/Black.png"; // Correct import without curly braces

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }} // Start completely outside the webpage (right side)
      animate={{ opacity: 1, x: 0 }} // Animate to its final position
      transition={{
        duration: 1.2, // Slightly shorter duration for smoothness
        type: "tween", // Use tween for a smoother animation
        ease: "easeOut", // Smooth easing function
      }}
      className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full shadow-2xl border-4 border-[#915EFF] mt-10 md:mt-0"
    >
      <img
        src={Black} // Use the imported image
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
        style={{
          objectPosition: "center top", // Adjust image position
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
