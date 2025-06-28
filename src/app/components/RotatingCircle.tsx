'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const RotatingCircle = () => {
  const text = "CONTACT • CONTACT • CONTACT • ";
  const characters = text.split('');

  return (
    <Link href="/contact">
      <motion.div 
        className="fixed bottom-6 right-6 z-40 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Rotating text circle */}
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {characters.map((char, index) => (
              <span
                key={index}
                className="absolute text-[10px] font-bold text-gray-600"
                style={{
                  transform: `rotate(${(index * 360) / characters.length}deg) translateY(-56px)`,
                  transformOrigin: 'center',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-2px',
                  marginTop: '-6px',
                }}
              >
                {char}
              </span>
            ))}
          </motion.div>
          
          {/* Center circle with Apple emoji */}
          <motion.div 
            className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">👋</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default RotatingCircle;