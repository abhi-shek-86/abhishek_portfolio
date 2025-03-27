import { motion } from "framer-motion";
import { styles } from "../styles";
import HeroImage from "./HeroImage"; // Import HeroImage

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center gap-5`}>
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 mt-20 md:mt-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abhishek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
