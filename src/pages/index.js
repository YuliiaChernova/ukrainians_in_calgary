import * as React from 'react';
import Layout from '../components/Layout/';
import MainPostPreview from '../components/MainPostPreview';
import ArticlesList from '../components/ArticlesList';
import { useArticlesPreview } from '../hooks/useArticlesPreview';
import { useMainPostPreview } from '../hooks/useMainPostPreview';

const IndexPage = () => {
  const articlePreview = useArticlesPreview();
  const mainPostPreview = useMainPostPreview();
  return (
    <Layout>
      <MainPostPreview data={mainPostPreview}/>
      <ArticlesList data={articlePreview} sectionName='Всі статті'/>
    </Layout>
  )
};

export default IndexPage;