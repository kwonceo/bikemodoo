import React from 'react';
import { motion } from 'framer-motion';
import { BikeIcon } from './icons/BikeIcon';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 애니메이션 배경 */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* 오토바이 애니메이션 */}
      <motion.div
        className="absolute w-24 h-24 bike-animation"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <BikeIcon />
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          안전하고 믿을 수 있는<br />
          배달오토바이 렌트
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          전문 관리와 체계적인 서비스로<br />
          당신의 배달 사업을 지원합니다
        </motion.p>

        <motion.button
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-blue-50 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          지금 시작하기
        </motion.button>
      </div>
    </section>
  );
}; 