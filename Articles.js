import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const initialArticles = [
  {
    id: 1,
    title: "Whispers of Giants: A Journey Through the Redwood Forests",
    blogInfo: "In the heart of California, where the fog weaves through the ancient trunks and the sunlight filters down in emerald beams, lies a sanctuary of nature's own making: the Redwood Forests. These towering giants, predominantly found in the coastal regions, are not just trees but living relics of our planet's ancient past, stretching skyward to heights over 350 feet, making them some of the tallest living beings on Earth."
  },
  {
    id: 2,
    title: "A Legacy Rooted in Time",
    blogInfo: "The Redwood Forests, predominantly consisting of Coast Redwoods (Sequoia sempervirens) and their inland cousins, the Giant Sequoias (Sequoiadendron giganteum), have thrived on the Pacific Coast for over 20 million years. These forests create an ecosystem that is both complex and interdependent, providing a habitat for a diverse array of wildlife, including the northern spotted owl, black-tailed deer, and the elusive Pacific fisher."
  },
  {
    id: 3,
    title: "Sapplings in the willows",
    blogInfo: "there are several big sapplings inside the willows."
  }
]

export const Articles = () => {
  
  const [articles, setArticles] = useState(initialArticles);

  const ArticleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  }
  return (
    <ul>
    {articleArray.map((article, index) => (
        <li id={article.index}>
        <article id={article.id}>
          <h2>{article.title}</h2>
          <p>{article.blogInfo}</p>
          <button onClick={() => ArticleDelete(article.id)}>Delete Article</button>
        </article>
        </li>
    ))}
    </ul>
    )
};

const container = document.getElementById('articles-container');
ReactDOM.render(<Articles />, container);

export default Articles