"use client";
import React, { useEffect } from "react";
import useMouseLocation from "@/components/useMouseLocation";
import { motion, useAnimate } from "framer-motion";

const MouseFollowingLight = () => {
  const { x, y } = useMouseLocation();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    async function Animate() {
      await animate(
        scope.current,
        { rotate: "360deg" },
        {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }
      );
    }

    Animate();
  }, []);

  return (
    <motion.div
      ref={scope}
      animate={{
        x: `${x - 300}px`,
        y: `${y - 300}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 2 }}
      className="z-1 pointer-events-none fixed p-72 rounded-full opacity-30 bg-gradient-to-b from-yellow-200 via-slate-200 to-purple-400 blur-[100px]"
    ></motion.div>
  );
};

export default MouseFollowingLight;
