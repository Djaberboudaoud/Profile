import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTouch } from '../hooks/useTouch';

const ProjectsSection = styled(motion.section)`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.95);
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  
  &:hover .project-overlay {
    opacity: 1;
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1.5rem;
  color: white;
  text-align: center;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const projects = [
  {
    id: 1,
    title: 'School Platform',
    description: 'A comprehensive school management system',
    image: '/school-platform.jpg',
    details: 'Full-featured school management platform with student tracking, attendance, and grade management.',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'AI Assistant',
    description: 'Smart AI-powered virtual assistant',
    image: '/ai-assistant.jpg',
    details: 'Intelligent virtual assistant using natural language processing and machine learning.',
    tech: ['Python', 'TensorFlow', 'Flask']
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard',
    image: '/dashboard.jpg',
    details: 'Interactive dashboard for real-time data analysis and visualization.',
    tech: ['React', 'D3.js', 'Firebase']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { touchState, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouch();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ProjectsSection>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{
                transform: touchState.isTouching
                  ? `scale(1.05) translate(${touchState.moveX * 0.05}px, ${touchState.moveY * 0.05}px)`
                  : 'scale(1)'
              }}
            />
            <ProjectOverlay className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => setSelectedProject(null)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </CloseButton>
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProject.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedProject.details}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '1rem' }}
              >
                {selectedProject.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      margin: '0.25rem',
                      background: '#f0f0f0',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects;