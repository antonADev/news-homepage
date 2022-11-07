import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';

// RankedItemWrapper, RankedItemImgContainer, Image, RankedItemTextContainer, NumberTitle, RankedItemHeader, RankedItemPara

export const RankedItemWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const RankedItemImgContainer = styled.div`
  max-width: 6rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const RankedItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NumberTitle = styled.p`
  color: ${neutralColors.grayishBlue};
  font-size: 2rem;
  font-weight: 700;
`;

export const RankedItemHeader = styled.h3`
  font-weight: 800;
`;

export const RankedItemPara = styled.p`
  line-height: 1.8;
`;
