import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import BlogCard from '../../../components/cards/BlogCard';
import { Main } from '../../styled';

import cardData from '../../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlogThree() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blog Three',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Blog Three" routes={PageRoutes} />
      <Main>
        <Row gutter={25} className="mt-sm-10">
          {BlogCardData.slice(10, 22).map((blog) => {
            return (
              <Col key={blog.id} xxl={6} sm={12} xs={24}>
                <BlogCard item={blog} theme="style-3" />
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
}

export default BlogThree;
