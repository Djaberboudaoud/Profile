import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTouch } from '../hooks/useTouch';

const HeroContainer = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 16px;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #007bff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  const { touchState, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouch();

  return (
    <HeroContainer
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        style={{
          transform: touchState.isTouching 
            ? `translate(${touchState.moveX * 0.1}px, ${touchState.moveY * 0.1}px)` 
            : 'none'
        }}
      >
        <ProfileImage
          src="/profile.jpg"
          alt="Profile"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BOUDAOUD DJABER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineer
          </motion.p>
        </HeroContent>
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;