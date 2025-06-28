'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Timeline() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Timeline Section */}
      <motion.section 
        className="pt-20 pb-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {/* Timeline items */}
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  year: "2023",
                  title: "Senior Developer",
                  company: "Tech Corp",
                  description: "Led development of enterprise applications and mentored junior developers."
                },
                {
                  year: "2021",
                  title: "Full Stack Developer",
                  company: "Startup Inc",
                  description: "Built scalable web applications using modern technologies and best practices."
                },
                {
                  year: "2019",
                  title: "Junior Developer",
                  company: "Digital Agency",
                  description: "Started my career building responsive websites and learning new technologies."
                },
                {
                  year: "2018",
                  title: "Computer Science Degree",
                  company: "University",
                  description: "Graduated with honors in Computer Science with focus on web development."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  variants={fadeInUp}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-sm text-black font-semibold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                      <div className="text-gray-600 font-medium mb-2">{item.company}</div>
                      <p className="text-gray-700">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 