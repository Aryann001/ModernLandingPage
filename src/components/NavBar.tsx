import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className=" z-10 fixed bg-transparent w-full">
      <div className=" md:px-10 md:py-7 px-5 py-4 flex flex-row justify-between items-center">
        <div>
          <Link href="/" className="md:text-4xl text-2xl text-purple-500 font-extrabold tracking-tighter">
            <span>A</span>
            <span>r</span>
            <span>y</span>
            <span>a</span>
            <span>n</span>
          </Link>
        </div>
        {/*  */}
        <div className=" flex flex-row gap-3 items-center justify-center">
          <Link href="/" className="md:px-8 md:py-3 px-4 py-2 rounded-full border-purple-500 border-2 text-sm md:text-lg font-inclusive tracking-tighter">Get in touch</Link>
          <div>
            <button className="md:p-4 p-2 rounded-full bg-purple-500">
              <RxHamburgerMenu className=" text-white md:text-xl text-base" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
