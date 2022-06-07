import * as React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { MainContainer } from '../styles/global-styles';

import {
  ContentContainer,
  StyledImage,
  Description
} from './style';

const MainPostPreview = ({ data }) => {
  const {
    postDescription,
    title,
    uri,
    featuredImage
  } = data.allWpPost.edges[0].node;

  const imageData = getImage(featuredImage.node.localFile);

  return (
    <section>
      <MainContainer>
        <ContentContainer>
          <Link to={uri}>
            <div>
              <StyledImage image={imageData} alt="Головні документи для ньюкамерів в Канаді" />
            </div>
            <Description>
              <div className='title'>
                {title}
              </div>
              <div className='description'>
                {postDescription.mainPostDescription}
              </div>
            </Description>
          </Link>
        </ContentContainer>
      </MainContainer>
    </section>
  )
};

export default MainPostPreview;