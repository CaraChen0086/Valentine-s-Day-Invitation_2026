import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#ff2e63', '#ffc0d6', '#FFD700', '#ffffff', '#900C3F'];

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    // Generate confetti pieces
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // horizontal start position %
      delay: Math.random() * 2,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      type: Math.random() > 0.5 ? 'rect' : 'circle'
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            y: -20, 
            x: `${piece.x}vw`, 
            opacity: 1, 
            rotate: piece.rotation 
          }}
          animate={{ 
            y: '110vh', 
            x: `${piece.x + (Math.random() * 20 - 10)}vw`, // Drift
            rotate: piece.rotation + 360 + Math.random() * 360,
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            ease: "easeOut",
            delay: piece.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
          }}
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            backgroundColor: piece.color,
            borderRadius: piece.type === 'circle' ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
};