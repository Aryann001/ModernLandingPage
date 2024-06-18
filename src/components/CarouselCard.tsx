import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const CarouselCard = () => {
  const hoverController = useAnimationControls();
  const hoverImageScaleController = useAnimationControls();

  const hoverStartHandler = () => {
    hoverController.start({
      opacity: 1,
      translateY: '0%'
    }, {type: "tween", duration: 0.5, ease: "easeInOut"})
    hoverImageScaleController.start({
      scale: 1.1
    }, {type: "tween", duration: 0.5, ease: "easeInOut"})
  };

  const hoverEndHandler = () => {
    hoverController.start({
      opacity: 0,
      translateY: '10%'
    }, {type: "tween", duration: 0.5, ease: "easeInOut"})
    hoverImageScaleController.start({
      scale: 1
    }, {type: "tween", duration: 0.5, ease: "easeInOut"})
  };

  return (
    <motion.div
      onHoverStart={hoverStartHandler}
      onHoverEnd={hoverEndHandler}
      className="relative md:h-[25rem] h-max md:w-[30rem] w-[85%] cursor-default"
    >
      <div className="md:h-full h-[70%] w-full inset-0 overflow-hidden rounded-[2rem]">
        <motion.img
          animate={hoverImageScaleController}
          className="h-full w-full object-cover pointer-events-none"
          src="/assets/carouselImage1.jpg"
          alt="image"
        />
      </div>
      {/*  */}

      <motion.div
        animate={hoverController}
        className="z-[2] w-full md:absolute relative md:opacity-0 opacity-[1] md:translate-y-[10%] translate-y-[2%] md:bottom-[-10%] items-center justify-center flex"
      >
        <div className="flex md:w-3/4 w-11/12 flex-col gap-[1rem] md:rotate-[-5deg] text-left text-white">
          <p className=" text-wrap font-montserrat font-extralight md:text-[1.75rem] text-[1.25rem] tracking-tighter leading-[1.05]">
            Bringing live-guided immersive virtual tours to a global audience
          </p>
          <h3 className=" text-wrap font-inclusive font-extrabold text-[2rem] tracking-[-0.1em] leading-[1.05]">
            Six million voices
          </h3>
          <h4 className=" text-purple-500 text-wrap uppercase font-montserrat font-bold text-[0.6rem] tracking-[0.15em] leading-[1.05]">
            Web | 3D
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CarouselCard;
