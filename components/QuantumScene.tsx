/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top Right Blob - Teal */}
      <motion.div 
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl mix-blend-multiply filter"
        animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }}
      />

      {/* Middle Left Blob - Blue */}
      <motion.div 
        className="absolute top-[20%] -left-24 w-[400px] h-[400px] rounded-full bg-brand-100/40 blur-3xl mix-blend-multiply filter"
        animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
        }}
      />

      {/* Bottom Right Blob - Sage */}
      <motion.div 
        className="absolute -bottom-32 right-[10%] w-[600px] h-[600px] rounded-full bg-sage-100/50 blur-3xl mix-blend-multiply filter"
        animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
        }}
        transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
        }}
      />
      
      {/* Tiny floating particles */}
      <div className="absolute inset-0 opacity-30">
          <motion.div className="absolute top-[15%] left-[15%] w-4 h-4 bg-teal-400 rounded-full" 
             animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute top-[40%] right-[20%] w-3 h-3 bg-brand-400 rounded-full" 
             animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.div className="absolute bottom-[20%] left-[30%] w-6 h-6 bg-sage-400 rounded-full" 
             animate={{ y: [0, -25, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} />
      </div>
    </div>
  );
};
