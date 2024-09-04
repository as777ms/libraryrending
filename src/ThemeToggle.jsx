import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// Custom styled switch with sun and moon icons
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // Moon icon for dark mode
        // Moon icon for dark mode
        backgroundImage: `url("data:image/svg+xml;utf8,
          <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24'>
            <path fill='#fff' d='M12.74 2c-.43 0-.85.02-1.27.07a10.47 10.47 0 0 0-9.64 10.64 10.45 10.45 0 0 0 13.45 9.86 10.46 10.46 0 0 1-2.54 1.7 10.45 10.45 0 0 1-4.22.73 10.46 10.46 0 0 1-2.48-.3A10.47 10.47 0 1 1 22 12.74c0-.42-.02-.84-.07-1.26a10.47 10.47 0 0 0-9.19-9.48z'/>
          </svg>")`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // Sun icon for light mode
      backgroundImage: `url("data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24'>
          <path fill='#fff' d='M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0-2a1.5 1.5 0 1 1 0 3h-1v-1h2v1h-1v-1a8.48 8.48 0 0 1 0 16h1v-1h2v1h-1a8.5 8.5 0 1 1 0-17zm4 6h2v2h-2V8zm0 6h2v2h-2v-2zM8 8v2H6V8h2zm0 6v2H6v-2h2zm7.89-7.89l1.42 1.42-1.42 1.42-1.42-1.42 1.42-1.42zm-9.17 0l1.42 1.42-1.42 1.42L5.3 8.83 7.3 6.83zM18.66 6.34l-1.42 1.42-1.42-1.42 1.42-1.42 1.42 1.42zM7.29 17.65l-1.42 1.42-1.42-1.42 1.42-1.42 1.42 1.42z'/>
        </svg>")`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));
const ThemeToggle = () => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        }
        label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      />
    </FormGroup>
  );
};

export default ThemeToggle;
