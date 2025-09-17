import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  LinearProgress,
  Paper,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Code,
  Psychology,
  Analytics,
  Storage,
  TrendingUp,
  DataObject,
  Cloud,
  Security,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const skillCategories = [
    { name: 'Programming', icon: <Code /> },
    { name: 'Machine Learning', icon: <Psychology /> },
    { name: 'Data Analysis', icon: <Analytics /> },
    { name: 'Big Data', icon: <Storage /> },
    { name: 'Deep Learning', icon: <TrendingUp /> },
    { name: 'NLP', icon: <DataObject /> },
    { name: 'Cloud & DevOps', icon: <Cloud /> },
    { name: 'Tools & Libraries', icon: <Security /> },
  ];

  const programmingSkills = [
    { name: 'Python', level: 95, color: '#3776AB' },
    { name: 'R', level: 85, color: '#276DC3' },
    { name: 'SQL', level: 90, color: '#E48E00' },
    { name: 'JavaScript', level: 75, color: '#F7DF1E' },
    { name: 'Java', level: 70, color: '#ED8B00' },
    { name: 'Scala', level: 65, color: '#DC322F' },
  ];

  const mlSkills = [
    { name: 'Scikit-learn', level: 92, color: '#F7931E' },
    { name: 'TensorFlow', level: 88, color: '#FF6F00' },
    { name: 'PyTorch', level: 85, color: '#EE4C2C' },
    { name: 'XGBoost', level: 90, color: '#337AB7' },
    { name: 'Keras', level: 87, color: '#D00000' },
    { name: 'LightGBM', level: 83, color: '#7CBB00' },
  ];

  const dataAnalysisSkills = [
    { name: 'Pandas', level: 95, color: '#130654' },
    { name: 'NumPy', level: 92, color: '#4DABCF' },
    { name: 'Matplotlib', level: 88, color: '#11557C' },
    { name: 'Seaborn', level: 85, color: '#000000' },
    { name: 'Plotly', level: 80, color: '#3F4F75' },
    { name: 'Tableau', level: 75, color: '#E97627' },
  ];

  const bigDataSkills = [
    { name: 'Apache Spark', level: 85, color: '#E25A1C' },
    { name: 'Hadoop', level: 80, color: '#FFCC00' },
    { name: 'Kafka', level: 75, color: '#231F20' },
    { name: 'Hive', level: 78, color: '#FDEE21' },
    { name: 'Airflow', level: 82, color: '#017CEE' },
    { name: 'Elasticsearch', level: 70, color: '#FED10A' },
  ];

  const deepLearningSkills = [
    { name: 'Neural Networks', level: 90, color: '#FF6B6B' },
    { name: 'CNN', level: 88, color: '#4ECDC4' },
    { name: 'RNN/LSTM', level: 85, color: '#45B7D1' },
    { name: 'Transformers', level: 82, color: '#96CEB4' },
    { name: 'GANs', level: 75, color: '#FFEAA7' },
    { name: 'AutoML', level: 80, color: '#DDA0DD' },
  ];

  const nlpSkills = [
    { name: 'BERT', level: 88, color: '#FF6B6B' },
    { name: 'GPT', level: 85, color: '#4ECDC4' },
    { name: 'Word2Vec', level: 90, color: '#45B7D1' },
    { name: 'SpaCy', level: 87, color: '#96CEB4' },
    { name: 'NLTK', level: 92, color: '#FFEAA7' },
    { name: 'Hugging Face', level: 83, color: '#DDA0DD' },
  ];

  const cloudSkills = [
    { name: 'AWS', level: 85, color: '#FF9900' },
    { name: 'Docker', level: 88, color: '#2496ED' },
    { name: 'Kubernetes', level: 75, color: '#326CE5' },
    { name: 'Azure', level: 80, color: '#0089D6' },
    { name: 'GCP', level: 78, color: '#4285F4' },
    { name: 'Terraform', level: 72, color: '#7B42BC' },
  ];

  const toolsSkills = [
    { name: 'Git', level: 92, color: '#F05032' },
    { name: 'Jupyter', level: 95, color: '#F37626' },
    { name: 'VS Code', level: 90, color: '#007ACC' },
    { name: 'PyCharm', level: 85, color: '#000000' },
    { name: 'PostgreSQL', level: 88, color: '#336791' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
  ];

  const skillData = [
    programmingSkills,
    mlSkills,
    dataAnalysisSkills,
    bigDataSkills,
    deepLearningSkills,
    nlpSkills,
    cloudSkills,
    toolsSkills,
  ];

  const radarData = [
    { skill: 'Programming', value: 85 },
    { skill: 'ML', value: 88 },
    { skill: 'Data Analysis', value: 90 },
    { skill: 'Big Data', value: 78 },
    { skill: 'Deep Learning', value: 85 },
    { skill: 'NLP', value: 87 },
    { skill: 'Cloud', value: 80 },
    { skill: 'Tools', value: 88 },
  ];

  const pieData = [
    { name: 'Machine Learning', value: 30, color: '#FF6B6B' },
    { name: 'Data Analysis', value: 25, color: '#4ECDC4' },
    { name: 'Programming', value: 20, color: '#45B7D1' },
    { name: 'Big Data', value: 15, color: '#96CEB4' },
    { name: 'Cloud & DevOps', value: 10, color: '#FFEAA7' },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
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
            Skills & Expertise
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
            My technical skills and expertise across various domains of data science and machine learning
          </Typography>
        </motion.div>

        {/* Skills Overview */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 4, minHeight: 450 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Skills Distribution
                </Typography>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 4, minHeight: 450 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Skills Radar
                </Typography>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#2196F3"
                      fill="#2196F3"
                      fillOpacity={0.3}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Skills Categories */}
        <Card sx={{ mb: 6, minHeight: 600 }}>
          <CardContent sx={{ p: 0 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  minWidth: 120,
                  fontWeight: 'bold',
                },
              }}
            >
              {skillCategories.map((category, index) => (
                <Tab
                  key={category.name}
                  label={category.name}
                  icon={category.icon}
                  iconPosition="start"
                />
              ))}
            </Tabs>

            <Box sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ResponsiveContainer width="100%" height={450}>
                      <BarChart
                        data={skillData[selectedTab]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="level" fill="#2196F3">
                          {skillData[selectedTab].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Proficiency Levels
                  </Typography>
                  {skillData[selectedTab].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              backgroundColor: skill.color,
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        {/* Additional Skills */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4, minHeight: 400 }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Certifications
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'AWS Certified Machine Learning - Specialty',
                    'Google Cloud Professional Data Engineer',
                    'Microsoft Certified: Azure Data Scientist Associate',
                    'IBM Data Science Professional Certificate',
                    'Deep Learning Specialization - Coursera',
                  ].map((cert, index) => (
                    <Paper key={index} sx={{ p: 2, backgroundColor: 'grey.50' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {cert}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4, minHeight: 400 }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Key Competencies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Statistical Analysis',
                    'Feature Engineering',
                    'Model Deployment',
                    'A/B Testing',
                    'Data Visualization',
                    'ETL Processes',
                    'API Development',
                    'Database Design',
                    'Version Control',
                    'Agile Methodologies',
                    'Problem Solving',
                    'Team Leadership',
                  ].map((skill) => (
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
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
