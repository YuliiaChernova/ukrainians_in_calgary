import styled from 'styled-components';

export const ReadMoreContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  >div {
    width: 100%;
    max-width: 304px;
    margin-bottom: 64px;
    text-align: center;
    cursor: pointer;
  }
  >div {
    margin-right: 28px;
  }
  >div:nth-child(3) {
    margin-right: 0;
  }
  a {
    font-size: ${({ theme }) => theme.textSizes.articleDescription.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.articleDescription.desktop.lineHeight};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
    justify-content: center;
  }
`;