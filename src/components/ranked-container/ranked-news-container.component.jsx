import React from 'react';

import { RankedNewsWrapper } from './ranked-news-container.styles';

import RankedItem from '../ranked-item/ranked-news-item.component';
import firstImage from '../../assets/images/image-retro-pcs.jpg';
import secondImage from '../../assets/images/image-top-laptops.jpg';
import thirdImage from '../../assets/images/image-gaming-growth.jpg';

const newsData = [
  {
    id: 1,
    title: 'Reviving Retro PCs',
    content: `What happens when old PCs are given modern upgrades?`,
    imageUrl: firstImage,
  },
  {
    id: 2,
    title: 'Top 10 Laptops of 2022',
    content: `Our best picks for various needs and budgets`,
    imageUrl: secondImage,
  },
  {
    id: 3,
    title: 'The Growth of Gaming',
    content: `How the pandemic has sparked fresh opportunities`,
    imageUrl: thirdImage,
  },
];

const RankedNews = () => {
  return (
    <RankedNewsWrapper>
      {newsData.map((news) => (
        <RankedItem
          key={news.id}
          id={news.id}
          title={news.title}
          content={news.content}
          imageUrl={news.imageUrl}
        />
      ))}
    </RankedNewsWrapper>
  );
};

export default RankedNews;
