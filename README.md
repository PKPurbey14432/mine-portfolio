# Data Science Portfolio

A modern, interactive portfolio website built with React.js specifically designed for data scientists and machine learning engineers. This portfolio showcases projects, skills, and expertise in an engaging and professional manner.

## 🚀 Features

### ✨ Interactive Design
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Modern UI**: Clean, professional design using Material-UI components
- **Dark/Light Theme**: Customizable theme system

### 📊 Data Visualization
- **Interactive Charts**: Skills visualization using Recharts
- **Progress Bars**: Animated skill proficiency indicators
- **Radar Charts**: Multi-dimensional skill assessment
- **Pie Charts**: Skills distribution overview

### 🎯 Portfolio Sections
- **Hero Section**: Animated introduction with rotating text
- **About**: Personal information, experience timeline, and education
- **Projects**: Interactive project showcase with filtering and detailed views
- **Skills**: Comprehensive skills visualization with categories
- **Contact**: Functional contact form with social links

### 🔧 Technical Features
- **React Router**: Smooth navigation between sections
- **Material-UI**: Professional component library
- **Framer Motion**: Advanced animations and transitions
- **Recharts**: Interactive data visualization
- **Responsive Design**: Mobile-first approach

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Styling**: CSS3 with custom animations
- **Icons**: Material-UI Icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd data-science-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🏗️ Project Structure

```
data-science-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component
│   │   ├── Home.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Projects.js        # Projects showcase
│   │   ├── Skills.js          # Skills visualization
│   │   └── Contact.js         # Contact form
│   ├── App.js                 # Main app component
│   ├── App.css                # Custom styles
│   └── index.js               # App entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

1. **Home.js**: Update name, title, and introduction
2. **About.js**: Modify personal info, experience, and education
3. **Projects.js**: Add your own projects with details
4. **Skills.js**: Update skills and proficiency levels
5. **Contact.js**: Update contact information and social links

### Styling
- Modify `src/App.css` for custom CSS
- Update theme colors in `src/App.js`
- Customize Material-UI theme in the ThemeProvider

### Content
- Replace placeholder images with your own
- Update project descriptions and links
- Modify skill categories and proficiency levels
- Add your own certifications and achievements

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Streamlined navigation with mobile-first design

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts to deploy

## 📊 Performance Optimization

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Optimized images for fast loading
- **Code Splitting**: Automatic code splitting with React Router
- **Minification**: Production build includes minified code

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Built with ❤️ using React.js and Material-UI**
