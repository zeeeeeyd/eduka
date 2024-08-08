import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isH1Animated, setIsH1Animated] = useState(false);

  const sentence = "Eduka is your ultimate educational companion, we make learning easy and accessible.";
  const words = sentence.split(" ");

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsH1Animated(true) 
    });

    tl.from("#first", { duration: 1, y: 200, opacity: 0, delay: 1 })
      .to("#first", { y: -100, duration: 1, opacity: 1, delay: 0.5 })
      .to("#first", { y: -500, duration: 1, opacity: 0, delay: 0.5 });
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: -100,
      transition: {
        duration: 0.5,
        delay: i * 0.3,
      }
    }),
  };

  const handleComplete = () => {
    setTimeout(() => {
      gsap.to("#second", { 
        opacity: 0, 
        duration: 1, 
        stagger: 0.1, 
        onComplete: () => {
          gsap.set("#second", { display: "none" });
          gsap.fromTo("#third", 
            { y: -40, scale: 0.5, opacity: 0 },
            { y: -40, scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
          );
        }
      });
    }, 1000); 
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center relative">
      <h1 id="first" className="text-6xl opacity-0">Let us make it Easy!</h1>
      <div id="second" className="text-3xl max-w-screen-md text-center flex flex-wrap justify-center">
        {isH1Animated && words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            onAnimationComplete={index === words.length - 1 ? handleComplete : undefined}
            className="inline-block mr-3 mb-5"
          >
            {word}
          </motion.span>
        ))}
      </div>
      <h1 id="third" className="text-6xl opacity-0 absolute top-48">useCoursia</h1>
    </div>
  );
};

export default Hero;