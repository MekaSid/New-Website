'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to get all images from the gallery folder
    const loadGalleryImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        
        if (response.ok) {
          setImages(data.images);
        } else {
          console.error('Failed to load gallery images');
          setImages([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading gallery images:', error);
        setImages([]);
        setLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 pb-16 bg-gray-50 flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading gallery...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Gallery Section */}
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
            Gallery
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {images.map((imagePath, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-black overflow-hidden">
                  <img 
                    src={imagePath} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <span class="text-white text-lg font-medium">Image ${index + 1}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 