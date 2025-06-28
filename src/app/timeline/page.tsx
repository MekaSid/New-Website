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
                  year: "June 2025 - Present",
                  title: "Software Engineer Intern",
                  company: "Mercury Insurance",
                  description: "Resolved critical bugs and improved user experience for the Direct Sales team."
                },
                {
                  year: "June 2025 - Present",
                  title: "Freelance Software Developer",
                  company: "Local Business and Professors",
                  description: "Creating website for local business and professors to showcase their work and services."
                },
                {
                  year: "June 2025 - Present",
                  title: "Master of Science - Computer Science",
                  company: "California Polytechnic State University - San Luis Obispo",
                  description: "Conducting research on interpretable, multimodal AI systems to predict wildfire risk using spatial, temporal, and environmental data."
                },
                {
                  year: "September 2024 - June 2025",
                  title: "Full Stack Software Developer",
                  company: "Creek Lands Conservation",
                  description: "Deployed full-stack application to streamline operations, automate waivers/payments, and support events"
                },
                {
                  year: "November 2023 - June 2025",
                  title: "Student IT Technician",
                  company: "Administration - Cal Poly",
                  description: "Resolved computing issues for faculty and staff."
                },
                {
                  year: "September 2022 - Present",
                  title: "Bachelor of Science - Computer Science",
                  company: "California Polytechnic State University - San Luis Obispo",
                  description: "Studying Computer Science with a concentration in Artificial Intelligence and Machine Learning with a minor in Statistics"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}
                  variants={fadeInUp}
                >
                  <div className={`w-5/12 ${index % 2 === 1 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
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