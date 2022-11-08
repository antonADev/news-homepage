import React from 'react';
import {
  NewsDetailsWrapper,
  NewsDetailHeader,
  NewsDetailPara,
} from './news.item.styles';

const NewsItem = (props) => {
  const { title, content, url } = props;
  return (
    <NewsDetailsWrapper to={url}>
      <NewsDetailHeader>{title}</NewsDetailHeader>
      <NewsDetailPara>{content}</NewsDetailPara>
    </NewsDetailsWrapper>
  );
};

export default NewsItem;
