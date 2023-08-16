import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Tab } from '../../components/tabs/tabs';
import tabData from '../../demoData/tab-data.json';

const { data, dataIcon, icon } = tabData;

function Tabs() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Tabs',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tabs" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Tab data={data} />
          </Col>
          <Col md={12} xs={24}>
            <Tab data={data} color="default" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <Tab data={dataIcon} type="primary" color="#FB3586" />
          </Col>
          <Col md={12} xs={24}>
            <Tab data={icon} type="primary" color="#FB3586" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <Tab data={dataIcon} type="white" color="#ffffff" />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Tabs;
