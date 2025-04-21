import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

const MetricCard = ({ title, value, change, icon: Icon }) => {
  const isPositive = change >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="p-3 bg-primary-50 rounded-lg">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
          )}
          <h3 className="text-gray-500 text-sm">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold">{value}</p>
          <span className={`ml-2 text-sm flex items-center ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? <RiArrowUpLine /> : <RiArrowDownLine />}
            {Math.abs(change)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;