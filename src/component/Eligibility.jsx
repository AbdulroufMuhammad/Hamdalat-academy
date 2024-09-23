import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsers, faMapMarkerAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const EligibilityComponent = () => {
  return (
    <motion.div
      className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Eligibility & Details</h2>
      
      <div className="space-y-4">
        {/* Eligibility */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FontAwesomeIcon icon={faUserGraduate} className="text-2xl mr-3 text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Eligibility:</h3>
            <p className="text-gray-600">O'Level, Graduates & Undergraduates</p>
          </div>
        </motion.div>
        
        {/* Slots */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FontAwesomeIcon icon={faUsers} className="text-2xl mr-3 text-green-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Slots:</h3>
            <p className="text-gray-600">30 participants</p>
          </div>
        </motion.div>
        
        {/* Venue */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl mr-3 text-red-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Venue:</h3>
            <p className="text-gray-600">Hamdalat International School, Atari Layout</p>
          </div>
        </motion.div>
        
        {/* Bonus */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faCertificate} className="text-2xl mr-3 text-purple-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Bonus:</h3>
            <p className="text-gray-600">Free E-Learning Materials & Certification</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EligibilityComponent;
