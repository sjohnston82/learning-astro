import React, { useState } from "react";
import Avatar from "/steve.webp";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { navMotion, itemMotion } from "../../utils/variants";

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <nav className="relative  mb-24 flex  justify-between items-center pt-12 pb-6 mx-8 font-medium md:mx-16 lg:mx-32">
      <div className="">
        <img src={Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
      </div>
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-lg font-bold">
        <a href="/" className="">
          Steve
        </a>
      </h1>

      {!matches && (
        <div className="flex gap-12">
          <a href="/" className="">
            Home
          </a>
          <a href="/services" className="">
            Services
          </a>
          <a href="/contact" className="">
            Contact
          </a>
        </div>
      )}

      {matches && (
        <div
          className="space-y-1 cursor-pointer z-50"
          onClick={() => setToggled((prev) => !prev)}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ opacity: toggled ? 0 : 1 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -4 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && matches && (
        <div className="fixed flex  bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-16 text-lg"
          >
            <motion.a variants={itemMotion} href="/" className="">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/services" className="">
              Services
            </motion.a>
            <motion.a variants={itemMotion} href="/contact" className="">
              Contact
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
