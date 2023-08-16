import React from 'react';
import { Row, Col } from 'antd';
import { CardChartStyle } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

import UserOverview from '../dashboard/overview/demoFive/UserOverview';
import TotalLineChart from '../dashboard/overview/index/TotalLineChart';
import SalesOverview from '../dashboard/overview/index/SalesOverview';
import SaleRevenue from '../dashboard/overview/demoTwo/SaleRevenue';
import ProfitGrowth from '../dashboard/overview/demoThree/ProfitGrowth';
import MonthlyEarning from '../dashboard/overview/demoThree/MonthlyEarning';

function Widgets() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Widgets Charts',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Widgets Charts" routes={PageRoutes} />
      <Main>
        <CardChartStyle>
          <Row gutter={25}>
            <Col xs={24}>
              <UserOverview />
            </Col>
            <Col xs={24}>
              <TotalLineChart />
            </Col>
            <Col xxl={9} xs={24}>
              <SalesOverview />
            </Col>
            <Col xxl={15} xs={24}>
              <SaleRevenue />
            </Col>
            <Col xxl={16} xs={24}>
              <MonthlyEarning />
            </Col>
            <Col xxl={8} xs={24}>
              <ProfitGrowth />
            </Col>
          </Row>
        </CardChartStyle>
      </Main>
    </>
  );
}

export default Widgets;
