import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const packages = [
  {
    title: "Basic Plan",
    duration: "4 months",
    fee: "#45,000",
    features: [
      "Introductory Training",
      "Basic Tools and Materials",
      "Access to Online Resources",
    ],
    icon: faCalendarDays,
  },
  {
    title: "Premium Plan",
    duration: "6 months",
    fee: "#60,000",
    features: [
      "Advanced Training",
      "Intermediate Tools and Materials",
      "Extended Online Resources",
      "Guest Lectures",
    ],
    icon: faDollarSign,
  },
  {
    title: "Professional Plan",
    duration: "1 year",
    fee: "#100,000",
    features: [
      "Comprehensive Training",
      "Professional Tools and Materials",
      "Full Access to Online Resources",
      "Certification upon Completion",
      "Exclusive Workshops",
    ],
    icon: faCheckCircle,
  }
];

export function PackageCard({ title, duration, fee, features, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto"
    >
      <Card className='p-6 shadow-xl rounded-lg bg-white dark:bg-gray-800'>
        <div className="flex items-center space-x-3 mb-4">
          <FontAwesomeIcon icon={icon} className="text-3xl text-green-600" />
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
        </div>
        <div className="flex items-baseline text-gray-900 dark:text-white mb-4">
          <span className="text-3xl font-semibold">{fee}</span>
          <span className="ml-2 text-xl font-normal text-gray-500 dark:text-gray-400">{`/${duration}`}</span>
        </div>
        <ul className="my-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
              <span className="text-base font-normal text-gray-500 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-full py-2.5 px-5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
        >
          <a href="http://wa.link/1plt8n">Choose Plan</a>
        </button>
      </Card>
    </motion.div>
  );
}

export function Packages() {
  return (
    <div className="flex justify-around flex-wrap gap-10 py-10">
      {packages.map((pkg, index) => (
        <PackageCard
          key={index}
          title={pkg.title}
          duration={pkg.duration}
          fee={pkg.fee}
          features={pkg.features}
          icon={pkg.icon}
        />
      ))}
    </div>
  );
}
