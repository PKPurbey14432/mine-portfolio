import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  CardMedia,
} from '@mui/material';
import {
  Analytics,
  Code,
  Psychology,
  TrendingUp,
  GitHub,
  LinkedIn,
  Email,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { personalInfo } from '../config/personalInfo';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const texts = [
    'Data Scientist',
    'Machine Learning Engineer',
    'Generative AI Engineer',
  ];

  // Preload background image
  useEffect(() => {
    if (personalInfo.homeBackgroundImage) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = personalInfo.homeBackgroundImage;
    } else {
      setImageLoaded(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const stats = [
    { icon: <Analytics />, number: '5+', label: 'Projects Completed' },
    { icon: <Code />, number: '3+', label: 'Years Experience' },
    { icon: <Psychology />, number: '90%', label: 'Accuracy Rate' },
    { icon: <TrendingUp />, number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Layer with Color and Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // Space-themed background color that matches the galaxy image
            backgroundColor: personalInfo.homeBackgroundColor || '#0B1426', // Deep space blue
            background: personalInfo.homeBackgroundImage 
              ? `linear-gradient(135deg, rgba(11, 20, 38, 0.7) 0%, rgba(25, 39, 74, 0.7) 50%, rgba(44, 62, 123, 0.7) 100%), url(${personalInfo.homeBackgroundImage}) center/cover no-repeat`
              : `linear-gradient(135deg, ${personalInfo.homeBackgroundColor || '#0B1426'} 0%, #192750 50%, #2C3E7B 100%)`,
            zIndex: 0,
            opacity: imageLoaded ? 1 : 0.9,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
        
        {/* Gradient Overlay - REMOVED to show pure background image */}
        
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '100px 100px',
            zIndex: 2,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                  }}
                >
                  Hello, I'm
                  <br />
                  <span style={{ color: '#FFD700' }}>P. K. Purbey</span>
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    mb: 3,
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  I'm a{' '}
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: '#FFD700', marginLeft: '10px' }}
                  >
                    {texts[currentText]}
                  </motion.span>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Transforming data into actionable insights through advanced analytics and cutting-edge AI. From machine learning and deep learning to generative AI, Creating innovative solutions that drive smarter decisions and measurable impact.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to="/projects"
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#FFD700',
                        color: '#333',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#FFC700',
                        },
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component="a"
                      href={personalInfo.cvLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: '#FFD700',
                          backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        },
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                </Box>

                {/* Social Links */}
                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                                  {[
                  { icon: <GitHub />, href: personalInfo.github, label: 'GitHub' },
                  { icon: <LinkedIn />, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: <Email />, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map((social, index) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        component="a"
                        href={social.href}
                        sx={{
                          minWidth: 'auto',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 215, 0, 0.2)',
                          },
                        }}
                      >
                        {social.icon}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ textAlign: 'center' }}
              >
                <Card
                  sx={{
                    width: 300,
                    height: 300,
                    mx: 'auto',
                    mb: 3,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={personalInfo.profileImage}
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Card>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                  {['Python', 'Machine Learning', 'Deep Learning', 'Data Science', 'Artificial Intelligence', 'Generative AI'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
