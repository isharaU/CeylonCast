# CeylonCast

CeylonCast is a modern, responsive weather forecast web application built with React and powered by the [WeatherAPI.com](https://www.weatherapi.com/). It allows users to search the weather by city or current location, provides auto-suggestions while typing, and displays current conditions along with a beautifully scrollable 24-hour forecast.

## Features

* **🔍 City Search:** Instantly search for weather by typing a city name.
* **✨ Auto-Suggestions:** Get real-time city name suggestions while typing.
* **📍 Location Weather:** Get weather for your current location using geolocation.
* **🌤️ Current Weather:** Displays temperature, weather condition, and location.
* **🕐 24-Hour Forecast:** Smooth horizontally scrollable forecast for the next 24 hours.
* **📱 Responsive Design:** Clean, modern UI optimized for desktop and mobile.
* **🚫 No Results Handling:** Friendly message and image if no results are found.

## Screenshots

<img src="./public/ceyloanCast_ss.png" alt="CeylonCast Screenshot" style="width: 300px;" />

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/isharaU/CeylonCast.git
   cd CeylonCast
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up your WeatherAPI key:**

   * Create a `.env` file in the root directory.
   * Add your API key:

     ```
     VITE_API_KEY=your_weatherapi_key_here
     ```
   * Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/).

4. **Start the development server:**

   ```sh
   npm run dev
   ```

5. **Open your browser and visit:**

   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
  components/        # React components (Search, CurrentWeather, HourlyForecast, NoResults)
  hooks/             # Custom hooks (useWeather)
  utils/             # API and helper functions (weatherService)
  index.css          # Global styles
  App.jsx            # Main component
  main.jsx           # Entry point
public/
  index.html         # Root HTML
```

## Customization

* **Styling:** All styles are in `src/index.css`. Easily tweak fonts, colors, and layout.
* **Icons:** Default icons are in `public/images/`, feel free to replace them.

## Deployment

CeylonCast is deployed live on [Vercel](https://vercel.com/), which offers blazing-fast load speeds and smooth hosting.

To build for production:

```sh
npm run build
```

## Acknowledgements

* Thanks to [WeatherAPI.com](https://www.weatherapi.com/) for providing a powerful and free weather API! 💙

## License

This project is licensed under the MIT License.

---


