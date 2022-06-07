import * as React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { useLastPublications } from '../../hooks/useLastPublications';
import {
  ReadMoreContainer
} from './style';
import {
  ContentImage,
  SectionName
} from '../ArticlesList/style';

const ReadMore = () => {
  const data = useLastPublications();
  const items = data.allWpPost.edges;
  return (
    <>
      <SectionName>
        Останні публікації
      </SectionName>
      <ReadMoreContainer>
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
      </ReadMoreContainer>
    </>
  )
};

export default ReadMore;