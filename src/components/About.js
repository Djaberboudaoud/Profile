import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  background: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 215, 0, 0.2)',
}));

const SkillChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 16px',
  margin: '4px',
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '0.9rem',
}));

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript','PHP','Laravel', 'Node.js', 'WordPress',
    'React.js', 'Express', 'Python', 'Flask', 'Java',
    'Git', 'GitHub', 'AI Agent'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" color="primary">
        About Me
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Personal Information
            </Typography>
            <Typography paragraph>
              I am a 21-year-old Software Engineer based in ADRAR, Algeria. Currently, I am pursuing my studies at the School of Informatics in Sidi Bel Abbess, Algeria, where I am in my 4th year.
            </Typography>
            <Typography paragraph>
              My passion lies in web development, deep learning, machine learning, and data science. I am constantly expanding my knowledge and skills in these areas to create innovative solutions.
            </Typography>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography paragraph>
              <strong>Phone:</strong> +213 697592727
            </Typography>
            <Typography paragraph>
              <strong>Email:</strong> d.boudaoud@esi-sba.dz
            </Typography>
            <Typography paragraph>
              <strong>Location:</strong> ADRAR, Algeria
            </Typography>
          </StyledPaper>
        </Grid>

        <Grid item xs={12}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Skills & Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <SkillChip key={skill}>
                  {skill}
                </SkillChip>
              ))}
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 
