import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'tj', name: 'Тоҷикӣ' },
];

const Perevod = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpenMenu}>
        {i18n.language.toUpperCase()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang)}>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Perevod;