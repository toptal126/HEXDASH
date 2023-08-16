import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function BlankPage() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blank Page',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Blank Page" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards headless>
              <h3>Skeleton Page</h3>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default BlankPage;
