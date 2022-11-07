import React from 'react';

import {
  HeroWrapper,
  HeroTextWrapper,
  HeroHeader,
  HeroContentContainer,
  HeroPara,
  HeroButton,
} from './hero.styles';

import desktopImage from '../../assets/images/image-web-3-desktop.jpg';
import mobileImage from '../../assets/images/image-web-3-mobile.jpg';

const Hero = () => {
  return (
    <HeroWrapper>
      <picture>
        <source srcSet={desktopImage} media='(min-width:768px)' />
        <img style={{ maxWidth: '100%' }} src={mobileImage} alt='newsImage' />
      </picture>
      <HeroTextWrapper>
        <HeroHeader>The Bright Future of Web 3.0?</HeroHeader>
        <HeroContentContainer>
          <HeroPara>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfillind its promise?
          </HeroPara>
          <HeroButton>read more</HeroButton>
        </HeroContentContainer>
      </HeroTextWrapper>
    </HeroWrapper>
  );
};

export default Hero;
