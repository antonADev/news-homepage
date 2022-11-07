import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';

import { device } from '../../constants/device';
// NewsWrapper,
//   NewsHeader,
//   NewsDetailWrapper,
//   NewsDetailHeader,
//   NewsDetailPara,

export const NewsWrapper = styled.div`
  background-color: ${neutralColors.veryDarkBlue};
  padding: 1.5rem 1.3rem 0 1.3rem;
  & > div:not(:last-child) {
    border-bottom: 1px solid ${neutralColors.darkGrayishBlue};
  }

  @media ${device.tablet} {
    grid-area: news;
    height: 100%;
  }
`;

export const NewsHeader = styled.h2`
  color: ${primaryColors.softOrange};
  font-size: 2rem;
`;
