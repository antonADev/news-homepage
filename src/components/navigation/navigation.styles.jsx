import styled from 'styled-components';
import { neutralColors, primaryColors } from '../../constants/styles';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const Menu = styled.menu`
//   height: 100vh;
//   width: 100vw;
//   background-color: hsl(236, 13%, 42%, 0.2);
//   display: flex;
//   justify-content: end;
// `;
// export const Overlay = styled.div`
//   position: absolute;
//   height: 100vh;
//   width: 100vw;
//   background-color: hsl(236, 13%, 42%);
//   opacity: 0.4;
// `;
export const LinkMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-300px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 70%;
  background-color: ${neutralColors.offWhite};
  transition: all 1s;

  * > li {
    list-style: none;
    margin: 0.8rem 2rem;
  }

  * > li a {
    font-size: 1.1rem;
    text-decoration: none;
    color: ${neutralColors.veryDarkBlue};
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 0;
    padding-top: 8.5rem;
  }

  @media screen and (min-width: 768px) {
    position: static;
    height: inherit;
    flex-direction: row;
    ul {
      position: static;
      display: flex;
      flex-direction: row;
      padding-top: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  z-index: 99;
  display: block;
  @media screen {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
