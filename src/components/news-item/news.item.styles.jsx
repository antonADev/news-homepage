import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { neutralColors, primaryColors } from '../../constants/styles';

export const NewsDetailsWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1.7rem 0;
  text-decoration: none;
  :hover {
    h3 {
      color: ${primaryColors.softOrange};
    }
  }
`;

export const NewsDetailHeader = styled.h3`
  color: ${neutralColors.offWhite};
  font-size: 1.25rem;
  letter-spacing: 0.02rem;
  margin-bottom: 0.5rem;
`;

export const NewsDetailPara = styled.p`
  color: ${neutralColors.grayishBlue};
  line-height: 1.8;
  letter-spacing: 0.01rem;
`;
