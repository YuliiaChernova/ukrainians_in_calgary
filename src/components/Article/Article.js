import * as React from 'react';
import { getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import { useAuthorInfo } from '../../hooks/useAuthorInfo';
import ReadMore from '../ReadMore/ReadMore';
import { MainContainer } from '../styles/global-styles';
import {
  StyledMainImage,
  Wrapper,
  ArticleContainer,
  AuthorInfoContainer,
  AuthorDetails,
  SocialMedia,
  StyledImage
} from './style';
import {
  Description
} from '../MainPostPreview/style';

const Article = ({ publication }) => {
  const data = useAuthorInfo();
  const authorInfo = data.allWpPage.edges[0].node;
  const imageData = getImage(authorInfo.featuredImage.node.localFile);

  return (
    <section>
      <MainContainer>
        <Description marginTop='38px'>
          <div className='title'>
            {publication.title}
          </div>
          <div className='description'>
            {publication.postDescription.mainPostDescription}
          </div>
        </Description>
        <StyledMainImage image={getImage(publication.featuredImage.node.localFile)} />
        <Wrapper>
          <ArticleContainer>
            <AuthorInfoContainer>
              <AuthorDetails>
                <div className="author-photo">
                  <StyledImage image={imageData} alt="Аватар автора" />
                </div>
                <div className="details">
                  <div className="authorName">
                    {authorInfo.articleAuthorACF.authorname}
                  </div>
                  <div className="readingInfo">
                    <span>{publication.articleDetailsAFC.publicationdate} &middot; </span>
                    <span>{publication.articleDetailsAFC.readingtime} читати</span>
                  </div>
                </div>
              </AuthorDetails>
              <SocialMedia>
                <div><a href={authorInfo.articleAuthorACF.facebook}><FaFacebook /></a></div>
                <div><a href={authorInfo.articleAuthorACF.linkedin}><FaLinkedin /></a></div>
              </SocialMedia>
            </AuthorInfoContainer>
            {parse(publication.content)}
          </ArticleContainer>
        </Wrapper>
        <ReadMore />
      </MainContainer>
    </section>
  )
};

export default Article;

//import { FaBeer } from "@react-icons/all-files/fa/FaBeer";