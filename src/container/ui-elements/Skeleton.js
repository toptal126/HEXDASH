import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function Skeletons() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Skeleton',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Skeleton" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Skeleton">
              <Skeleton />
            </Cards>
            <Cards title="Active Animation" caption="The simplest use of Skeleton">
              <Skeleton active avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Complex combination" caption="The simplest use of Skeleton">
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Skeletons;
