import React from 'react';
import {
  NewsDetailsWrapper,
  NewsDetailWrapper,
  NewsDetailHeader,
  NewsDetailPara,
} from './news.item.styles';

const NewsItem = (props) => {
  const { title, content } = props;
  return (
    <NewsDetailsWrapper>
      {/* <NewsDetailWrapper> */}
      <NewsDetailHeader>{title}</NewsDetailHeader>
      <NewsDetailPara>{content}</NewsDetailPara>
      {/* </NewsDetailWrapper> */}
    </NewsDetailsWrapper>
  );
};

export default NewsItem;
