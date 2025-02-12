import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile ? (
      <section className={`relative w-full h-screen mx-auto`} >
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Toshak Parmar</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am Software Developer & Artist <br className='sm:block hidden' />
              develop the web and mobile applications.
            </p>
          </div>
        </div>

        <ComputersCanvas isMobile={isMobile} />

        <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[30px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-2 h-2 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section >
    )
      : (
        <section className={`relative w-full h-screen mx-auto`}>
          <div
            className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto py-8 flex flex-row items-start gap-5 px-2`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div>
              <h1 className={`font-black text-white text-[60px] leading-[70px] mt-2 `}>
                Hi, I'm <span className='text-[#915EFF]'>Toshak Parmar</span>
              </h1>
              <p className={`text-white-100 font-medium text-[24px] leading-[40px] mt-4`}>
                I am Software Developer & Artist <br className='sm:block hidden' />
                develop the web and mobile applications.
              </p>
            </div>
          </div>
        </section>
      )
  );
};

export default Hero;
