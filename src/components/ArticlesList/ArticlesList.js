import * as React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { MainContainer } from '../styles/global-styles';

import {
  ArticlesContainer,
  SectionName,
  ContentImage
} from './style';

const ArticlesList = ({ data, sectionName }) => {
  const items = data.allWpPost.edges;

  return (
    <section>
      <MainContainer>
        <SectionName>
          {sectionName}
        </SectionName>
        <ArticlesContainer>
          {
            items.map(({ node }) => (
              <div>
                <Link to={node.uri}>
                  <ContentImage image={getImage(node.featuredImage.node.localFile)} />
                  <span>
                    {node.title}
                  </span>
                </Link>
              </div>
            ))
          }
        </ArticlesContainer>
      </MainContainer>
    </section>
  )
};

export default ArticlesList;