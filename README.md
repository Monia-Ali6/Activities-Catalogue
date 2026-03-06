# Activities Catalogue

**Video Demo:** 

## Description

A dynamic, responsive website designed to organize teaching activities and resources for Grade 1 students following the Wonders McGraw-Hill curriculum.

### Features

- **Dynamic Content Generation**: All 6 curriculum units are generated from a centralized data file using JavaScript
- **Progress Tracking**: Visual progress bars that automatically calculate completion (Unit 1: 17%, Unit 2: 33%, etc.)
- **Responsive Design**: Fully mobile-friendly with card-style layouts for small screens
- **Interactive Elements**: 
  - Hover animations on flower logo
  - Image zoom on hover
  - Smooth scroll-to-top button
  - Anchor navigation with Table of Contents
- **Organized Structure**: Units divided by phonetic concepts (short vowels, blends, digraphs, etc.)

### Files

- `index.html` - Homepage with introduction and accordion menu
- `grade1.html` - Main resources page with dynamically loaded units
- `style.css` - All styling including responsive mobile design
- `app.js` - JavaScript for dynamic content generation and interactivity
- `data.js` - Centralized data structure for all teaching resources
- `images/` - Folder containing icons image assets
- `activity` - Folder containing all images in grade 1 html

### Design Decisions

**Why JavaScript for dynamic generation?**
Instead of repeating HTML structure 8 times, I chose to generate unit sections programmatically. This makes the code more maintainable and scalable - adding new units only requires updating the data file.

**Why progress bars?**
The "loading screen" style progress bars provide visual feedback on curriculum completion, making it easy to see how far along students are in the program.

**Why mobile-first approach?**
As a teacher, I often access materials on my phone during class. The responsive design ensures all content is accessible on any device.

### Technologies Used

- HTML5
- CSS3 (Flexbox, Media Queries for responsive design)
- JavaScript (ES6)
- Bootstrap 5.2.3 (for navigation)
- GitHub Pages (hosting)

### Live Site

https://monia-ali6.github.io/Activities-Catalogue/

---

*This project was created as the final project for CS50x 2026.*
