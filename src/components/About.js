import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Paper,
  Chip,
  Button,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  School,
  Work,
  Star,
  Psychology,
  Analytics,
  Code,
  Download,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { personalInfo } from '../config/personalInfo';

const About = () => {
  // Add icons to skills from config
  const skillsWithIcons = personalInfo.skills.map(skill => {
    let icon;
    switch (skill.name) {
      case 'Python':
      case 'SQL':
        icon = <Code />;
        break;
      case 'Machine Learning':
      case 'Deep Learning':
        icon = <Psychology />;
        break;
      case 'Data Analysis':
      case 'Statistics':
        icon = <Analytics />;
        break;
      default:
        icon = <Code />;
    }
    return { ...skill, icon };
  });

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
              mb: 6,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Personal Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 3 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      mx: 'auto',
                      mb: 2,
                      border: '4px solid #2196F3',
                    }}
                    src={personalInfo.profileImage}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {personalInfo.name}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                    {personalInfo.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {personalInfo.description}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Personal Information
                  </Typography>
                  {[
                    { label: 'Age', value: personalInfo.age },
                    { label: 'Location', value: personalInfo.location },
                    { label: 'Experience', value: personalInfo.experience },
                    { label: 'Degree', value: personalInfo.degree },
                  ].map((info) => (
                    <Box key={info.label} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {info.label}:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {info.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Key Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {personalInfo.keySkills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                {/* CV Download Button */}
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    component="a"
                    href={personalInfo.cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
                      color: 'white',
                      fontWeight: 'bold',
                      px: 3,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976D2, #1E88E5)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Experience & Education */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Experience */}
              <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  <Work sx={{ mr: 1, color: 'primary.main' }} />
                  Work Experience
                </Typography>
                <Timeline position="alternate">
                  {personalInfo.experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                      <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        {exp.year}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary" />
                        {index < personalInfo.experiences.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.description}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Card>

              {/* Education */}
              <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  <School sx={{ mr: 1, color: 'primary.main' }} />
                  Education
                </Typography>
                <Timeline position="alternate">
                  {personalInfo.education.map((edu, index) => (
                    <TimelineItem key={index}>
                      <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        {edu.year}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        {index < personalInfo.education.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body2" color="secondary" sx={{ fontWeight: 'medium' }}>
                            {edu.school}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {edu.description}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Card>

              {/* Skills */}
              <Card sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  <Star sx={{ mr: 1, color: 'primary.main' }} />
                  Technical Skills
                </Typography>
                <Grid container spacing={2}>
                  {skillsWithIcons.map((skill, index) => (
                    <Grid item xs={12} sm={6} key={skill.name}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ color: 'primary.main', mr: 1 }}>
                            {skill.icon}
                          </Box>
                          <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ ml: 'auto', fontWeight: 'bold' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: '100%',
                            height: 8,
                            backgroundColor: 'grey.200',
                            borderRadius: 4,
                            overflow: 'hidden',
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                              height: '100%',
                              backgroundColor: '#2196F3',
                              borderRadius: 4,
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
