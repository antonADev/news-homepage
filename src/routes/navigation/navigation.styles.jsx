import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { deviceMin } from '../../constants/device';
import { neutralColors, primaryColors } from '../../constants/styles';

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
  padding: 0.3rem 0 1.2rem 0;

  @media ${deviceMin.laptop} {
    padding: 3rem 0 2.7rem;
  }
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

  @media ${deviceMin.laptop} {
    display: none;
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  width: 70%;
  background-color: ${neutralColors.offWhite};
  transition: all 1s;

  @media ${deviceMin.laptop} {
    position: static;
    height: inherit;
    flex-direction: row;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${neutralColors.veryDarkBlue};
  :hover {
    color: ${primaryColors.softRed};
  }

  @media ${deviceMin.laptop} {
    font-size: 1rem;
    color: ${neutralColors.darkGrayishBlue};
  }
`;

export const UnorderedLi = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  padding-top: 8.5rem;

  @media ${deviceMin.laptop} {
    position: static;
    display: flex;
    flex-direction: row;
    padding-top: 0;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0.8rem 2rem;

  @media ${deviceMin.laptop} {
    margin-left: 0.3rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  z-index: 99;
  display: block;
  @media screen {
    @media ${deviceMin.laptop} {
      display: none;
    }
  }
`;
