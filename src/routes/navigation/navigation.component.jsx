import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/images/icon-menu.svg';
import { ReactComponent as Close } from '../../assets/images/icon-menu-close.svg';

import {
  Nav,
  LinkLogo,
  NavLink,
  LinkMenu,
  UnorderedLi,
  ListItem,
  Overlay,
  IconWrapper,
} from './navigation.styles';

import LogoComponent from '../../components/logo/logo.component';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Overlay isOpen={isOpen} />
      <Nav>
        <LinkLogo to='/'>
          <LogoComponent />
        </LinkLogo>

        <LinkMenu isOpen={isOpen}>
          <UnorderedLi>
            <ListItem>
              <NavLink to='/'>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/#'>New</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/#'>Popular</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/#'>Trending</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/#'>Categories</NavLink>
            </ListItem>
          </UnorderedLi>
        </LinkMenu>
        <IconWrapper
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}>
          {!isOpen ? <MenuIcon /> : <Close />}
        </IconWrapper>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
