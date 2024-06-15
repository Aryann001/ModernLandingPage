import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className=" z-10 fixed bg-transparent w-full">
      <div className=" px-10 py-7 flex flex-row justify-between items-center">
        <div>
          <Link href="/" className="text-4xl text-purple-500 font-extrabold tracking-tighter">
            <span>A</span>
            <span>r</span>
            <span>y</span>
            <span>a</span>
            <span>n</span>
          </Link>
        </div>
        {/*  */}
        <div className=" flex flex-row gap-3 items-center justify-center">
          <Link href="/" className="px-8 py-3 rounded-full border-purple-500 border-2 text-lg font-inclusive tracking-tighter">Get in touch</Link>
          <div>
            <button className="p-4 rounded-full bg-purple-500">
              <RxHamburgerMenu className=" text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
