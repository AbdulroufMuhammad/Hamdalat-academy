import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 

const CButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      
      document.body.style.overflow = 'hidden';
    } else {
     
      document.body.style.overflow = 'auto';
    }

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleCard}
        className="fixed bottom-10 right-10 inline-flex items-center bg-green-600 px-4 py-4 text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full z-20"
      >
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
      </button>
 
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
          onClick={toggleCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-w-sm rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <h2 className="mb-2 text-xl text-center font-semibold text-gray-800">
              Contact Information
            </h2>
            <p className="mb-4 text-gray-600 text-center">For more Enquiry Contact:</p>
            <div className="flex gap-6 text-center justify-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -180,
                  borderRadius: "100%",
                }}
                className="rounded-full"
              >
                <a href="mailto:hamdalattechnicalschool@gmail.com" className="text-gray-600">
                  <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -180,
                  borderRadius: "100%",
                }}
                className="rounded-full"
              >
                <a href="https://wa.link/1plt8n" target="_blank" rel="noopener noreferrer" className="text-gray-600">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -180,
                  borderRadius: "100%",
                }}
                className="rounded-full text-gray-600"
              >
                <a href="tel:+2348077838698">
                  <FontAwesomeIcon icon={faPhone} size="2x"/>
                </a>
              </motion.div>
            </div>
            <p className="font-palanquin text-center text-gr">Acquire a Skill Now to Gain the Edge that sets you Apart.</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CButton;
