import React from 'react';
import { Row, Col } from 'antd';
import { GridStyle, GridStyleGutter, GridStyleOffset } from './GridStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function Grid() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Grid',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Grid" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="Basic Grid" size="default">
              <GridStyle>
                <Row>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                </Row>
                <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
                </Row>
                <Row>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                </Row>
              </GridStyle>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="Grid Gutter" size="default">
              <GridStyleGutter>
                <Row gutter={16}>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                </Row>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                  </Col>
                </Row>
              </GridStyleGutter>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="Column offset" size="default">
              <GridStyleOffset>
                <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8} offset={8}>
                    col-8
                  </Col>
                </Row>
                <Row>
                  <Col span={6} offset={6}>
                    col-6 col-offset-6
                  </Col>
                  <Col span={6} offset={6}>
                    col-6 col-offset-6
                  </Col>
                </Row>
                <Row>
                  <Col span={12} offset={6}>
                    col-12 col-offset-6
                  </Col>
                </Row>
              </GridStyleOffset>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="Grid sort" size="default">
              <GridStyle>
                <Row>
                  <Col span={18} push={6}>
                    col-18 col-push-6
                  </Col>
                  <Col span={6} pull={18}>
                    col-6 col-pull-18
                  </Col>
                </Row>
              </GridStyle>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="sub-element align" size="default">
              <GridStyle>
                <p>sub-element align left</p>
                <Row type="flex" justify="start">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>

                <p>sub-element align center</p>
                <Row type="flex" justify="center">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>

                <p>sub-element align right</p>
                <Row type="flex" justify="end">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>

                <p>sub-element monospaced arrangement</p>
                <Row type="flex" justify="space-between">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>

                <p>sub-element align full</p>
                <Row type="flex" justify="space-around">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                </Row>
              </GridStyle>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="Responsive" size="default">
              <GridStyle>
                <Row>
                  <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                  </Col>
                  <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    Col
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                  </Col>
                </Row>
              </GridStyle>
            </Cards>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless title="More Responsive" size="default">
              <GridStyle>
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                  </Col>
                </Row>
              </GridStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Grid;
