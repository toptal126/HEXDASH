import React from 'react';
import { Row, Col } from 'antd';
import { DashboardBaseStyleWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Palette from '../../components/color-palette/palette';
import config from '../../config/config';
import Heading from '../../components/heading/heading';

// @Todo console warning from button

const { themeColor } = config;
function DashboardBase() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Theme Configuration',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Theme Configuration" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Theme Colors" size="large">
                <div className="ninjadash-configuration-box align-center-v">
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="primary">
                      Primary
                    </Button>
                    <span className="ninjadah-color-code">#FB3586</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="secondary">
                      Secondary
                    </Button>
                    <span className="ninjadah-color-code">#5840FF</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="success">
                      Success
                    </Button>
                    <span className="ninjadah-color-code">#01B81A</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="info">
                      Info
                    </Button>
                    <span className="ninjadah-color-code">#00AAFF</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="warning">
                      Warning
                    </Button>
                    <span className="ninjadah-color-code">#FA8B0C</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="danger">
                      Danger
                    </Button>
                    <span className="ninjadah-color-code">#FF0F0F</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="dark">
                      Dark
                    </Button>
                    <span className="ninjadah-color-code">#090E30</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="gray">
                      Gray
                    </Button>
                    <span className="ninjadah-color-code">#525768</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="light">
                      Light
                    </Button>
                    <span className="ninjadah-color-code">#8C90A4</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="extra-light">
                      Extra Light
                    </Button>
                    <span className="ninjadah-color-code">#ADB5D9</span>
                  </div>
                </div>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Hover Colors" size="large">
                <div className="ninjadash-configuration-box ninjadash-configuration-box-button-hover align-center-v">
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="primary">
                      Primary
                    </Button>
                    <span className="ninjadah-color-code">#4347D9</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="secondary">
                      Secondary
                    </Button>
                    <span className="ninjadah-color-code">#E34A87</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="success">
                      Success
                    </Button>
                    <span className="ninjadah-color-code">#0CAB7C</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="info">
                      Info
                    </Button>
                    <span className="ninjadah-color-code">#0D79DF</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="warning">
                      Warning
                    </Button>
                    <span className="ninjadah-color-code">#D47407</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="danger">
                      Danger
                    </Button>
                    <span className="ninjadah-color-code">#E30D0F</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="dark">
                      Dark
                    </Button>
                    <span className="ninjadah-color-code">#131623</span>
                  </div>
                  <div className="ninjadash-configuration-box__item">
                    <Button size="default" type="gray">
                      Gray
                    </Button>
                    <span className="ninjadah-color-code">#363A51</span>
                  </div>
                </div>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Gradient Colors" size="large">
                <Row gutter={15}>
                  <Col md={5}>
                    <Palette gradient content direction="90deg" colorCode={[themeColor['secondary-color'], '#00E4EC']}>
                      {themeColor['secondary-color']}
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Border Colors" size="large">
                <Row gutter={15}>
                  <Col md={6}>
                    <Palette bordered content colorCode={themeColor['border-color-light']}>
                      Border Color 1
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bordered content colorCode={themeColor['border-color-normal']}>
                      Border Color 2
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bordered content colorCode={themeColor['border-color-deep']}>
                      Border Color 3
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Background Gray Colors" size="large">
                <Row gutter={15}>
                  <Col md={6}>
                    <Palette bg content colorCode={themeColor['bg-color-light']}>
                      BG Color 1
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bg content colorCode={themeColor['bg-color-normal']}>
                      BG Color 2
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bg content colorCode={themeColor['bg-color-deep']}>
                      BG Color 3
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Buttons" size="large">
                <Row gutter={15}>
                  <Col md={8}>
                    <Button
                      type="primary"
                      size="extra-small"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                      raised
                    >
                      Extra Small
                    </Button>
                    <Button type="primary" size="small" style={{ marginRight: '10px', marginBottom: '30px' }} raised>
                      Small
                    </Button>
                    <Button type="primary" size="default" style={{ marginRight: '10px', marginBottom: '30px' }} raised>
                      Normal
                    </Button>
                    <Button type="primary" size="large" style={{ marginRight: '10px', marginBottom: '30px' }} raised>
                      Large Button
                    </Button>
                    <Button
                      outlined
                      type="primary"
                      size="extra-small"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                    >
                      Extra Small
                    </Button>
                    <Button outlined type="primary" size="small" style={{ marginRight: '10px', marginBottom: '30px' }}>
                      Small
                    </Button>
                    <Button
                      outlined
                      type="primary"
                      size="default"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                    >
                      Normal
                    </Button>
                    <Button
                      outlined
                      type="primary"
                      size="large"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                      transparented
                    >
                      Large Button
                    </Button>
                    <Button
                      type="primary"
                      size="extra-small"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                      transparented
                    >
                      Extra Small
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                      transparented
                    >
                      Small
                    </Button>
                    <Button
                      type="primary"
                      size="default"
                      style={{ marginRight: '10px', marginBottom: '30px' }}
                      transparented
                    >
                      Normal
                    </Button>
                    <Button type="primary" size="large" transparented>
                      Large Button
                    </Button>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards
                headless
                title={
                  <span>
                    Typography <span className="color-primary">Jost</span>
                  </span>
                }
                size="large"
              >
                <div className="ninjadash-heading-typography">
                  <Row gutter={15}>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading>h1. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 30px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 38px</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading as="h2">h2. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 24px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 30px</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading as="h3">h3. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 22px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 27px</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading as="h4">h4. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 20px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 24px</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading as="h5">h5. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 18px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 22px</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row align="middle">
                        <Col lg={9} sm={24} xs={24}>
                          <Heading as="h6">h6. Default Heading</Heading>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-primary">Font Size - 16px</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-secondary">Font weight - 600</p>
                        </Col>
                        <Col lg={5} sm={24} xs={24}>
                          <p className="color-info">Line Height - 20px</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless size="large">
                <div className="ninjadash-body-typography">
                  <div className="ninjadash-body-typography__top">
                    <Heading as="h5">Body Text Normal</Heading>
                    <ul className="ninjadash-typo-list">
                      <li>Font Size - 15px</li>
                      <li>Font weight - 400</li>
                      <li>Line height - 25px</li>
                    </ul>
                  </div>
                  <div className="ninjadash-body-typography__text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="ninjadash-body-typography typo-small">
                  <div className="ninjadash-body-typography__top">
                    <Heading as="h5">Body Text Small</Heading>
                    <ul className="ninjadash-typo-list">
                      <li>Font Size - 14px</li>
                      <li>Font weight - 400</li>
                      <li>Line height - 22px</li>
                    </ul>
                  </div>
                  <div className="ninjadash-body-typography__text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
                <div className="ninjadash-body-typography typo-big">
                  <div className="ninjadash-body-typography__top">
                    <Heading as="h5">Body Text Big</Heading>
                    <ul className="ninjadash-typo-list">
                      <li>Font Size - 16px</li>
                      <li>Font weight - 400</li>
                      <li>Line height - 27px</li>
                    </ul>
                  </div>
                  <div className="ninjadash-body-typography__text">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DashboardBase;
