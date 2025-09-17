import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Twitter,
  Send,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { personalInfo } from '../config/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: personalInfo.location,
      link: personalInfo.locationLink,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      color: '#0077B5',
    },
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: personalInfo.github,
      color: '#333',
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      url: personalInfo.twitter,
      color: '#1DA1F2',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setSnackbar({
        open: true,
        message: 'Thank you! Your message has been sent successfully.',
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ py: 8, mt: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Let's discuss your data science projects and explore opportunities for collaboration
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Send Me a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        size="large"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '60px',
                            fontSize: '1.1rem',
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        size="large"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '60px',
                            fontSize: '1.1rem',
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="large"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            height: '60px',
                            fontSize: '1.1rem',
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={8}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            minHeight: '200px',
                            fontSize: '1.1rem',
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            py: 1.5,
                            px: 4,
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1976D2, #1E88E5)',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Contact Info */}
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Paper
                          component="a"
                          href={info.link}
                          sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            textDecoration: 'none',
                            color: 'inherit',
                            backgroundColor: 'grey.50',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            },
                          }}
                        >
                          <Box sx={{ color: 'primary.main' }}>
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                              {info.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {info.value}
                            </Typography>
                          </Box>
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>
                </Card>

                {/* Social Links */}
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <IconButton
                          component="a"
                          href={social.url}
                          target="_blank"
                          sx={{
                            width: 60,
                            height: 60,
                            backgroundColor: social.color,
                            color: 'white',
                            '&:hover': {
                              backgroundColor: social.color,
                              transform: 'translateY(-3px)',
                              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Card>

                {/* Availability */}
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Availability
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CheckCircle sx={{ color: 'success.main' }} />
                    <Typography variant="body2">
                      Available for freelance projects
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CheckCircle sx={{ color: 'success.main' }} />
                    <Typography variant="body2">
                      Open to full-time opportunities
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: 'success.main' }} />
                    <Typography variant="body2">
                      Willing to relocate
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card sx={{ mt: 6, p: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Let's Work Together
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I'm passionate about solving complex data problems and creating innovative solutions. 
              Whether you have a specific project in mind or just want to discuss possibilities, 
              I'd love to hear from you.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Email />}
                component="a"
                                    href={`mailto:${personalInfo.email}`}
                sx={{
                  background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2, #1E88E5)',
                  },
                }}
              >
                Send Email
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedIn />}
                component="a"
                href="https://linkedin.com"
                target="_blank"
              >
                Connect on LinkedIn
              </Button>
            </Box>
          </Card>
        </motion.div>

        {/* Snackbar for form feedback */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
