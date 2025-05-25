import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LampContainer = styled(Box)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Lamp = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: ${props => props.isOn ? '#FFD700' : '#666'};
  border-radius: 50%;
  position: absolute;
  top: 20%;
  box-shadow: ${props => props.isOn ? '0 0 50px #FFD700' : 'none'};
  transition: all 0.3s ease;
`;

const String = styled(motion.div)`
  width: 4px;
  height: 200px;
  background: #333;
  position: absolute;
  top: 20%;
  cursor: pointer;
  transform-origin: top;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 100px;
  filter: ${props => props.isOn ? 'brightness(1)' : 'brightness(0.7)'};
  transition: all 0.3s ease;
`;

const Hero = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  const handleStringPull = () => {
    setIsLampOn(!isLampOn);
  };

  return (
    <LampContainer>
      <Lamp 
        isOn={isLampOn}
        animate={{ 
          scale: isLampOn ? 1.2 : 1,
          y: isLampOn ? -10 : 0
        }}
      />
      <String
        onClick={handleStringPull}
        animate={{
          rotate: isLampOn ? 5 : 0
        }}
      />
      <ProfileImage
        src="/profile.jpg"
        alt="BOUDAOUD DJABER"
        isOn={isLampOn}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          BOUDAOUD DJABER
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          Software Engineer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Web Development | Deep Learning | Machine Learning | Data Science
        </Typography>
      </Container>
    </LampContainer>
  );
};

export default Hero; 