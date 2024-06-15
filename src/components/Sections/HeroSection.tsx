import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import useMouseLocation from "../useMouseLocation";
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  const { x, y } = useMouseLocation();

  const controls = useAnimationControls();
  const controlsForHideOne = useAnimationControls();

  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);

  const hoverStartHandler = async () => {
    controls.start(
      {
        scale: 3,
      },
      { duration: 0.5, ease: "easeInOut" }
    );
    controlsForHideOne.start(
      {
        scale: 3,
      },
      { duration: 0.5, ease: "easeInOut" }
    );
    await controls.start(
      {
        translateY: "150%",
        opacity: 0,
      },
      { duration: 0.15, ease: "easeInOut" }
    );
    await controlsForHideOne.start(
      {
        translateY: "0%",
        opacity: 1,
      },
      { duration: 0.15, ease: "easeInOut" }
    );
  };

  const hoverEndHandler = async () => {
    await controlsForHideOne.start(
      {
        scale: 1,
      },
      { duration: 0.25, ease: "easeInOut" }
    );
    await controls.start(
      {
        scale: 1,
      },
      { duration: 0.25, ease: "easeInOut" }
    );

    controlsForHideOne.set(
      {
        translateY: "-150%",
        opacity: 0,
      },
      // { duration: 0.0125, ease: "easeInOut" }
    );
    controls.set(
      {
        translateY: "0%",
        opacity: 1,
      },
      // { duration: 0.0125, ease: "easeInOut" }
    );
  };

  useEffect(() => {
    setMiddleX(window.innerWidth / 2);
    setMiddleY(window.innerHeight / 2);
  }, []);

  return (
    <section className=" cursor-default h-screen w-full bg-zinc-900 flex items-start justify-center">
      <div className="h-full w-10/12 relative flex items-center justify-center translate-y-[5%]">
        <motion.div
          animate={{
            rotateX: `${-((y - middleY) / middleY) * 22.5}deg`,
            rotateY: `${((x - middleX) / middleX) * 20}deg`,
            rotateZ: `${
              -((x + y - (middleX + middleY)) / (middleX + middleY)) * 2.5
            }deg`,
            perspective: `${15000}px`,
          }}
          transition={{ type: "just", duration: 0.5, ease: "linear" }}
          className="flex overflow-hidden shadow-2xl items-center justify-center relative w-10/12 h-1/2 xl:w-[50%] xl:h-[77%] rounded-[2em]"
        >
          <video
            className=" object-cover h-full w-full"
            src="/heroVideo.mp4"
            muted
            loop
            autoPlay
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </motion.div>
        {/*  */}
        <div className="absolute">
          <h1 className=" translate-x-[5%] leading-[0.8em] tracking-[-0.07em] text-6xl lg:text-9xl font-extrabold text-white font-inclusive">
            conversion
          </h1>
          <h1 className="translate-x-[-5%] leading-[0.8em] flex items-center justify-center gap-[5rem] tracking-[-0.07em] text-6xl lg:text-9xl font-extrabold text-white font-inclusive">
            through{" "}
            <span className="flex items-center justify-center">
              <Link
                href="/"
                className="text-black tracking-normal font-medium bg-yellow-300 rounded-full text-base cursor-pointer px-8 py-4"
              >
                Discover what we do
              </Link>
            </span>
          </h1>
          <h1 className="translate-x-[15%] leading-[0.8em] tracking-[-0.07em] text-6xl lg:text-9xl font-extrabold text-white font-inclusive">
            immersion
          </h1>
        </div>
        {/*  */}
        <div className="absolute xl:bottom-[-25%] bottom-[-5%] -left-[15%] z-[5]">
          <AnimatePresence>
            <motion.div
              onHoverStart={hoverStartHandler}
              onHoverEnd={hoverEndHandler}
              className=" box-border flex flex-col items-center justify-center overflow-hidden rounded-full p-32 cursor-pointer bg-transparent border-purple-500 border-[2px] transition-all duration-[0.5s] ease-in-out hover:scale-[0.25] hover:bg-purple-500"
            >
              <motion.span
                animate={controlsForHideOne}
                className=" absolute -translate-y-[150%] opacity-0 flex items-center justify-center"
              >
                <FaArrowDownLong className=" text-white text-4xl" />
              </motion.span>
              <motion.span
                animate={controls}
                className=" flex items-center justify-center"
              >
                <FaArrowDownLong className=" text-white text-4xl" />
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
