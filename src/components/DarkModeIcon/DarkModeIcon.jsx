// src/components/DarkModeIcon/DarkModeIcon.jsx
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const DarkModeIcon = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={handleClick} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      {children}
    </ThemeProvider>
  );
};

export default DarkModeIcon;
