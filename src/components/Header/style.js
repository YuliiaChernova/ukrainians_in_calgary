import styled, { css } from 'styled-components';

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

  .header-full {
    display: block;
    font-size: ${({ theme }) => theme.textSizes.siteHeader.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.siteHeader.desktop.lineHeight};
    text-transform: uppercase;
    padding: 27px 0 27px 31px;
    a {
      color: ${({ theme }) => theme.colors.primaryText};
      text-decoration: none;
    }

    @media ${({ theme }) => theme.mediaQueries.tablets} {
      display: none;
    }
  }

  .header-small {
    display: none;
    width: 100px;

    @media ${({ theme }) => theme.mediaQueries.tablets} {
      display: flex;
      align-items: center;
      padding-left: 27px;
    }
  }
`;

export const NavBar = styled.div`
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
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.primaryText};
  }

  ${(props) => !props.dropdown && css`
  
    @media ${({ theme }) => theme.mediaQueries.tablets} {
      display: none;
    }
  `}

  ${(props) => props.dropdown && css`
    display: none;
    z-index: 1000;
    width: 100%;
    position: absolute;
    transform: scaleY(0);
    padding-bottom: 20px;
    transition: max-height .3s,transform .3s;
    transform-origin: top;
    overflow: auto;

    li {
      width: 100%;
      text-align: center;
      margin-right: 0;
    }

    a {
      padding: 15px 20px;
    }

    ${props.collapsed && css`
      transform: scaleY(1);
    `}
  `}
`;

export const MenuToggle = styled.div`
  font-size: 30px;
  border-width: 0;
  border-radius: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  display: none;
  justify-content: center;
  padding: .25em;
  cursor: pointer;
  border: 0 solid;

  @media ${({ theme }) => theme.mediaQueries.tablets} {
    display: flex;
  }
`;