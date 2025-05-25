import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 215, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StoneBackground = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/stone-texture.jpg")',
  backgroundSize: 'cover',
  padding: theme.spacing(8, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
  },
}));

const Projects = () => {
  const projects = [
    {
      title: 'School Management Platform',
      description: 'A comprehensive platform for managing school operations including certificate management, student management, and professor management.',
      image: '/school-platform.jpg',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent learning assistant that helps students with their studies using machine learning algorithms.',
      image: '/ai-assistant.jpg',
      technologies: ['Python', 'TensorFlow', 'React.js', 'Flask'],
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'A real-time dashboard for analyzing and visualizing educational data.',
      image: '/dashboard.jpg',
      technologies: ['Python', 'Pandas', 'D3.js', 'Flask'],
    },
  ];

  return (
    <StoneBackground>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
          My Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          padding: '4px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StoneBackground>
  );
};

export default Projects; 