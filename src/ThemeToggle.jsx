import React from 'react';
import Button from '@mui/material/Button';

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Button 
      variant="contained" 
      sx={{
        backgroundColor: theme === 'light' ? '#1976d2' : '#333',
        color: theme === 'light' ? '#fff' : '#fff',
        '&:hover': {
          backgroundColor: theme === 'light' ? '#1565c0' : '#444',
        }
      }} 
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </Button>
  );
};

export default ThemeToggle;