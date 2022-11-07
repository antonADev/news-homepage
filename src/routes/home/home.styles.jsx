import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  > * {
    margin: 0 0 3rem 0;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 500px 180px;
    gap: 2rem;
    row-gap: 4rem;
    grid-template-areas:
      'main main news'
      'ranked ranked ranked';
  }
`;
