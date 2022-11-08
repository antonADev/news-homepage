import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';

import { deviceMin } from '../../constants/device';

export const NewsWrapper = styled.div`
  background-color: ${neutralColors.veryDarkBlue};
  padding: 1.7rem 1.3rem 0 1.3rem;
  & > a:not(:last-child) {
    border-bottom: 1px solid ${neutralColors.darkGrayishBlue};
  }

  @media ${deviceMin.laptop} {
    grid-area: news;
    height: 100%;
  }
`;

export const NewsHeader = styled.h2`
  color: ${primaryColors.softOrange};
  font-size: clamp(2rem, -0.875rem + 8.333vw, 2.5rem);
`;
