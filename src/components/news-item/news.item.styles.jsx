import styled from 'styled-components';
import { neutralColors } from '../../constants/styles';

export const NewsDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1.7rem 0;
`;

export const NewsDetailWrapper = styled.div``;

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
