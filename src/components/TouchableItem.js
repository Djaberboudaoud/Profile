import React, { useState } from 'react';
import styled from 'styled-components';

const TouchableWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  -webkit-tap-highlight-color: transparent;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:active:after {
    animation: ripple 0.4s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(100, 100);
      opacity: 0;
    }
  }
`;

export const TouchableItem = ({ onPress, children }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (e) => {
    e.preventDefault();
    setIsPressed(true);
    onPress?.();
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <TouchableWrapper 
      onClick={handlePress}
      onTouchStart={handlePress}
      style={{ opacity: isPressed ? 0.7 : 1 }}
    >
      {children}
    </TouchableWrapper>
  );
};
