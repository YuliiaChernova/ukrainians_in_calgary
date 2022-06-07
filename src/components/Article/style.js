import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledMainImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 1440px;
  margin: 38px 0 38px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 640px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  padding-bottom: 40px;

  @media ${({ theme }) => theme.mediaQueries.tablets} {
    padding: 0 20px 40px 20px;
  }
`;

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AuthorDetails = styled.div`
  display: flex;
  width: 80%;
  padding: 24px 0 30px 0;

  img {
    border-radius: 50%;
  }

  .details {
    margin-left: 23px;
  }

  .authorName {
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes.author.desktop.fontSize};
    line-height: ${({ theme }) => theme.textSizes.author.desktop.lineHeight};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;

  >div {
    margin-top: 30px;
    width: 72px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.colors.borderMedium};

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.borderMedium};

    &:first-child {
      border-right: none;
    }

    &:hover {
      cursor: pointer;
    }

    a {
      color: ${({ theme }) => theme.colors.icon};
    }
  }
`;

export const StyledImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 56px;
`;