import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Music, Gift, Camera, Utensils } from 'lucide-react';
import './App.css';

const App = () => {
  const [phase, setPhase] = useState('invite'); // invite, questions, final
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    setNoButtonPos({ x: x - window.innerWidth / 2, y: y - window.innerHeight / 2 });
  };

  return (
    <div className="valentine-container">
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="heart-particle"
            animate={{ y: [-10, -1000], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: i * 0.5 }}
          >
            <Heart fill="red" color="red" size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {phase === 'invite' && (
          <motion.div key="1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="val-card">
            <Heart className="main-heart" size={80} fill="#ff4d6d" color="#ff4d6d" />
            <h1>Hey Gorgeous... 🌹</h1>
            <p>I have a very important question to ask you.</p>
            <h2>Will you be my Valentine?</h2>
            
            <div className="btn-group">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                className="yes-btn"
                onClick={() => setPhase('questions')}
              >
                YES! ❤️
              </motion.button>

              <motion.button 
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                onMouseEnter={moveNoButton}
                className="no-btn"
              >
                No 😢
              </motion.button>
            </div>
          </motion.div>
        )}

        {phase === 'questions' && (
          <motion.div key="2" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="val-card">
            <h2>Just to make sure... 😉</h2>
            <div className="quiz-q">
              <p>1. Who loves who more?</p>
              <button onClick={() => alert("Correct! But I love you more.")}>Me</button>
              <button onClick={() => alert("Impossible! Try again.")}>You</button>
            </div>
            <div className="quiz-q">
              <p>2. What's our next date gonna be?</p>
              <button onClick={() => setPhase('final')}><Utensils /> Candlelight Dinner</button>
              <button onClick={() => setPhase('final')}><Camera /> Movie Night</button>
            </div>
          </motion.div>
        )}

        {phase === 'final' && (
          <motion.div key="3" initial={{ scale: 0 }} animate={{ scale: 1 }} className="val-card final-card">
            <Stars color="#ffb703" size={50} />
            <h1>Yay! It's a Date! ❤️</h1>
            <p>I can't wait to spend tomorrow with you. You're the best thing that ever happened to me.</p>
            <div className="gift-box">
              <Gift size={100} color="#ff4d6d" strokeWidth={1} />
            </div>
            <p className="footer-note">Check your WhatsApp for the location! 📍</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;