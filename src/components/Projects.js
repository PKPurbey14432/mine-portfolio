import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  Code,
  Psychology,
  Analytics,
  Visibility,
  TrendingUp,
  DataObject,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'Deep Learning', 'NLP'];

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction',
      category: 'Machine Learning',
      description: 'Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Random Forest and XGBoost ensemble',
        'Feature engineering and selection',
        'Model interpretability with SHAP',
        'Real-time prediction API',
      ],
      metrics: {
        accuracy: '94%',
        precision: '91%',
        recall: '89%',
        f1_score: '90%',
      },
    },
    {
      id: 2,
      title: 'Sentiment Analysis Dashboard',
      category: 'NLP',
      description: 'Built a real-time sentiment analysis system for social media monitoring with interactive dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'BERT-based sentiment classification',
        'Real-time data processing',
        'Interactive visualization dashboard',
        'Multi-language support',
      ],
      metrics: {
        accuracy: '92%',
        precision: '89%',
        recall: '91%',
        f1_score: '90%',
      },
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      category: 'Deep Learning',
      description: 'Implemented LSTM neural networks for stock price prediction with technical indicators.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Yahoo Finance'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'LSTM and GRU architectures',
        'Technical indicator integration',
        'Time series forecasting',
        'Risk assessment metrics',
      ],
      metrics: {
        accuracy: '87%',
        precision: '85%',
        recall: '88%',
        f1_score: '86%',
      },
    },
    {
      id: 4,
      title: 'E-commerce Analytics',
      category: 'Data Analysis',
      description: 'Comprehensive analysis of e-commerce data to identify trends and optimize business strategies.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['Python', 'Pandas', 'Plotly', 'SQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Customer segmentation analysis',
        'Sales trend visualization',
        'Product performance metrics',
        'Recommendation system',
      ],
      metrics: {
        accuracy: 'N/A',
        precision: 'N/A',
        recall: 'N/A',
        f1_score: 'N/A',
      },
    },
    {
      id: 5,
      title: 'Image Classification API',
      category: 'Deep Learning',
      description: 'Deployed a CNN-based image classification API for real-time object recognition.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Docker', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'ResNet-50 architecture',
        'Transfer learning implementation',
        'Docker containerization',
        'AWS deployment',
      ],
      metrics: {
        accuracy: '96%',
        precision: '94%',
        recall: '95%',
        f1_score: '94%',
      },
    },
    {
      id: 6,
      title: 'Fraud Detection System',
      category: 'Machine Learning',
      description: 'Anomaly detection system for identifying fraudulent transactions in real-time.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      technologies: ['Python', 'Isolation Forest', 'Streamlit', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: [
        'Isolation Forest algorithm',
        'Real-time transaction monitoring',
        'Alert system integration',
        'Performance dashboard',
      ],
      metrics: {
        accuracy: '93%',
        precision: '95%',
        recall: '87%',
        f1_score: '91%',
      },
    },
  ];

  const filteredProjects = selectedTab === 0 
    ? projects 
    : projects.filter(project => project.category === categories[selectedTab]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Machine Learning':
        return <Psychology />;
      case 'Deep Learning':
        return <TrendingUp />;
      case 'NLP':
        return <DataObject />;
      case 'Data Analysis':
        return <Analytics />;
      default:
        return <Code />;
    }
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
            My Projects
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
            Explore my data science projects showcasing machine learning, deep learning, and analytics solutions
          </Typography>
        </motion.div>

        {/* Category Tabs */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minWidth: 120,
                fontWeight: 'bold',
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab
                key={category}
                label={category}
                icon={index === 0 ? <Code /> : getCategoryIcon(category)}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ color: 'primary.main', mr: 1 }}>
                          {getCategoryIcon(project.category)}
                        </Box>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        )}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                      <Button
                        size="small"
                        startIcon={<Visibility />}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        View Details
                      </Button>
                      <Box>
                        <IconButton
                          size="small"
                          component="a"
                          href={project.github}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHub />
                        </IconButton>
                        <IconButton
                          size="small"
                          component="a"
                          href={project.demo}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Launch />
                        </IconButton>
                      </Box>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {selectedProject.title}
                  </Typography>
                  <IconButton onClick={handleCloseDialog}>
                    <Close />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      style={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                        borderRadius: 8,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Project Overview
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {selectedProject.description}
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Key Features
                    </Typography>
                    <List dense>
                      {selectedProject.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {selectedProject.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        />
                      ))}
                    </Box>

                    {selectedProject.metrics.accuracy !== 'N/A' && (
                      <>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                          Model Performance
                        </Typography>
                        <Grid container spacing={2}>
                          {Object.entries(selectedProject.metrics).map(([metric, value]) => (
                            <Grid item xs={6} key={metric}>
                              <Box sx={{ textAlign: 'center', p: 1, backgroundColor: 'grey.50', borderRadius: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                  {value}
                                </Typography>
                                <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
                                  {metric.replace('_', ' ')}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
                <Button
                  variant="outlined"
                  component="a"
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHub />}
                >
                  View Code
                </Button>
                <Button
                  variant="contained"
                  component="a"
                  href={selectedProject.demo}
                  target="_blank"
                  startIcon={<Launch />}
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
