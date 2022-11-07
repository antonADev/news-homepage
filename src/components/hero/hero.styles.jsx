import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';

export const HeroWrapper = styled.div`
  /* max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1.1rem; */
  & > *:not(p) {
    margin: 1.2rem 0;
  }
`;

export const HeroHeader = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1;
`;

export const HeroPara = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
`;

export const HeroButton = styled.button`
  background-color: ${primaryColors.softRed};
  color: ${neutralColors.offWhite};
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  letter-spacing: 0.3rem;
  padding: 1rem 2rem;
  text-align: center;
`;
