import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavPanel = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  .header {
    font-size: ${({ theme }) => theme.textSizes.siteHeader.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.siteHeader.desktop.lineHeight};
    text-transform: uppercase;
    padding: 27px 0 27px 31px;
  }

  .nav-container {
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: normal;
    }
  
    li {
      display: block;
      list-style: none;
      padding: 0;
      line-height: normal;
    }
  
    a {
      transition: .4s;
      font-size: ${({ theme }) => theme.textSizes.navLink.desktop.fontSize};
      line-height: ${({ theme }) => theme.textSizes.navLink.desktop.lineHeight};
      color: ${({ theme }) => theme.colors.primaryText};
      text-decoration: none;
      text-transform: uppercase;
      padding: 39px 0 39px 0;
      margin: 0 15px 0 15px;
      display: block;
    }

    a:hover, a.active {
      &::before {
        content: '';
        z-index: 1;
        position: absolute;
        bottom: -1px;
        height: 2px;
        width: 80px;
        background-color: ${({ theme }) => theme.colors.primaryText};
      }
    }
  }
`;