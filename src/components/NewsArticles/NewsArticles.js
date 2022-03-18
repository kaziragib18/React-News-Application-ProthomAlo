import React from 'react';
import './NewsArticles.css';

const NewsArticles = ({ title, description }) => {
  const DisplayNews = description.substr(0, 100).concat('...');

  return (
    <div className='articles'>
      <h4 className='article-title'>{title}</h4>
      <p className='demo'>{DisplayNews}</p>
    </div>
  )
}

export default NewsArticles