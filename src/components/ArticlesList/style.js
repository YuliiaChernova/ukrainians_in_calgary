import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const SectionName = styled.h2`
  font-size: ${({ theme }) => theme.textSizes.sectionName.desktop.fontSize};
  line-height: ${({ theme }) => theme.textSizes.sectionName.desktop.lineHeight};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  padding-top: 48px;
`;

export const ArticlesContainer = styled.div`
  width: 100%;
  max-width: 640px;
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
  >div:nth-child(2n + 1) {
    margin-right: 28px;
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

export const ContentImage = styled(GatsbyImage)`
  margin-bottom: 20px;
`;