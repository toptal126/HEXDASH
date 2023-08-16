import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import DragAndDropTable from '../table/DragTable';

function UserListDataTable() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Drag & Drop',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Drag & Drop" routes={PageRoutes} />

      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <DragAndDropTable />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default UserListDataTable;
