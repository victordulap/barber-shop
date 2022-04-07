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
import { Link } from 'react-router-dom';
import { MenuBtn, StyledNavbar } from './styles/Navbar.style';
import { ScriptText } from './styles/Text.style';

const menuItems = [
  {
    name: 'Services',
    icon: <ContentCutIcon />,
    link: '/services',
  },
  {
    name: 'About us',
    icon: <InfoIcon />,
    link: '/about-us',
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
          <Link key={`menu-item-${menuItem.name}`} to={menuItem.link}>
            <ListItem button>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          </Link>
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
