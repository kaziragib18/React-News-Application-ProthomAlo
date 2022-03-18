import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import NewsArticles from '../NewsArticles/NewsArticles';
import './FeaturedNews.css';

const FeaturedNews = ({ news }) => {
  if (news.length > 1) {
    const { title, description, photo } = news[6];
    return (
      <Router>
        <div className='top-news'>
          <Link to='#' style={{ textDecoration: 'none' }}>
            <NewsArticles title={title} description={description} />
          </Link>
          <img className='top-image' src={`${photo}`} alt='' />
          <Link to='#' style={{ textDecoration: 'none' }}>
            <NewsArticles title={news[7].title} description={news[7].description} />
          </Link>
        </div>
      </Router>
    )
  }
}

export default FeaturedNews