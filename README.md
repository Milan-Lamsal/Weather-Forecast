# Modern Weather App 🌦️

A beautiful, responsive weather application that provides real-time weather information with a modern glass-morphic UI design.

![Weather App Demo](assests/demo-screenshot.png)

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Beautiful UI**: Modern glass-morphic design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Unit Conversion**: 
  - Temperature: Toggle between Celsius (°C) and Fahrenheit (°F)
  - Wind Speed: Toggle between Kilometers per hour (KPH) and Miles per hour (MPH)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Clear error messages for invalid cities or network issues
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Live Demo

[View Live Demo](your-live-demo-url) - Coming soon!

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- OpenWeatherMap API
- Google Fonts (Poppins)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Milan-Lamsal/Weather-Forecast.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-Forecast
   ```

3. Create a `config.js` file in the root directory:
   ```javascript
   const config = {
       apiKey: 'YOUR_API_KEY_HERE'
   };
   ```

4. Get your API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Copy your API key
   - Replace `'YOUR_API_KEY_HERE'` in `config.js` with your actual API key

5. Open `index.html` in your browser or use a local server.

## 💻 Usage

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View the current weather information:
   - Temperature
   - Humidity
   - Wind Speed
   - Weather Condition (with icon)
4. Toggle between:
   - Dark/Light mode using the theme switch
   - °C/°F using the temperature unit toggle
   - KPH/MPH using the wind speed unit toggle

## 🎨 UI Features

- Glass-morphic design
- Responsive layout
- Smooth transitions
- Dynamic weather icons
- Interactive toggles
- Mobile-first approach

## 📱 Responsive Design

- Desktop: Full layout with optimal spacing
- Tablet: Adjusted layout with maintained functionality
- Mobile: Compact design with easy-to-tap buttons
- Small Devices: Further optimized for smaller screens

## 🔒 Security

- API key is stored in a separate config file (`config.js`)
- Config file is included in `.gitignore` to prevent accidental exposure
- Input sanitization for city search:
  - Removes special characters and excess whitespace
  - Converts to proper case (e.g., "new york" → "New York")
  - Validates input length (2-50 characters)
  - Prevents SQL injection and XSS attacks
- Error handling for API requests with user-friendly messages
- Rate limiting to prevent API abuse

## 🔧 Configuration

The app uses the following configuration options:

```javascript
// config.js
const config = {
    apiKey: 'YOUR_API_KEY_HERE'
};
```

## 🌐 API Reference

This project uses the OpenWeatherMap API:
- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- Units: Metric (converted as needed)
- Parameters:
  - `q`: City name
  - `appid`: API key
  - `units`: Metric

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License:

```
MIT License

Copyright (c) 2024 Milan Lamsal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Weather icons from [OpenWeatherMap Icons](https://openweathermap.org/weather-conditions)
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
- Glass-morphism design inspired by [CSS Glass](https://css.glass/)
- Color scheme generated with [Coolors](https://coolors.co/)
- Special thanks to the open-source community for inspiration and resources

## 📧 Contact

Milan Lamsal - [milan123lamsal@gmail.com](mailto:milan123lamsal@gmail.com)

Project Link: [https://github.com/Milan-Lamsal/Weather-Forecast](https://github.com/Milan-Lamsal/Weather-Forecast)

---

Made with ❤️ by Milan Lamsal