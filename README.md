# Weather Boy 🌤️

A modern, mobile-first weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather updates, hourly forecasts, and 7-day predictions with a clean, intuitive interface.

## Features

- 🌍 **Location Search**: Search for any city worldwide
- 📍 **Geolocation**: Automatically detect your current location
- 🌡️ **Current Weather**: Real-time temperature, humidity, and wind speed
- ⏰ **Hourly Forecast**: 24-hour detailed forecast
- 📅 **7-Day Forecast**: Week-long weather predictions
- 📱 **Mobile-First Design**: Optimized for all screen sizes
- 🎨 **Modern UI**: Clean, animated interface with smooth transitions
- 🚀 **Fast & Lightweight**: Built with Vite for optimal performance

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Open-Meteo API** - Weather data
- **Lucide React** - Icons
- **date-fns** - Date formatting

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd WeatherBoy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Allow Location Access**: On first visit, allow browser location access for automatic weather display
2. **Search Cities**: Use the search bar to find weather for any city
3. **View Forecasts**: Scroll to see hourly and daily forecasts
4. **Switch Locations**: Click the location button to return to your current location

## API

This app uses the [Open-Meteo](https://open-meteo.com/) API, which is free and doesn't require an API key.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Credits

- Weather data: [Open-Meteo](https://open-meteo.com/)
- Icons: [Lucide](https://lucide.dev/)

---

Made with ☀️ by Weather Boy
