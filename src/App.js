import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsDarkMode(currentHour >= 18 || currentHour < 6);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#FFD700', // Yellow
      },
      secondary: {
        main: '#000000', // Black
      },
      background: {
        default: isDarkMode ? '#121212' : '#ffffff',
        paper: isDarkMode ? '#1e1e1e' : '#f5f5f5',
      },
    },
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: isDarkMode ? 'linear-gradient(45deg, #121212 30%, #1e1e1e 90%)' : 
                               'linear-gradient(45deg, #ffffff 30%, #f5f5f5 90%)',
      }}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App; 