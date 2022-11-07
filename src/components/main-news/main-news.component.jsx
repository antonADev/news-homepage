import React from 'react';

import { MainNewsWrapper } from './main-news.styles';

import desktopImage from '../../assets/images/image-web-3-desktop.jpg';
import mobileImage from '../../assets/images/image-web-3-mobile.jpg';

const MainNews = () => {
  return (
    <MainNewsWrapper>
      <picture>
        <source srcSet={desktopImage} media='(min-width:768px)' />
        <img style={{ maxWidth: '100%' }} src={mobileImage} alt='newsImage' />
      </picture>
    </MainNewsWrapper>
  );
};

export default MainNews;
