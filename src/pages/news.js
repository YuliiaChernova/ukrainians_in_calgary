import * as React from 'react';
import Layout from '../components/Layout/';
import MainPostPreview from '../components/MainPostPreview';
import ArticlesList from '../components/ArticlesList';
import { useNewsPreview } from '../hooks/useNewsPreview';
import { useMainPostPreview } from '../hooks/useMainPostPreview';

const NewsPage = () => {
  const newsPreview = useNewsPreview();
  const mainPostPreview = useMainPostPreview();
  return (
    <Layout>
      <MainPostPreview data={mainPostPreview}/>
      <ArticlesList data={newsPreview} sectionName='Всі новини'/>
    </Layout>
  )
};

export default NewsPage;