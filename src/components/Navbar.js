import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log('Scroll state:', isScrolled, 'Scroll Y:', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
        <AnalyticsIcon sx={{ color: 'primary.main', fontSize: '1.8rem' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Data Scientist
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path}>
            <ListItemText 
              primary={item.name}
              sx={{
                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? '#1565C0' : 'transparent',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          boxShadow: scrolled ? '0 6px 25px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '2px solid rgba(255,255,255,0.2)' : 'none',
        }}
        elevation={0}
      >
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  '& .navbar-title': {
                    color: scrolled ? '#FFD700' : '#FFD700',
                  },
                  '& .navbar-icon': {
                    color: scrolled ? '#FFD700' : '#FFD700',
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <AnalyticsIcon 
                className="navbar-icon"
                sx={{
                  color: scrolled ? 'white' : 'white',
                  fontSize: '1.8rem',
                  transition: 'all 0.3s ease',
                }}
              />
              <Typography
                variant="h6"
                className="navbar-title"
                sx={{
                  color: scrolled ? 'white' : 'white',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
              >
                Data Scientist
              </Typography>
            </Box>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto', color: scrolled ? 'white' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: scrolled ? 'white' : 'white',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFD700',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
