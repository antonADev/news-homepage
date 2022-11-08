import styled from 'styled-components';
import { deviceMin } from '../../constants/device';

export const RankedNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${deviceMin.laptop} {
    grid-area: ranked;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
