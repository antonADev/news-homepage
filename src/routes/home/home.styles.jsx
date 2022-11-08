import styled from 'styled-components';
import { deviceMin } from '../../constants/device';
export const Main = styled.main`
  width: 100%;
  height: 100%;
  > * {
    margin: 0 0 3rem 0;
  }

  @media ${deviceMin.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 510px 180px;
    gap: 2rem;
    row-gap: 4.5rem;
    grid-template-areas:
      'main main news'
      'ranked ranked ranked';
  }
`;
