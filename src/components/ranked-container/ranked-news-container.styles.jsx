import styled from 'styled-components';
import { device } from '../../constants/device';

export const RankedNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tablet} {
    grid-area: ranked;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
