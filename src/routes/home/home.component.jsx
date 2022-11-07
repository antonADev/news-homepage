import React from 'react';

import { Main } from './home.styles';

import Hero from '../../components/hero/hero.component';
import News from '../../components/news-container/news-container.component';
import RankedNews from '../../components/ranked-container/ranked-news-container.component';

const Home = () => {
  return (
    <Main>
      <Hero />
      <News />
      <RankedNews />
    </Main>
  );
};

export default Home;
