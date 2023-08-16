import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { DropdownStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';

function Popovers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Popovers',
    },
  ];
  return (
    <DropdownStyle>
      <PageHeader className="ninjadash-page-header-main" title="Popovers" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic Popover" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <NavLink to="#">hover me </NavLink>
              </Popover>
            </Cards>
            <Cards title="Event menu " caption="The simplest use of Popover">
              <Popover action="hover" placement="bottomLeft">
                <Button type="primary">hover</Button>
              </Popover>
              <Popover action="click" placement="bottom">
                <Button type="primary">click</Button>
              </Popover>
              <Popover action="contextMenu" placement="bottomRight">
                <Button type="primary">context</Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Placement" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <Button type="primary">bottomLeft</Button>
              </Popover>
              <Popover placement="bottom">
                <Button type="primary">bottom</Button>
              </Popover>
              <Popover placement="bottomRight">
                <Button type="primary">bottomRight</Button>
              </Popover>
              <br />
              <Popover placement="topLeft">
                <Button type="primary">topLeft</Button>
              </Popover>
              <Popover placement="top">
                <Button type="primary">topCenter</Button>
              </Popover>
              <Popover placement="topRight">
                <Button type="primary">topRight</Button>
              </Popover>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
}

export default Popovers;
