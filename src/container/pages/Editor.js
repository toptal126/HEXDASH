import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import MailComposer from '../email/overview/MailComposer';
import Compose from '../email/overview/Compose';

function Editors() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Editors',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Editors" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <div className="editor-compose">
              <MailComposer text />
            </div>
          </Col>
          <Col sm={24} xs={24}>
            <MailComposer />
          </Col>
          <Col sm={24} xs={24}>
            <div className="editor-compose mt-25">
              <Compose />
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Editors;
