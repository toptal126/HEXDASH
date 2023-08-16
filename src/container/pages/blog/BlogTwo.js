import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import BlogCard from '../../../components/cards/BlogCard';
import { Main } from '../../styled';

import cardData from '../../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlogTwo() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blog Two',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Blog Two" routes={PageRoutes} />
      <Main>
        <Row gutter={25} className="mt-sm-10">
          {BlogCardData.slice(10, 22).map((blog) => {
            return (
              <Col key={blog.id} xxl={6} xl={8} sm={12} xs={24}>
                <BlogCard item={blog} theme="style-2" />
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
}

export default BlogTwo;
