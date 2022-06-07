import * as React from 'react';
import Layout from '../components/Layout/';
import MainPostPreview from '../components/MainPostPreview';
import ArticlesList from '../components/ArticlesList';
import { useEntertainmentsPreview } from '../hooks/useEntertainmentsPreview';
import { useMainPostPreview } from '../hooks/useMainPostPreview';

const EntertainmentsPage = () => {
  const entertainmentPreview = useEntertainmentsPreview();
  const mainPostPreview = useMainPostPreview();
  return (
    <Layout>
      <MainPostPreview data={mainPostPreview}/>
      <ArticlesList data={entertainmentPreview} sectionName='Всі розваги'/>
    </Layout>
  )
};

export default EntertainmentsPage;