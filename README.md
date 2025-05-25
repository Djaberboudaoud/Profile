# BOUDAOUD DJABER - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Engineer.

## Features

- 🌓 Automatic day/night mode based on time of day
- 💡 Interactive lamp animation with profile picture reveal
- 🗺️ Location map integration
- 📱 Fully responsive design
- 🎨 Custom stone-style theme
- 📄 CV download functionality
- 🚀 Smooth scrolling navigation
- 🎯 Project showcase with images and descriptions

## Technologies Used

- React.js
- Material-UI
- Framer Motion
- React Map GL
- Styled Components

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Mapbox token:
```
REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
```

4. Start the development server:
```bash
npm start
```

5. Build for production:
```bash
npm run build
```

## Required Assets

Before running the application, make sure to add the following assets to the `public` folder:

- `profile.jpg` - Your profile picture
- `cv.pdf` - Your CV file
- `stone-texture.jpg` - Stone texture background
- Project images:
  - `school-platform.jpg`
  - `ai-assistant.jpg`
  - `dashboard.jpg`

## Customization

- Update personal information in the components
- Modify the color scheme in `App.js`
- Add or remove projects in `Projects.js`
- Update the map coordinates in `Contact.js`

## License

MIT License 