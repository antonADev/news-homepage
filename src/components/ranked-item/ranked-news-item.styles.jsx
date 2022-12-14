import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColors, neutralColors } from '../../constants/styles';

// RankedItemWrapper, RankedItemImgContainer, Image, RankedItemTextContainer, NumberTitle, RankedItemHeader, RankedItemPara

export const RankedItemWrapper = styled(Link)`
  display: flex;
  gap: 1.5rem;
  text-decoration: none;

  :hover {
    h3 {
      color: ${primaryColors.softRed};
    }
  }
`;

export const RankedItemImgContainer = styled.div`
  max-width: 6.2rem;
  max-height: 8rem;
`;

export const Image = styled.img`
  height: auto;
  max-height: 130px;
  width: auto;
  max-width: 100px;
`;

export const RankedItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  line-height: 1.7;
`;
