const apiKey = 'Your News Api Key';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;



async function fetchNews() {

    try {

        const response = await fetch(apiUrl);

        const data = await response.json();

        displayNews(data.articles);

    } catch (error) {

        console.error('Error fetching news:', error);

        document.getElementById('news-container').innerHTML = '<p>Error loading news.</p>';

    }

}



function displayNews(articles) {

    const container = document.getElementById('news-container');

    container.innerHTML = '';

    articles.forEach(article => {

        const newsItem = document.createElement('div');

        newsItem.className = 'news-item';

        newsItem.innerHTML = `

            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>

            <p>${article.description || 'No description available.'}</p>

        `;

        container.appendChild(newsItem);

    });

}



// Fetch news initially and set an interval to refresh every minute

fetchNews();

setInterval(fetchNews, 60000); // 60000 ms = 1 minute
