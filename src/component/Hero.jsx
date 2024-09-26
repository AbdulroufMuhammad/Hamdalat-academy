import React from "react";
import Slidder from "./Slidder";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="w-full  overflow-x-hidden">
      {" "}
      <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-montserrat text-2xl px-3 text-center md:text-3xl w-full"
          >
            <span className="text-green-600">
              HAMDALAT TECHNICAL TRAINING SCHOOL
            </span>
          </motion.h3>
          <motion.p
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-center font-montserrat text-lg py-4"
          > (where Technology and Business meet)</motion.p>
      <Slidder />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="my-10 mx-4 md:mx-0 w-full">
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-light  text-center w-[100%]"
          >
            Emerging Dynamic Graduates For Excellence{" "}
            <span className="text-green-600 text-lg">(E.D.G.E)</span>.{" "}
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="border bg-green-600 gap-3 rounded-md h-10 my-6 text-white w-36 flex items-center justify-center md:w-40"
            >
              <a href="https://wa.link/8qcxn4">Enroll now</a>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white"
                size="md"
              />
            </motion.button>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
