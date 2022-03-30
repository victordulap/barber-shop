import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  ContentCut as ContentCutIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { MenuBtn, StyledNavbar } from './styles/Navbar.style';
import { ScriptText } from './styles/Text.style';

const menuItems = [
  {
    name: 'Services',
    icon: <ContentCutIcon />,
  },
  {
    name: 'About us',
    icon: <InfoIcon />,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsMenuOpen(false)}
    >
      <List>
        <ListItem sx={{ textAlign: 'center', display: 'block' }}>
          <ScriptText variant="h5">VD Barber Shop</ScriptText>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        {menuItems.map((menuItem) => (
          <ListItem button key={`menu-item-${menuItem.name}`}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledNavbar>
      <MenuBtn
        color="primary"
        variant="outlined"
        onClick={() => setIsMenuOpen(true)}
      >
        {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </MenuBtn>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        {list()}
      </Drawer>
    </StyledNavbar>
  );
};

export default Navbar;
