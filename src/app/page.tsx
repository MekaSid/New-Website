'use client';

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 200, scale: 0.5 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Welcome Section - White */}
      <motion.section 
        className="h-screen bg-white flex items-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <motion.div 
            className="max-w-2xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold text-black mb-6"
              variants={fadeInUp}
            >
              Hi, I'm Sid
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl text-gray-600 mb-8"
              variants={fadeInUp}
            >
              I'm a Software Engineer who loves to create, learn, and build.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              {/* <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Explore My Work
              </button>
              <button className="border border-gray-300 hover:border-black text-gray-700 hover:text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Get In Touch
              </button> */}
            </motion.div>
          </motion.div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-black"></div>
      </motion.section>

      {/* About Section - Black */}
      <motion.section 
        className="h-screen bg-black flex items-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              I'm a full-stack developer with a passion for creating intuitive and engaging user experiences. 
              My journey in tech has been driven by curiosity and a desire to solve complex problems through elegant solutions.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"></div>
      </motion.section>

      {/* Skills Section - White */}
      <motion.section 
        className="h-screen bg-white flex items-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-black mb-8"
              variants={fadeInUp}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Frontend</div>
                <div className="text-gray-600">React, Next.js, TypeScript</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Backend</div>
                <div className="text-gray-600">Node.js, Python, Databases</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Design</div>
                <div className="text-gray-600">UI/UX, Figma, Prototyping</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Tools</div>
                <div className="text-gray-600">Git, Docker, AWS</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-black"></div>
      </motion.section>

      {/* CTA Section - Black */}
      <motion.section 
        className="h-screen bg-black flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Let's create something amazing together. I'm always excited to take on new challenges and bring ideas to life.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Start a Project
              </button>
              <button className="border border-white hover:bg-white text-white hover:text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
