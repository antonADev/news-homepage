import React from 'react';
import NewsItem from '../news-item/news-item.component';
import { NewsWrapper, NewsHeader } from './news-container.styles';

const newsData = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    content: `Will hydrogen-fueled cars ever catch up to EV's?`,
    url: '/',
  },
  {
    id: 2,
    title: 'The Downside of AI Artistry',
    content: `What are the possible adverse effects of on-demand AI image generation?`,
    url: '/',
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    content: `Private funding by VC firms is down 50% YOY. We take a look at what that means`,
    url: '/',
  },
];

const News = () => {
  return (
    <NewsWrapper>
      <NewsHeader>New</NewsHeader>
      {newsData.map((news) => (
        <NewsItem
          key={news.id}
          title={news.title}
          content={news.content}
          url={news.url}
        />
      ))}
    </NewsWrapper>
  );
};

export default News;
