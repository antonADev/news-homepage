import styled, { keyframes } from 'styled-components';
import { neutralColors } from '../../constants/styles';

const backgroundIn = keyframes`
0% {
    scale: 0 0.005;
  }
  33% {
    scale: 1 0.005;
  }
  66%,
  100% {
    scale: 1 1;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 100vw;
  background-color: ${neutralColors.veryDarkBlue};
  opacity: 0.4;
  animation: ${backgroundIn} 2s;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const LinkMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
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
