import Link from "next/link";
import React from "react";

const GetInTouchSection = () => {
  return (
    <section className="flex items-center justify-center w-full xl:h-screen h-[50vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-montserrat font-extrabold xl:text-9xl sm:text-7xl text-4xl leading-[0.075em] tracking-[-0.07em]">Let&apos;s make</h1>
        <br />{" "}
        <h1 className="font-montserrat font-extrabold xl:text-9xl sm:text-7xl text-4xl flex flex-row sm:gap-[4rem] gap-[1rem] items-center justify-center leading-[0.075em] tracking-[-0.07em]">
          <span>great work</span>
          <span className="flex items-center justify-center">
            <Link
              href="/"
              className="text-black tracking-tighter font-semibold bg-yellow-300 rounded-full text-base cursor-pointer px-8 py-4"
            >
              Get in touch
            </Link>
          </span>
        </h1>
        <br />
        <h1 className="font-montserrat font-extrabold xl:text-9xl sm:text-7xl text-4xl translate-x-[15%] leading-[0.075em] tracking-[-0.07em]">together</h1>
      </div>
    </section>
  );
};

export default GetInTouchSection;
