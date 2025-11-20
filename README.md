# EG America HR Portal

A modern, responsive single-page application built with React.js for HR services and employee management.

## Features

- **Employee Self-Service Portal** - Access personal information, payroll, and benefits
- **Benefits Management** - Manage health insurance and retirement plans
- **Training & Development** - Access learning resources and track professional development
- **Performance Management** - Goal setting, performance tracking, and reviews
- **HR Support** - Submit tickets and access HR documentation
- **Company Communications** - Stay updated with announcements and news

## Technology Stack

- **Frontend**: React.js 18.x
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Custom Properties
- **Deployment**: Azure Web Apps

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Create a production build:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment to Azure Web Apps

1. Build the project: `npm run build`
2. Deploy the contents of the `dist` folder to Azure Web Apps
3. Ensure Node.js 18.x is selected as the runtime
4. The `web.config` file in the `public` directory handles routing for the SPA

### Azure Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x
- **Start Command**: Not required (static site)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ServicesGrid.jsx # Services cards grid
│   ├── Features.jsx    # Features section
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Styling

The application uses modern CSS with:
- CSS Custom Properties (CSS Variables)
- Flexbox and CSS Grid layouts
- Responsive design principles
- Modern color scheme and typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to EG America.
