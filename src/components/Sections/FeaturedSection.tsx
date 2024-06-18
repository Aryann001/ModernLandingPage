import Link from "next/link";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import useMouseLocation from "../useMouseLocation";

const cards = [{}, {}, {}, {}];

const FeaturedSection = () => {
  const upperControls = useAnimationControls();
  const lowerControls = useAnimationControls();
  const cardHoverControls1 = useAnimationControls();
  const cardHoverControls2 = useAnimationControls();
  const cardHoverControls3 = useAnimationControls();
  const cardHoverControls4 = useAnimationControls();

  const { x, y } = useMouseLocation();

  const hoverStartHandler = async () => {
    await lowerControls.start(
      {
        opacity: 0,
        translateY: "-100%",
      },
      { type: "tween", duration: 0.15, ease: "easeInOut" }
    );
    await upperControls.start(
      {
        opacity: 1,
        translateY: "0%",
      },
      { type: "tween", duration: 0.15, ease: "easeInOut" }
    );
  };

  const hoverEndHandler = async () => {
    upperControls.set(
      {
        opacity: 0,
        translateY: "100%",
      }
      // { duration: 0.0125, ease: "easeInOut" }
    );
    lowerControls.set(
      {
        opacity: 1,
        translateY: "0%",
      }
      // { duration: 0.0125, ease: "easeInOut" }
    );
  };

  const cardHoverStartHandler1 = () => {
    cardHoverControls1.start({
      opacity: 0.8,
      x: `${(400-x)/2}px`,
      y: `${(400-y)/2}px`,
      rotate: `${(x - y) / 10}deg`,
    });
  };

  const cardHoverEndHandler1 = () => {
    cardHoverControls1.start({
      opacity: 0,
      x: `${(x-400)/2}px`,
      y: `${(y-400)/2}px`,
      rotate: `${(x - y) / 10}deg`,
    });
  };

  const cardHoverStartHandler2 = () => {
    cardHoverControls2.start({
      opacity: 0.8,
      x: `${(400-x)/4}px`,
      y: `${(400-y)/4}px`,
      rotate: `${(x - y) / 20}deg`,
    });
  };

  const cardHoverEndHandler2 = () => {
    cardHoverControls2.start({
      opacity: 0,
      x: `${(x-400)/4}px`,
      y: `${(y-400)/4}px`,
      rotate: `${(x - y) / 20}deg`,
    });
  };

  const cardHoverStartHandler3 = () => {
    cardHoverControls3.start({
      opacity: 0.8,
      x: `${(400-x)/2}px`,
      y: `${(400-y)/2}px`,
      rotate: `${(x - y) / 10}deg`,
    });
  };

  const cardHoverEndHandler3 = () => {
    cardHoverControls3.start({
      opacity: 0,
      x: `${(x-400)/2}px`,
      y: `${(y-400)/2}px`,
      rotate: `${(x - y) / 10}deg`,
    });
  };

  const cardHoverStartHandler4 = () => {
    cardHoverControls4.start({
      opacity: 0.8,
      x: `${(400-x)/4}px`,
      y: `${(400-y)/4}px`,
      rotate: `${(x - y) / 20}deg`,
    });
  };

  const cardHoverEndHandler4 = () => {
    cardHoverControls4.start({
      opacity: 0,
      x: `${(x-400)/4}px`,
      y: `${(y-400)/4}px`,
      rotate: `${(x - y) / 20}deg`,
    });
  };


  return (
    <section className="flex w-full overflow-hidden items-center justify-center flex-col gap-[6rem] md:py-[4rem] py-[2rem]">
      <div>
        <h2 className=" font-montserrat tracking-tight font-semibold text-white uppercase text-xs">
          Featured Insights
        </h2>
      </div>
      {/*  */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-[1rem] md:gap-y-[12rem] gap-y-[6rem] box-border md:px-[4rem]">
        <motion.div
          onHoverStart={cardHoverStartHandler1}
          onHoverEnd={cardHoverEndHandler1}
          className="flex relative w-full items-center justify-center"
        >
          <div className=" w-4/5 flex flex-col gap-[2rem]">
            <p className=" text-xs font-semibold text-green-500 font-montserrat">
              3D
            </p>
            <h1 className=" md:text-4xl text-2xl tracking-tighter text-wrap font-inclusive">
              Unleashing immersive experience: elevating your brand with custom
              3D modelling
            </h1>
            <p className="w-max text-base font-inclusive tracking-tighter font-semibold border-b-2 border-green-500">
              Continue reading
            </p>
          </div>
          <motion.div
            animate={cardHoverControls1}
            transition={{ type: "just", duration: 2, ease: "backOut" }}
            className="absolute w-1/4 h-4/5 opacity-0 -z-[1] rounded-[10%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/carouselImage1.jpg"
              alt="image"
            />
          </motion.div>
        </motion.div>
        {/*  */}
        <motion.div
          onHoverStart={cardHoverStartHandler2}
          onHoverEnd={cardHoverEndHandler2}
          className="flex relative w-full items-center justify-center"
        >
          <div className=" w-4/5 flex flex-col gap-[2rem]">
            <p className=" text-xs font-semibold text-yellow-500 font-montserrat">
              3D
            </p>
            <h1 className=" md:text-4xl text-2xl tracking-tighter text-wrap font-inclusive">
              Unleashing immersive experience: elevating your brand with custom
              3D modelling
            </h1>
            <p className="w-max text-base font-inclusive tracking-tighter font-semibold border-b-2 border-yellow-500">
              Continue reading
            </p>
          </div>
          <motion.div
            animate={cardHoverControls2}
            transition={{ type: "just", duration: 2, ease: "backOut" }}
            className="absolute w-1/4 h-4/5 opacity-0 -z-[1] rounded-[10%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/carouselImage1.jpg"
              alt="image"
            />
          </motion.div>
        </motion.div>
        {/*  */}
        <motion.div
          onHoverStart={cardHoverStartHandler3}
          onHoverEnd={cardHoverEndHandler3}
          className="flex relative w-full items-center justify-center"
        >
          <div className=" w-4/5 flex flex-col gap-[2rem]">
            <p className=" text-xs font-semibold text-purple-500 font-montserrat">
              3D
            </p>
            <h1 className=" md:text-4xl text-2xl tracking-tighter text-wrap font-inclusive">
              Unleashing immersive experience: elevating your brand with custom
              3D modelling
            </h1>
            <p className="w-max text-base font-inclusive tracking-tighter font-semibold border-b-2 border-purple-500">
              Continue reading
            </p>
          </div>
          <motion.div
            animate={cardHoverControls3}
            transition={{ type: "just", duration: 2, ease: "backOut" }}
            className="absolute w-1/4 h-4/5 opacity-0 -z-[1] rounded-[10%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/carouselImage1.jpg"
              alt="image"
            />
          </motion.div>
        </motion.div>
        {/*  */}
        <motion.div
          onHoverStart={cardHoverStartHandler4}
          onHoverEnd={cardHoverEndHandler4}
          className="flex relative w-full items-center justify-center"
        >
          <div className=" w-4/5 flex flex-col gap-[2rem]">
            <p className=" text-xs font-semibold text-green-500 font-montserrat">
              3D
            </p>
            <h1 className=" md:text-4xl text-2xl tracking-tighter text-wrap font-inclusive">
              Unleashing immersive experience: elevating your brand with custom
              3D modelling
            </h1>
            <p className="w-max text-base font-inclusive tracking-tighter font-semibold border-b-2 border-green-500">
              Continue reading
            </p>
          </div>
          <motion.div
            animate={cardHoverControls4}
            transition={{ type: "just", duration: 2, ease: "backOut" }}
            className="absolute w-1/4 h-4/5 opacity-0 -z-[1] rounded-[10%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/assets/carouselImage1.jpg"
              alt="image"
            />
          </motion.div>
        </motion.div>
      </div>
      {/*  */}
      <div>
        <Link href="/">
          <motion.div
            onHoverStart={hoverStartHandler}
            onHoverEnd={hoverEndHandler}
            className="relative sm:px-8 sm:py-3 px-4 py-2 flex flex-col rounded-full border-purple-500 border-2 sm:text-lg text-base font-inclusive tracking-tighter overflow-hidden cursor-pointer"
          >
            <motion.span
              animate={upperControls}
              className="absolute translate-y-[100%] opacity-0 cursor-pointer"
            >
              Discover more insights
            </motion.span>
            <motion.span animate={lowerControls} className=" cursor-pointer">
              Discover more insights
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedSection;
