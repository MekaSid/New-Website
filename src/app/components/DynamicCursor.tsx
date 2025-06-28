'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DynamicCursor = ({ scaling = false }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: largeCircle.x - 32,
          y: largeCircle.y - 32,
        }}
        transition={{ type: "spring", mass: 3, stiffness: 100, damping: 20 }}
        className="fixed z-[9999] w-16 h-16 rounded-full border-2 border-blue-500 bg-blue-500/20 pointer-events-none"
        style={{ scale: scaling ? 0.1 : 1 }}
      />
      <motion.div
        animate={{
          x: smallCircle.x - 8,
          y: smallCircle.y - 8,
        }}
        transition={{ type: "spring", mass: 2, stiffness: 200, damping: 15 }}
        className="fixed z-[9999] w-4 h-4 rounded-full bg-red-500 pointer-events-none shadow-lg"
      />
    </>
  );
};

export default DynamicCursor; 