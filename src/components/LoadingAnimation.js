// src/components/LoadingAnimation.js

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function LoadingAnimation() {
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      '.loading-text',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, repeat: -1, yoyo: true }
    );

    gsap.to('.circle', {
      rotation: 360,
      duration: 2,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E8F3DF]">
      <div className="text-4xl font-bold text-[#375F0F] mb-6 loading-text">HerbVerse</div>
      <div className="w-12 h-12 border-4 border-[#375F0F] border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingAnimation;
