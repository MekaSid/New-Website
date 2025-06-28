'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Projects() {
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
      
      {/* Projects Section */}
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
            Featured Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "🛒"
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates and team features.",
                tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                image: "📋"
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing creative work and professional experience.",
                tech: ["Next.js", "TypeScript", "Framer Motion"],
                image: "🎨"
              },
              {
                title: "Weather Dashboard",
                description: "A weather application with location-based forecasts and interactive maps.",
                tech: ["React", "OpenWeather API", "Chart.js"],
                image: "🌤️"
              }
            ].map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Live Demo
                    </button>
                    <button className="border border-gray-300 hover:border-black text-gray-700 hover:text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 