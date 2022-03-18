import React from 'react';
import FeaturedNews from '../FeaturedNews/FeaturedNews';
import './Home.css';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className='news-section'>
      <FeaturedNews news={data} />
      <div>News Articles</div>
      <div>News-images Articles</div>
    </div>
  )
}

export default Home