import { useState } from 'react';

export const useTouch = (element, options = {}) => {
  const [touchState, setTouchState] = useState({
    isTouching: false,
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0
  });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchState({
      isTouching: true,
      startX: touch.clientX,
      startY: touch.clientY,
      moveX: 0,
      moveY: 0
    });
  };

  const handleTouchMove = (e) => {
    if (!touchState.isTouching) return;
    const touch = e.touches[0];
    setTouchState(prev => ({
      ...prev,
      moveX: touch.clientX - prev.startX,
      moveY: touch.clientY - prev.startY
    }));
  };

  const handleTouchEnd = () => {
    setTouchState(prev => ({ ...prev, isTouching: false }));
  };

  return { touchState, handleTouchStart, handleTouchMove, handleTouchEnd };
};
