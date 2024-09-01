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
    <Button variant="contained" onClick={toggleTheme} color={theme === 'light' ? 'primary' : 'secondary'}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </Button>
  );
};

export default ThemeToggle;