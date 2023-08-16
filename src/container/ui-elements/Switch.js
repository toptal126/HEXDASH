import React from 'react';
import { Row, Col, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { SwitchStyleWrap } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

function Switches() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Switch',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Switch" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Switch">
              <Switch defaultChecked />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Size" caption="The simplest use of Switch">
              <SwitchStyleWrap>
                <Switch defaultChecked />
                <Switch defaultChecked size="small" />
              </SwitchStyleWrap>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Text and Icon" caption="The simplest use of Switch">
              <div>
                <Switch checkedChildren="a" unCheckedChildren="b" defaultChecked />
                <br />
                <Switch checkedChildren="1" unCheckedChildren="0" />
                <br />
                <SwitchStyleWrap>
                  <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                  <Switch defaultChecked />
                </SwitchStyleWrap>
              </div>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Loading" caption="The simplest use of Switch">
              <div>
                <Switch loading defaultChecked />
                <br />
                <Switch size="small" loading />
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Switches;
