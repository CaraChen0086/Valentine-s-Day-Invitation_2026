import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Confetti } from './Confetti';

interface SuccessPhaseProps {
  onRestart: () => void;
}

// Updated with the user's specific image for the second page
const SUCCESS_PAGE_IMAGE = "https://i.ibb.co/DDW43WgV/IMG-4237.jpg";

export const SuccessPhase: React.FC<SuccessPhaseProps> = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] w-full relative z-40 py-10">
      <Confetti />
      
      {/* Decorative Stars matching screenshot */}
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 right-[15%] text-valentine-600 opacity-60"
      >
        <Star size={48} fill="currentColor" strokeWidth={0} />
      </motion.div>
      <motion.div 
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[25%] left-[10%] text-valentine-400 opacity-40"
      >
        <Star size={64} fill="currentColor" strokeWidth={0} />
      </motion.div>

      {/* Top Text Group */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-1 relative"
      >
        <h1 className="font-handwriting text-5xl md:text-7xl text-[#900C3F] drop-shadow-sm leading-tight">
          Yayyyyy!
        </h1>
      </motion.div>

      {/* Main Image - Polaroid/Card Style */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative my-8"
      >
        {/* The Card Container */}
        <div className="bg-white p-3 rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-gray-100 max-w-xs md:max-w-sm mx-auto relative z-10">
          {/* Inner Red Border Frame */}
          <div className="border-[3px] border-[#d44d5c] rounded-lg overflow-hidden relative">
            <img 
              src={SUCCESS_PAGE_IMAGE}
              alt="Celebration Cat"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Rose Emoji 🌹 - Left */}
        <motion.div 
          className="absolute bottom-4 -left-6 md:-left-10 text-6xl z-20 filter drop-shadow-lg origin-bottom-right"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [-10, 10, -10], y: [0, -10, 0] }}
          transition={{ delay: 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🌹
        </motion.div>

        {/* Champagne Emoji 🍾 - Right */}
        <motion.div 
          className="absolute bottom-4 -right-6 md:-right-10 text-6xl z-20 filter drop-shadow-lg origin-bottom-left"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [10, -10, 10], y: [0, -10, 0] }}
          transition={{ delay: 0.7, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🍾
        </motion.div>

      </motion.div>

      {/* Bottom Text Group */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center space-y-3 mb-8"
      >
        <h2 className="font-handwriting text-4xl md:text-6xl text-[#900C3F]">
          See you on Feb 14th!
        </h2>
      </motion.div>

      {/* Restart Button matching screenshot style */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="px-10 py-3 bg-[#A02334] text-white rounded-lg font-body text-lg shadow-md hover:bg-[#801b29] transition-colors tracking-wide"
      >
        Restart
      </motion.button>
    </div>
  );
};