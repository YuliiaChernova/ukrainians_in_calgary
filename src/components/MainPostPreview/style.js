import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ContentContainer = styled.div`
  padding-top: 76px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
  }
`;

export const StyledImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 854px;
  margin-bottom: 38px;
`;

export const Description = styled.div`
  text-align: center;
  margin-top: ${({ marginTop }) => marginTop};

  .title {
    width: 100%;
    max-width: 858px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.textSizes.mainArticleHeader.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.mainArticleHeader.desktop.lineHeight};
  }

  .description {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.textSizes.mainArticleDescription.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.mainArticleDescription.desktop.lineHeight};
    padding-top: 38px;
  }
`;
