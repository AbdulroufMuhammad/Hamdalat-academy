import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.jpeg";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const CustomFooter = () => {
  return (
    <FlowbiteFooter container className="dark:bg-green-500">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <FlowbiteFooter.Brand
              href="/"
              src={logo}
              alt="Flowbite Logo"
              name="Hamdalat Academy"
              className=" scroll-smooth"
              

            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="Contact us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="hamdalattechnicalschool@gmail.com ">
                  Gmail
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="https://wa.link/1plt8n">
                  Whatsapp
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Terms &amp; Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="https://framerport-xkpa.vercel.app/"
            by="MindMesh™"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
              className="rounded-full"
            >
              <a
                href="https://x.com/HIT_____MAN"
                className="text-gray-500 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
              className="rounded-full"
            >
              <a
                href="https://github.com/AbdulroufMuhammad"
                className="text-gray-500 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
              className="rounded-full"
            >
              <a
                href="mailto:abdulraufmuhammad28@gmail.com"
                className="text-gray-500 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
              className="rounded-full"
            >
              <a
                href="https://www.linkedin.com/in/abdulrauf-muhammad-6a2641255/"
                className="text-gray-500 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
              className="rounded-full"
            >
              <a
                href="tel:+2348143754658"
                className="text-gray-500 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default CustomFooter;
