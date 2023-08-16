import React from 'react';
import { Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinerWraperStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

function Spiner() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Spin',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Spin" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Spin">
              <Spin />
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Size" caption="The simplest use of Spin">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Inside a container" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin />
              </SpinerWraperStyle>
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Custom Indicator" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin indicator={antIcon} />
              </SpinerWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Spiner;
