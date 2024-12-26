# News Updater

A simple, dynamic web application that fetches and displays the latest news headlines. This project uses HTML, CSS, and JavaScript, along with the [NewsAPI](https://newsapi.org/) for fetching news articles.

## Features
- Fetches the latest headlines from NewsAPI.
- Displays news articles dynamically, including titles and descriptions.
- Links each article title to the original source.
- Refreshes automatically every minute to keep the news updated.
- Styled with a clean and professional design.

## Prerequisites
1. A valid API key from [NewsAPI](https://newsapi.org/).
2. Basic knowledge of web technologies (HTML, CSS, and JavaScript).

## Project Structure
```
News-Feed-Web/
|-- index.html       # Main HTML file
|-- styles.css       # Stylesheet for the project
|-- script.js        # JavaScript file for fetching and displaying news
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/KelvinCKFoo/News-Feed-Web.git
cd news-updater
```

### 2. Set Up Your API Key
1. Obtain your API key from [NewsAPI](https://newsapi.org/).
2. Open `script.js` and replace `your_api_key` with your actual API key:
   ```javascript
   const apiKey = 'your_api_key';
   ```

### 3. Run Locally
1. Open `index.html` in your browser.
2. Ensure your internet connection is active to fetch the latest news.

**Note:** Due to CORS restrictions, this application needs to run locally. Simply cloning the repository and running it from your local machine will ensure full functionality.

## Troubleshooting

### Error: "Error loading news"
This could occur due to:
1. **Invalid API Key:** Double-check your API key in `script.js`.
2. **Network Issues:** Ensure your internet connection is active.
3. **Browser Security:** Running directly from GitHub Pages may cause CORS issues. Always run the application locally for full functionality.

## Deployment
While this project is designed to run locally, you can still deploy it to GitHub Pages or other hosting platforms for static websites. However, note that the API may not function correctly due to CORS restrictions.



