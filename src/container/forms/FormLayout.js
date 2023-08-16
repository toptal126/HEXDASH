import React from 'react';
import { Row, Col } from 'antd';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';
import { VerticalForm } from './overview/VerticalForm';
import { VerticalIconForm } from './overview/VerticalIconForm';
import { MultiColumnForm } from './overview/MultiColumnForm';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

function FormLayout() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Layouts',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Form Layouts" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col lg={12} xs={24}>
            <HorizontalForm />
          </Col>
          <Col lg={12} xs={24}>
            <HorizontalIconForm />
          </Col>
          <Col lg={12} xs={24}>
            <VerticalForm />
          </Col>
          <Col lg={12} xs={24}>
            <VerticalIconForm />
          </Col>
          <Col xs={24}>
            <MultiColumnForm />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default FormLayout;
