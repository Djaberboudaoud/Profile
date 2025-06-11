import { motion } from 'framer-motion';
import styled from 'styled-components';

const AnimatedContainer = styled(motion.div)`
  width: 100%;
  touch-action: none;
  @media (max-width: 768px) {
    touch-action: pan-y;
  }
`;

export const AnimatedComponent = ({ children }) => {
  return (
    <AnimatedContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </AnimatedContainer>
  );
};
