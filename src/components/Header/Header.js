import * as React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import {
  StyledHeader,
  NavPanel
} from './style';
import { MainContainer } from '../styles/global-styles';

const Header = () => (
  <StyledHeader>
    <MainContainer>
      <NavPanel>
        <div className="header">
          Українці в Калгарі
        </div>
        <div className="nav-container">
          <NavLinks />
        </div>
      </NavPanel>
    </MainContainer>
  </StyledHeader>
);

export default Header;