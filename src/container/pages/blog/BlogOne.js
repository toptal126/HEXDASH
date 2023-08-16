import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import BlogCard from '../../../components/cards/BlogCard';
import { Main } from '../../styled';

import cardData from '../../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlogOne() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blog One',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Blog One" routes={PageRoutes} />
      <Main>
        <Row gutter={25} className="mt-sm-10">
          {BlogCardData.slice(0, 9).map((blog) => {
            return (
              <Col key={blog.id} xl={8} sm={12} xs={24}>
                <BlogCard item={blog} />
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
}

export default BlogOne;
