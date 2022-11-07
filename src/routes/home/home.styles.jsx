import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  & > * {
    margin: 0 0 3rem 0;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 500px 200px;
    gap: 2rem;
    grid-template-areas:
      'main news'
      'ranked ranked';
  }
`;
