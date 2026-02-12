import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AskPhaseProps {
  onYes: () => void;
}

// Updated with the user's specific image for the first page
const ASK_PAGE_IMAGE = "https://i.ibb.co/LzhW90mW/IMG-4234.jpg";

const RUNAWAY_PHRASES = [
  "Nope, Adam 🙅‍♂️",
  "Nice try, Adam 😉",
  "You wish, Adam ",
  "Dream on, Adam 😴",
  "Catch me first, Adam 🏃‍♂️",
  "Not so fast, Adam ",
  "Oh really, Adam? 🤨",
  "Think again, Adam 🤔",
  "Nooo Adam 🥺",
  "Not today, Adam ",
  "Adam, why are you making this hard 😩",
  "Adam, click YES instead! ",
  "Wrong button, Adam! 🚫",
  "Adam, be nice! 🌸",
  "Adam, look at the kitty! 🐱",
  "Adam, pretty please? 🥺",
  "Adam, don't be mean! ",
  "Adam, try the other one! ➡️",
  "Adam, oops! Missed! 💨"
];

export const AskPhase: React.FC<AskPhaseProps> = ({ onYes }) => {
  const [noBtnStyle, setNoBtnStyle] = useState<React.CSSProperties>({});
  const [buttonText, setButtonText] = useState("No");

  const moveButton = () => {
    // Calculate random position within viewport bounds
    const x = Math.random() * (window.innerWidth - 150); // Adjust for button width
    const y = Math.random() * (window.innerHeight - 60);
    
    // Pick a random phrase
    const randomIdx = Math.floor(Math.random() * RUNAWAY_PHRASES.length);
    setButtonText(RUNAWAY_PHRASES[randomIdx]);

    setNoBtnStyle({
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 100, // Ensure it floats above everything
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        className="flex flex-col items-center text-center space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative mt-8"
        >
          {/* Cute Photo Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center z-10 border-4 border-white shadow-xl bg-white">
             <img 
               src={ASK_PAGE_IMAGE} 
               alt="Cute Expectant Cat"
               className="w-full h-full object-cover"
             />
          </div>
          
          {/* Flowers Emoji - Left Side */}
          <motion.div 
            className="absolute bottom-8 -left-4 text-7xl z-20 origin-bottom-right filter drop-shadow-lg"
            animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            💐
          </motion.div>

          {/* Red Wine Emoji - Right Side */}
          <motion.div 
            className="absolute bottom-8 -right-4 text-7xl z-20 origin-bottom-left filter drop-shadow-lg"
            animate={{ rotate: [10, -10, 10], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
          >
            🍷
          </motion.div>
        </motion.div>

        <h1 className="font-handwriting text-5xl md:text-7xl text-valentine-600 drop-shadow-sm p-4 leading-tight">
          Would you be my Valentine?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full h-32 relative">
          
          {/* YES Button - Wine Red color */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="z-20 bg-[#900C3F] hover:bg-[#700931] text-white font-bold py-6 px-12 rounded-full text-3xl shadow-lg transform transition-colors duration-200 border-4 border-[#581845]"
          >
            YES! 😍
          </motion.button>

          {/* NO Button - Runs away with random text */}
          <motion.button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            onClick={(e) => { e.preventDefault(); moveButton(); }}
            style={noBtnStyle}
            animate={Object.keys(noBtnStyle).length > 0 ? {
              x: 0, y: 0 
            } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
              bg-[#fffdd0] text-gray-800 font-bold py-3 px-6 rounded-full text-sm shadow-md cursor-pointer whitespace-nowrap border-2 border-[#e6dcc3] hover:bg-white
              ${Object.keys(noBtnStyle).length === 0 ? 'relative' : ''}
            `}
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}