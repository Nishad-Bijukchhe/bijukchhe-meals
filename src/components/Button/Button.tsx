"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const Button = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <motion.button
        animate={{
          rotate: isHovering ? [0, 0] : [0, 360],
          transition: { duration: 20, repeat: Infinity, repeatType: "loop" },
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="rounded border-gray-200 border p-4 bg-red-600 text-gray-200 hover:bg-red-500 shadow-2xl shadow-red-300 hover:shadow-red-400"
      >
        Order Now
      </motion.button>
    </>
  );
};

export default Button;
