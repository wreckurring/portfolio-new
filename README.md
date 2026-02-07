# 🚀 Modern Developer Portfolio 2026

A cutting-edge, production-quality personal developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features a futuristic design aesthetic with cyan/electric blue accents, smooth animations, and fully responsive layout.

## ✨ Features

- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS + Framer Motion
- **Unique Design**: Refined futuristic aesthetic with bold geometric elements
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with lazy-loaded images and optimized animations
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Clean Architecture**: Well-organized component structure and reusable code

## 🎨 Sections

1. **Navbar** - Sticky navigation with blur effect and mobile menu
2. **Hero** - Animated introduction with gradient background
3. **About** - Personal bio with skills grid
4. **Experience** - Vertical timeline showcasing work history
5. **Projects** - Card-based grid with featured projects
6. **Contact** - Contact form with social media links
7. **Footer** - Minimal footer with tech stack info

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Modern web browser

### Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ScrollProgress.jsx
├── sections/         # Main page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── data/            # Static data files
│   ├── projects.js
│   ├── experience.js
│   └── skills.js
├── hooks/           # Custom React hooks
│   └── useScrollAnimation.js
├── styles/          # Global styles
│   └── index.css
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.jsx`)
   - Change name, title, and description
   - Update social media links

2. **About Section** (`src/sections/About.jsx`)
   - Modify personal bio
   - Update profile image

3. **Projects** (`src/data/projects.js`)
   - Add/edit project details
   - Update images, descriptions, and links

4. **Experience** (`src/data/experience.js`)
   - Update work history
   - Modify job descriptions and technologies

5. **Skills** (`src/data/skills.js`)
   - Edit skill categories and items

### Color Scheme

Modify colors in `tailwind.config.js`:
```javascript
colors: {
  accent: {
    cyan: '#00f0ff',    // Primary accent
    blue: '#0066ff',    // Secondary accent
    purple: '#7700ff',  // Tertiary accent
  }
}
```

### Fonts

Current fonts (loaded from Google Fonts):
- **Display**: Orbitron - Bold, futuristic headings
- **Body**: Sora - Clean, modern text
- **Mono**: JetBrains Mono - Code snippets

Change fonts in `src/styles/index.css` and `tailwind.config.js`.

## 🚀 Performance Tips

- Images are optimized through Unsplash CDN
- Animations use hardware acceleration
- Lazy loading for below-fold content
- Minimal bundle size with tree-shaking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Lucide React
- Fonts from Google Fonts
- Images from Unsplash

---

**Built with ❤️ and ⚡ by Alex Chen**

For questions or feedback, reach out at alex@example.com
