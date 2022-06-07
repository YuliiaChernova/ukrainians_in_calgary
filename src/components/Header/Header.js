import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import NavLinks from '../NavLinks/NavLinks';

import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { FaBars } from '@react-icons/all-files/fa/FaBars';

import {
  StyledHeader,
  NavPanel,
  MenuToggle,
  NavBar
} from './style';
import { MainContainer } from '../styles/global-styles';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleMenu = () => setIsCollapsed(!isCollapsed);

  return (
    <StyledHeader>
      <MainContainer>
        <NavPanel>
          <div className="header-full">
            <Link to="/">Українці в Калгарі</Link>
          </div>
          <div className="header-small">
            <Link to="/">
              <StaticImage
                layout="fixed"
                width={100}
                placeholder="blurred"
                alt="ua in ca logo"
                src="../../images/logo.jpg"
              />
            </Link>
          </div>
          <MenuToggle onClick={toggleMenu}>
            {
              isCollapsed ? <FaTimes /> : <FaBars />
            }
          </MenuToggle>
          <NavBar>
            <NavLinks />
          </NavBar>
        </NavPanel>
        <NavBar collapsed={isCollapsed} dropdown>
          <NavLinks />
        </NavBar>
      </MainContainer>
    </StyledHeader>
  )
};

export default Header;