import {Button} from '@mui/material';
import './App.css';
import News from './component/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9e59d71e1b2c4ce4b1217da6272d7222')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => console.error('Error fetching news:', error));
  }
  , []);

  return (
    <div>
      <h2>Top Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
