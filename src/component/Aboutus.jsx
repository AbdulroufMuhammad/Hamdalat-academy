import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import pic1 from "../assets/pic1.jpg"; // Ensure this path is correct
import { WhatWeOffer, whyChooseHamdalat } from "."; // Ensure these are correctly imported

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <h2 className="text-center text-green-600 text-4xl font-bold">
        About Us
        <hr className="w-auto border-black rounded-md border-4 mt-2" />
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-4xl font-bold text-green-600 font-montserrat text-center md:text-left my-4">
              Unlock Your Full Potential at Hamdalat Technical School
            </h3>
            <p className="text-lg leading-relaxed max-md:text-center">
              At Hamdalat Technical Training School, we are dedicated to helping
              you acquire the in-demand skills you need to excel in today's
              fast-paced and evolving world...
            </p>
            <h3 className="text-4xl font-bold text-green-600 font-montserrat text-center md:text-left my-4">
              The Mission and Vision
            </h3>
            <p className="text-lg leading-relaxed max-md:text-center">
              Our mission is to foster a learning environment...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src={pic1}
              alt="Hamdalat Technical School"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl text-green-600 font-semibold mb-6">
            What We Offer:
            <hr className="w-32 mx-auto border-black rounded-md border-4 mt-2" />
          </h3>
          <div className="space-y-8">
            {WhatWeOffer.map((what, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-2xl text-green-600"
                />
                <div>
                  <h4 className="font-semibold text-green-600 text-lg">
                    {what.head}
                  </h4>
                  <p className="text-base leading-relaxed">{what.word}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-semibold text-green-600 mb-6">
            Why Choose Hamdalat?
            <hr className="w-64 mx-auto border-black rounded-md border-4 mt-2" />
          </h3>
          <div className="space-y-8">
            {whyChooseHamdalat.map((why, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-2xl text-green-500"
                />
                <div>
                  <h4 className="font-semibold text-green-600 text-lg">
                    {why.head}
                  </h4>
                  <p className="text-base leading-relaxed">{why.word}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg leading-relaxed">
            At Hamdalat Technical Training School, we believe in creating...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
