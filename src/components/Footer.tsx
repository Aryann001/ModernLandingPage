import React, { useEffect, useRef, useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";

const Footer = () => {
  const upperArrowControl = useAnimationControls();
  const lowerArrowControl = useAnimationControls();

  const socialHoverControl1 = useAnimationControls();
  const socialHoverControl2 = useAnimationControls();
  const socialHoverControl3 = useAnimationControls();
  const socialHoverControl4 = useAnimationControls();

  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const xt = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const parallaxDiv = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const hoverStartHandler = async () => {
    upperArrowControl.start(
      {
        translateX: "100%",
        opacity: 0,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );

    await lowerArrowControl.start(
      {
        translateX: "0%",
        opacity: 1,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const hoverEndHandler = () => {
    upperArrowControl.set({
      translateX: "0%",
      opacity: 1,
    });

    lowerArrowControl.set({
      translateX: "-100%",
      opacity: 0,
    });
  };

  const socialHoverStart1 = () => {
    socialHoverControl1.start(
      {
        scale: 2,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverEnd1 = () => {
    socialHoverControl1.start(
      {
        scale: 0,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverStart2 = () => {
    socialHoverControl2.start(
      {
        scale: 2,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverEnd2 = () => {
    socialHoverControl2.start(
      {
        scale: 0,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverStart3 = () => {
    socialHoverControl3.start(
      {
        scale: 2,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverEnd3 = () => {
    socialHoverControl3.start(
      {
        scale: 0,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverStart4 = () => {
    socialHoverControl4.start(
      {
        scale: 2,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  const socialHoverEnd4 = () => {
    socialHoverControl4.start(
      {
        scale: 0,
      },
      { type: "tween", duration: 0.5, ease: "easeInOut" }
    );
  };

  return (
    <footer
      ref={footerRef}
      className=" w-screen max-w-full overflow-hidden grid place-items-center"
    >
      <motion.div
        style={{ borderTopLeftRadius: xt, borderTopRightRadius: xt }}
        className=" w-[200%] xl:h-[95vh] sm:h-[55vh] h-[95vh] transition-all ease-in-out bg-purple-500 flex flex-col justify-center items-center box-border"
      >
        <div className="w-[50%] h-full flex flex-col justify-between box-border">
          <motion.div
            style={{ translateY: parallaxDiv }}
            className="grid sm:grid-cols-2 sm:p-0 pt-[5rem] grid-cols-1 sm:h-3/4 h-[55%] place-items-center"
          >
            <div className="flex sm:w-1/2 w-3/4 sm:justify-center items-center justify-start">
              <div>
                <p className=" font-montserrat uppercase font-semibold tracking-[0.08em] text-[0.6rem]">
                  Stay up to date
                </p>
                <h2 className="font-paytone font-extrabold xl:text-7xl text-5xl leading-[0.8em] tracking-tighter text-zinc-900">
                  get our
                  <br />
                  newsletter
                </h2>
                <form className="flex gap-[1rem] sm:mt-[3rem] mt-[1.5rem] w-full">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className=" placeholder:text-white bg-transparent text-white border-b-2 border-purple-900 outline-none w-full px-[1rem] font-semibold"
                  />
                  <motion.button
                    onHoverStart={hoverStartHandler}
                    onHoverEnd={hoverEndHandler}
                    type="submit"
                    className="relative flex items-center justify-center p-[1rem] text-lg rounded-full bg-white text-purple-500 transition-all duration-500 ease-in-out hover:bg-yellow-300"
                  >
                    <motion.span animate={upperArrowControl}>
                      <FaArrowRightLong />
                    </motion.span>
                    <motion.span
                      animate={lowerArrowControl}
                      className="absolute opacity-0 translate-x-[-100%]"
                    >
                      <FaArrowRightLong />
                    </motion.span>
                  </motion.button>
                </form>
              </div>
            </div>
            {/*  */}
            <div className="flex sm:w-1/2 w-3/4 sm:justify-center sm:mt-[0] mt-[2rem] items-center justify-start">
              <div>
                <p className=" font-montserrat uppercase font-semibold tracking-[0.08em] text-[0.6rem]">
                  Get in touch
                </p>
                <h2 className="font-paytone flex flex-col font-medium xl:text-5xl sm:text-3xl text-2xl mt-[1rem] leading-[1.2em] tracking-tight text-zinc-900">
                  <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
                  <a href="tel:78888999">{`+(91)78889xxx`}</a>
                </h2>
                <p className=" font-paytone text-zinc-900/70 font-semibold mt-[1.5rem] sm:text-base text-2xl leading-[1.2em] tracking-tighter">
                  Stapelplein 70/303 <br />
                  9000 Ghent
                </p>
              </div>
            </div>
          </motion.div>
          {/*  */}
          <motion.div
            style={{ translateY: parallaxDiv }}
            className="flex sm:flex-row flex-col sm:gap-0 gap-[3.5rem] justify-between mx-[3rem] py-[3rem] border-t-2 border-blue-950/15"
          >
            <div className="flex sm:w-3/4 sm:gap-0 gap-[3.5rem] sm:flex-row flex-col-reverse justify-between">
              <div className="flex xl:gap-[1rem] sm:gap-[0.5rem] gap-[1rem] font-montserrat uppercase font-semibold tracking-[0.25em] xl:text-[0.55rem] sm:text-[0.35rem] text-[0.75rem] items-center justify-center sm:flex-nowrap flex-wrap text-blue-950">
                <p>Privacy Policy</p>
                <p>Disclaimer</p>
                <p>Terms and conditions</p>
                <p>RE0810 006 725</p>
              </div>
              {/*  */}
              <div className="flex xl:gap-[1.5rem] sm:flex-row flex-col gap-[0.75rem] font-montserrat uppercase font-semibold tracking-[0.25em] xl:text-[0.55rem] sm:text-[0.35rem] text-[0.75rem] items-center justify-center">
                <div className="text-blue-950">see what we&apos;re up to</div>
                {/*  */}
                <div className="flex xl:gap-[1.25rem] sm:gap-[0.675rem] gap-[2rem] text-2xl sm:text-lg items-center justify-center">
                  <motion.div
                    onHoverStart={socialHoverStart1}
                    onHoverEnd={socialHoverEnd1}
                    className=" relative flex items-center justify-center hover:text-black transition-all duration-500 ease-in-out"
                  >
                    <RiFacebookFill />
                    <motion.div
                      animate={socialHoverControl1}
                      className=" absolute bg-yellow-500 rounded-full inset-0 scale-[0] -z-[1]"
                    ></motion.div>
                  </motion.div>
                  <motion.div
                    onHoverStart={socialHoverStart2}
                    onHoverEnd={socialHoverEnd2}
                    className=" relative flex items-center justify-center hover:text-black transition-all duration-500 ease-in-out"
                  >
                    <FaLinkedinIn />
                    <motion.div
                      animate={socialHoverControl2}
                      className=" absolute bg-yellow-500 rounded-full inset-0 scale-[0] -z-[1]"
                    ></motion.div>
                  </motion.div>
                  <motion.div
                    onHoverStart={socialHoverStart3}
                    onHoverEnd={socialHoverEnd3}
                    className=" relative flex items-center justify-center hover:text-black transition-all duration-500 ease-in-out"
                  >
                    <FaInstagram />
                    <motion.div
                      animate={socialHoverControl3}
                      className=" absolute bg-yellow-500 rounded-full inset-0 scale-[0] -z-[1]"
                    ></motion.div>
                  </motion.div>
                  <motion.div
                    onHoverStart={socialHoverStart4}
                    onHoverEnd={socialHoverEnd4}
                    className=" relative flex items-center justify-center hover:text-black transition-all duration-500 ease-in-out"
                  >
                    <FaYoutube />
                    <motion.div
                      animate={socialHoverControl4}
                      className=" absolute bg-yellow-500 rounded-full inset-0 scale-[0] -z-[1]"
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex xl:gap-[1rem] gap-[0.5rem] font-montserrat uppercase font-semibold tracking-[0.25em] xl:text-[0.55rem] sm:text-[0.35rem] text-[0.75rem] items-center justify-center">
              <p className="text-purple-950">India</p>
              <p className="text-blue-950">English</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
