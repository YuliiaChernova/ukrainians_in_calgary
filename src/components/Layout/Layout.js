import * as React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global-styles';
import Header from '../Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <main>{ children }</main>
    <GlobalStyle />
  </ThemeProvider>
);

export default Layout;