import React, { lazy } from 'react';
import { Row, Col } from 'antd';
import { MixedCardWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Newsletter from '../../components/cards/Newsletter';
import Ordersummary from '../ecommerce/overview/Ordersummary';

const SalesByLocation = lazy(() => import('../dashboard/overview/index/SalesByLocation'));
const MarketingCampaigns = lazy(() => import('../dashboard/overview/demoFour/MarketingCampaigns'));
const SocialMediaOverview = lazy(() => import('./overview/SocialMediaOverview'));
const DailyOverview = lazy(() => import('./overview/DailyOverview'));

function WidgetsCard() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Widgets Mixed',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Widgets Mixed" routes={PageRoutes} />
      <Main>
        <MixedCardWrap>
          <Row gutter={25}>
            <Col xxl={8} xl={10} xs={24}>
              <Cards headless>
                <Ordersummary subtotal={1200} />
              </Cards>
            </Col>
            <Col xxl={16} xl={14} xs={24}>
              <SalesByLocation />
              <Newsletter />
            </Col>
            <Col xxl={8} xs={24}>
              <SocialMediaOverview />
            </Col>
            <Col xxl={8} md={12} xs={24}>
              <DailyOverview />
            </Col>
            <Col xxl={8} md={12} xs={24}>
              <MarketingCampaigns />
            </Col>
          </Row>
        </MixedCardWrap>
      </Main>
    </>
  );
}

export default WidgetsCard;
