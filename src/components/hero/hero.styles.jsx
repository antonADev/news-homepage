import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';
import { deviceMax, deviceMin } from '../../constants/device';

export const HeroWrapper = styled.div`
  max-width: 100vw;

  /*
  gap: 1.1rem; */
  /* & > *:not(p) {
    margin: 1.2rem 0;
  } */

  @media ${deviceMin.laptop} {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const HeroTextWrapper = styled.div`
  margin-top: 1.5rem;
  @media ${deviceMin.laptop} {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'header content';
    gap: 2rem;
    height: 100%;
    align-items: center;
  }
`;

export const HeroHeader = styled.h1`
  font-weight: 800;
  font-size: clamp(2.5rem, -0.875rem + 8.333vw, 3.3rem);
  line-height: 1;
`;

export const HeroContentContainer = styled.div`
  @media ${deviceMax.laptop} {
    & > * {
      margin: 1rem 0;
    }
  }

  @media ${deviceMin.laptop} {
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
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
  cursor: pointer;
  :hover {
    background-color: ${neutralColors.veryDarkBlue};
    transition: 0.4s;
  }
`;
