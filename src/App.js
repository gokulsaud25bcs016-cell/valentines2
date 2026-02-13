import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, MapPin, Sword, Smartphone, Gift } from 'lucide-react';
import './App.css';

const App = () => {
  const [phase, setPhase] = useState('invite');
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    setNoButtonPos({
      x: x - window.innerWidth / 2,
      y: y - window.innerHeight / 2,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Truck says YES! ❤️ Distance is just a number. See you soon!"
    );

    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="valentine-container">

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="heart-particle"
            animate={{ y: [-10, -1000], opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Heart
              fill="#ff4d6d"
              color="#ff4d6d"
              size={Math.random() * 20 + 10}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* Invite Phase */}
        {phase === 'invite' && (
          <motion.div
            key="invite"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="val-card"
          >

            <div className="game-badge">
              <Sword size={14} /> MOBA LEGENDS DUO
            </div>

            <Heart
              className="main-heart"
              size={80}
              fill="#ff4d6d"
              color="#ff4d6d"
            />

            <h1>Hey Truck... 🌹</h1>
            <p>From carrying games together to carrying my heart.</p>

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

        {/* Quiz Phase */}
        {phase === 'questions' && (
          <motion.div
            key="questions"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="val-card"
          >

            <h2>Our Love Story Quiz... 🎮</h2>

            <div className="quiz-q">
              <p>Who loves more?</p>

              <button onClick={() => alert("YES BABE U ARE RIGHT.")}>
                GOKUL
              </button>

              <button onClick={() => alert("BABE YOU ARE SHORT SO OBVIOUSLY NOT U!")}>
                Divya
              </button>
            </div>

            <div className="quiz-q">
              <p>What's our biggest challenge?</p>

              <button onClick={() => setPhase('final')}>
                <MapPin size={18} /> Long Distance
              </button>

              <button onClick={() => alert("But your truck is worst babe.")}>
                <Smartphone size={18} /> Bad Internet
              </button>
            </div>

          </motion.div>
        )}

        {/* Final Phase */}
        {phase === 'final' && (
          <motion.div
            key="final"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="val-card final-card"
          >

            <Star color="#ffb703" size={50} fill="#ffb703" />

            <h1>Locked In! ❤️</h1>

            <p className="trust-msg">
              Babu, distance is just a test to see how far love can go.
              Sometimes I might be too much but trust me, not a second passes
              without thinking of you.
              I trust you, I love you babe, and I can't wait until
              "Long Distance" becomes "Right Beside You."
            </p>

            <div className="gift-box">
              <Gift size={80} color="#ff4d6d" />
            </div>

            <button
              className="yes-btn"
              onClick={handleWhatsApp}
            >
              Send a Signal to Me 📱
            </button>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default App;
