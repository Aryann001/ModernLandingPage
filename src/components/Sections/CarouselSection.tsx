"use client";
import useMeasure from "react-use-measure";
import CarouselCard from "../CarouselCard";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import useMouseLocation from "../useMouseLocation";
import { useRef } from "react";

const cards = [{}, {}, {}, {}, {}];

const CarouselSection = () => {
  const [ref, measure] = useMeasure();
  const [refParent, measureParent] = useMeasure();
  const upperControls = useAnimationControls();
  const lowerControls = useAnimationControls();

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);

  const { x, y } = useMouseLocation();

  const { scrollYProgress } = useScroll();

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

  const scrollX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section className=" min-h-screen w-full bg-zinc-900 flex items-start justify-center pt-[16rem] pb-[10rem]">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="flex w-max gap-[5rem] cursor-default translate-x-[8%] justify-center ">
          <h3 className=" font-inclusive font-bold uppercase text-xs tracking-wider text-purple-500">
            Selected work
          </h3>
          {/*  */}
          <p className="font-inclusive font-medium xl:text-4xl text-2xl text-yellow-50 tracking-tight leading-tight">
            Enjoy some of our best work
            <br />
            in immersive <span className=" text-purple-500">web</span>,<br />{" "}
            <span className=" text-cyan-300">augmented reality</span> and{" "}
            <span className=" text-yellow-400">virtual</span>
            <br />
            <span className=" text-yellow-400">reality</span> experiences
          </p>
        </div>
        {/*  */}
        <div
          ref={refParent}
          className="w-full relative overflow-hidden flex py-[8rem]"
        >
          <div ref={inViewRef} className="w-full rotate-[5deg] flex items-center justify-center">
            <motion.div
              drag="x"
              dragConstraints={{
                left: -(measure.width - measureParent.width) / 2,
                right: (measure.width - measureParent.width) / 2,
              }}
              style={{ translateX: scrollX }}
              ref={ref}
              className="flex w-max flex-row translate-x-[-50%] items-center justify-center flex-nowrap gap-[2.5rem]"
            >
              {Array.from({ length: 100 }, (_, index) => (
                <CarouselCard key={index} />
              ))}
            </motion.div>
          </div>
          {/*  */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: `${x - 100}px`,
              y: `${y - 200}px`,
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0,
            }}
            transition={{ type: "just", duration: 2, ease: "backOut" }}
            className="absolute text-white pointer-events-none text-center font-inclusive cursor-default font-bold tracking-tighter bg-purple-500 rounded-full p-[2rem]"
          >
            Drag
            <br />
            or click
          </motion.div>
        </div>
        {/*  */}
        <div className=" w-4/5 -translate-y-[50%] flex items-center justify-start">
          <Link href="/">
            <motion.div
              onHoverStart={hoverStartHandler}
              onHoverEnd={hoverEndHandler}
              className="relative px-8 py-3 flex flex-col rounded-full border-purple-500 border-2 text-lg font-inclusive tracking-tighter overflow-hidden cursor-pointer"
            >
              <motion.span
                animate={upperControls}
                className="absolute translate-y-[100%] opacity-0 cursor-pointer"
              >
                Discover more of our work
              </motion.span>
              <motion.span animate={lowerControls} className=" cursor-pointer">
                Discover more of our work
              </motion.span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
