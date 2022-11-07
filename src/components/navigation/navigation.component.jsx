import React, { useState } from 'react';
import { ReactComponent as BrandLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icon-menu.svg';
import { ReactComponent as Close } from '../../assets/images/icon-menu-close.svg';

import { Nav, LinkMenu, Overlay, IconWrapper } from './navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Overlay isOpen={isOpen} />
      <Nav>
        <BrandLogo />
        <LinkMenu isOpen={isOpen}>
          <ul>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='/#'>New</a>
            </li>
            <li>
              <a href='/#'>Popular</a>
            </li>
            <li>
              <a href='/#'>Trending</a>
            </li>
            <li>
              <a href='/#'>Categories</a>
            </li>
          </ul>
        </LinkMenu>
        <IconWrapper
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}>
          {!isOpen ? <MenuIcon /> : <Close />}
        </IconWrapper>
      </Nav>
    </>
  );
};

export default Navigation;
