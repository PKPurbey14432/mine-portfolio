# Portfolio Configuration Guide

This guide explains how to easily update your portfolio's personal information, contact details, and other configurable content.

## Quick Configuration

All personal information is now centralized in one file: `src/config/personalInfo.js`

## What You Can Update

### Personal Details
- **Name**: Your full name
- **Title**: Your professional title
- **Age**: Your age
- **Location**: Your city, state, country
- **Experience**: Years of experience
- **Degree**: Your highest degree

### Contact Information
- **Email**: Your email address
- **Phone**: Your phone number
- **Location Link**: Google Maps link for your location

### Social Media & Professional Links
- **LinkedIn**: Your LinkedIn profile URL
- **GitHub**: Your GitHub profile URL
- **Twitter**: Your Twitter profile URL

### CV/Resume
- **CV Link**: Link to your CV/Resume (Google Drive, Dropbox, etc.)

### Profile Image
- **Profile Image**: URL to your profile picture

### Home Background
- **Home Background Image**: URL to your home page background image

### Content
- **Description**: Your personal description/bio
- **Key Skills**: Array of your key technical skills
- **Work Experience**: Your work history
- **Education**: Your educational background
- **Technical Skills**: Detailed skills with proficiency levels

## How to Update

1. Open `src/config/personalInfo.js`
2. Find the section you want to update
3. Change the values as needed
4. Save the file
5. Your changes will automatically appear in the portfolio

## Example Updates

### Update Email
```javascript
email: 'your.email@example.com',
```

### Update LinkedIn
```javascript
linkedin: 'https://linkedin.com/in/your-profile',
```

### Update CV Link
```javascript
cvLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
```

### Update Profile Image
```javascript
profileImage: 'https://your-image-url.com/profile.jpg',
```

### Update Home Background Image
```javascript
homeBackgroundImage: 'https://your-image-url.com/background.jpg',
```

## File Structure

```
src/
├── config/
│   └── personalInfo.js    ← Update this file
├── components/
│   ├── About.js           ← Uses personalInfo
│   ├── Contact.js         ← Uses personalInfo
│   └── ...                ← Other components
```

## Benefits

- ✅ **Easy Updates**: Change information in one place
- ✅ **Consistent**: All components use the same data
- ✅ **Maintainable**: No need to search through multiple files
- ✅ **Professional**: Easy to customize for different clients/jobs

## Notes

- The CV download button will automatically use your configured CV link
- All social media links will automatically update
- Contact information is automatically formatted (phone numbers, email links)
- Profile image will update across all components

## Support

If you need help updating specific fields or have questions about the configuration, refer to the comments in `personalInfo.js` or check the component files for usage examples.
