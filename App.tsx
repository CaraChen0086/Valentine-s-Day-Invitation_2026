import React, { useState } from 'react';
import { AskPhase } from './components/AskPhase';
import { SuccessPhase } from './components/SuccessPhase';
import { BackgroundHearts } from './components/BackgroundHearts';

export default function App() {
  const [phase, setPhase] = useState<'ask' | 'success'>('ask');

  const handleYes = () => {
    setPhase('success');
  };

  const handleRestart = () => {
    setPhase('ask');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
      <BackgroundHearts />
      
      <main className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center min-h-[600px]">
        {phase === 'ask' ? (
          <AskPhase onYes={handleYes} />
        ) : (
          <SuccessPhase onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
}