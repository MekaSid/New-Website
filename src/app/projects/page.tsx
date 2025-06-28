'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/image";

interface Project {
  logo: string;
  title: string;
  description: string;
  link: string;
  languages: string[];
}

const projects: Project[] = [
  {
    logo: '/projecticons/drop.png',
    title: 'Creek Lands Conservation Portal',
    description: 'A full-stack application that allows Creek Lands Conservation to manage their events, waivers, and payments.',
    link: 'https://github.com/hack4impact-calpoly/Creek-Lands-Conservation',
    languages: ['React', 'Typescript', 'MongoDB', 'Node.js'],
  },
  {
    logo: '/projecticons/chopshop.png',
    title: 'The Chop Shop',
    description: 'A website for a local barbershop that allows customers to book appointments and view the shop\'s services.',
    link: 'https://github.com/MekaSid/ChopShop',
    languages: ['React', 'Typescript', 'Node.js'],
  },
  {
    logo: '/projecticons/logo.png',
    title: 'Amazon Sentiment Analysis',
    description: 'K Nearest Neighbors to predict sentiment of Amazon reviews.',
    link: 'https://github.com/MekaSid/KNN-Reviews.git',
    languages: ['Java'],
  },
  {
    logo: '/projecticons/tracked.png',
    title: 'Tracked',
    description: 'A React Native mobile app that uses Natural Language Processing to analyze user meal descriptions and calculate nutritional macros via a Python Flask API.',
    link: 'https://github.com/MekaSid/Tracked/tree/master',
    languages: ['React-Native', 'JavaScript', 'Python'],
  },
  {
    logo: '/projecticons/octordle.png',
    title: 'Octordle Solver',
    description: 'A Python project that uses statistics and data pruning to solve Octordle puzzles with high efficiency and accuracy.',
    link: 'https://github.com/MekaSid/Octordle-AI',
    languages: ['Python'],
  },
  {
    logo: '/projecticons/chess.png',
    title: 'Chess AI',
    description: 'A Chess AI project using Alpha-Beta pruning and neural networks to evaluate and predict moves. The model trains on chess data and uses Stockfish-based predictions for optimal moves, with components for data handling, board evaluation, and a basic GUI.',
    link: 'https://github.com/keonroohparvar/AI_ChessEngine',
    languages: ['Python'],
  },
  {
    logo: '/projecticons/autoplanner.png',
    title: 'AutoPlanner',
    description: 'A travel generator that creates personalized schedules for flights, hotels, and activities based on user preferences, utilizing Playwright for web scraping and pandas for itinerary development.',
    link: 'https://github.com/MekaSid/AutoPlanner',
    languages: ['Python'],
  },
  {
    logo: '/projecticons/fitnesstracker.png',
    title: 'Fitness Tracker',
    description: 'A Java-based Fitness Tracker Application with a JavaFX GUI and MySQL database for managing exercises, trainers, and workouts.',
    link: 'https://github.com/MekaSid/fitnesstracker/tree/main',
    languages: ['SQL', 'Java'],
  },
  {
    logo: '/projecticons/website.png',
    title: 'Personal Website',
    description: 'My personal website built using Next.js and Typescript, and deployed using Vercel.',
    link: 'https://github.com/MekaSid/New-Website',
    languages: ['React', 'Typescript'],
  },
  // {
  //   logo: '/projecticons/huffman.png',
  //   title: 'Huffman Encoding',
  //   description: 'A Python project for efficient data compression using Huffman encoding and decoding.',
  //   link: 'https://github.com/MekaSid/Huffman-Encoding',
  //   languages: ['Python'],
  // },
  {
    logo: '/projecticons/virtualworld.png',
    title: 'The Regular Show Game',
    description: 'A Java-based object-oriented virtual world game featuring multithreading, A* pathfinding, and OOP principles.',
    link: 'https://github.com/MekaSid/The-Regular-Show-Game',
    languages: ['Java'],
  },
];

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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {projects.map((project, index) => (
              <motion.a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-105 cursor-pointer block"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-6">
                  <Image 
                    src={project.logo}
                    alt={project.title}
                    width={120}
                    height={120}
                    className="w-24 h-24 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((language, langIndex) => (
                      <span key={langIndex} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {language}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-sm">View on GitHub →</span>
                    <div className="w-6 h-6">
                      <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 