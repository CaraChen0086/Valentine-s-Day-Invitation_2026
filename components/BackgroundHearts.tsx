import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const BackgroundHearts: React.FC = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    size: 20 + Math.random() * 40,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-valentine-300/30"
          style={{
            left: `${heart.x}%`,
            bottom: -50,
          }}
          animate={{
            y: -window.innerHeight - 100,
            x: Math.random() * 100 - 50, // Slight horizontal drift
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart 
            size={heart.size} 
            fill="currentColor" 
          />
        </motion.div>
      ))}
    </div>
  );
};