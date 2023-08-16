import React from 'react';
import { Row, Col } from 'antd';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, ButtonsGroupWrapper, BlockButtonsWrapper, ButtonSizeWrapper, BtnWithIcon } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';

function Buttons() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Buttons',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Button" routes={PageRoutes} />
      <Main className="button-example">
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" size="large">
              <Button size="default" type="primary">
                Primary
              </Button>
              <Button size="default" type="secondary">
                Secondary
              </Button>
              <Button size="default" type="success">
                Success
              </Button>
              <Button size="default" type="info">
                Info
              </Button>
              <Button size="default" type="warning">
                Warning
              </Button>
              <Button size="default" type="danger">
                Danger
              </Button>
              <Button size="default" type="link">
                Link
              </Button>
              <Button size="default" type="dark">
                Dark
              </Button>
              <Button size="default" type="light">
                Light
              </Button>
              <Button size="default" type="white">
                White
              </Button>
            </Cards>

            <Cards title="Light Color" size="large">
              <Button size="default" transparented type="primary">
                Primary
              </Button>
              <Button size="default" transparented type="secondary">
                Secondary
              </Button>
              <Button size="default" transparented type="success">
                Success
              </Button>
              <Button size="default" transparented type="info">
                Info
              </Button>
              <Button size="default" transparented type="warning">
                Warning
              </Button>
              <Button size="default" transparented type="danger">
                Danger
              </Button>
              <Button size="default" transparented type="dark">
                Dark
              </Button>
              <Button className="btn-transparent" size="default" transparented type="light">
                Light
              </Button>
            </Cards>

            <Cards title="Rounded" size="large">
              <Button size="default" shape="circle" type="primary">
                Primary
              </Button>
              <Button size="default" shape="circle" type="secondary">
                Secondary
              </Button>
              <Button size="default" shape="circle" type="success">
                Success
              </Button>
              <Button size="default" shape="circle" type="info">
                Info
              </Button>
              <Button size="default" shape="circle" type="warning">
                Warning
              </Button>
              <Button size="default" shape="circle" type="danger">
                Danger
              </Button>
              <Button size="default" shape="circle" type="dark">
                Dark
              </Button>
              <Button size="default" shape="circle" type="light">
                Light
              </Button>
              <Button size="default" shape="circle" type="white">
                White
              </Button>
            </Cards>

            <Cards title="Icon" size="large">
              <Button size="default" type="primary">
                <UilLayers />
                Default
              </Button>
              <Button size="default" transparented type="primary">
                <UilLayers />
                Default
              </Button>
              <Button size="default" outlined type="primary">
                <UilLayers />
                Default
              </Button>
              <Button className="btn-outlined" size="default" outlined type="white">
                <UilLayers />
                Default
              </Button>
              <Button size="default" type="light">
                <UilLayers />
                Default
              </Button>
              <Button className="ant-raised" size="default" raised type="white">
                <UilLayers />
                Default
              </Button>
              <Button className="btn-icon" size="default" type="primary">
                <UilLayers />
              </Button>
              <Button className="btn-icon" size="default" outlined type="primary">
                <UilLayers />
              </Button>
              <Button className="btn-icon" size="default" type="light">
                <UilLayers />
              </Button>
              <Button className="btn-icon btn-outlined" size="default" outlined type="light">
                <UilLayers />
              </Button>
            </Cards>

            <Cards title="Size" size="large">
              <Row>
                <ButtonSizeWrapper>
                  <Button size="large" type="primary">
                    Large Button
                  </Button>
                  <Button size="default" type="secondary">
                    Default
                  </Button>
                  <Button size="small" type="success">
                    Small
                  </Button>
                  <Button size="extra-small" type="info">
                    Extra Small
                  </Button>
                </ButtonSizeWrapper>
              </Row>
            </Cards>

            <Cards title="Multiple Buttons" size="large">
              <Button size="default" type="primary">
                Primary
              </Button>

              <Button size="default" type="secondary">
                Secondary
              </Button>

              <Dropdown placement="topLeft">
                <BtnWithIcon>
                  <Button className="btn-outlined" size="default" outlined type="white">
                    Actions
                    <DownOutlined />
                  </Button>
                </BtnWithIcon>
              </Dropdown>
            </Cards>

            <Cards title="Group Button" size="large">
              <ButtonsGroupWrapper>
                <div className="button-group-single">
                  <h4>Basic</h4>
                  <Row>
                    <BtnGroup>
                      <Button size="small" type="primary">
                        Today
                      </Button>
                      <Button size="small" outlined type="white">
                        Week
                      </Button>
                      <Button size="small" outlined type="white">
                        Month
                      </Button>
                      <Button size="small" outlined type="white">
                        Year
                      </Button>
                    </BtnGroup>
                    <BtnGroup>
                      <Button size="small" outlined type="white">
                        Cancel
                      </Button>
                      <Button size="small" outlined type="white">
                        Ok
                      </Button>
                    </BtnGroup>
                    <BtnGroup>
                      <Button size="small" type="light">
                        Left
                      </Button>
                      <Button size="small" type="light">
                        Middle
                      </Button>
                      <Button size="small" type="light">
                        Right
                      </Button>
                    </BtnGroup>
                  </Row>
                </div>

                <div className="button-group-single">
                  <h4>With Icon</h4>
                  <Row>
                    <BtnWithIcon>
                      <BtnGroup>
                        <Button size="small" type="primary" className="active">
                          <LeftOutlined />
                          Go Back
                        </Button>
                        <Button size="small" type="primary">
                          Go Forward
                          <RightOutlined />
                        </Button>
                      </BtnGroup>
                    </BtnWithIcon>
                  </Row>
                </div>
              </ButtonsGroupWrapper>
            </Cards>

            <Cards title="BlocK" size="large">
              <BlockButtonsWrapper>
                <Button size="large" type="primary" block>
                  Large Button
                </Button>
                <Button size="default" type="secondary" block>
                  Default
                </Button>
                <Button size="small" type="success" block>
                  Small
                </Button>
                <Button size="extra-small" type="info" block>
                  Extra Small
                </Button>
              </BlockButtonsWrapper>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Outline" size="large">
              <Button size="default" outlined type="primary">
                Primary
              </Button>
              <Button size="default" outlined type="secondary">
                Secondary
              </Button>
              <Button size="default" outlined type="success">
                Success
              </Button>
              <Button size="default" outlined type="info">
                Info
              </Button>
              <Button size="default" outlined type="warning">
                Warning
              </Button>
              <Button size="default" outlined type="danger">
                Danger
              </Button>
              <Button size="default" outlined type="dark">
                Dark
              </Button>
              <Button className="btn-outlined" size="default" outlined type="light">
                Light
              </Button>
              <Button size="default" outlined type="dashed">
                Dashed
              </Button>
            </Cards>

            <Cards title="Raised" size="large">
              <Button size="default" raised type="primary">
                Primary
              </Button>
              <Button size="default" raised type="secondary">
                Secondary
              </Button>
              <Button size="default" raised type="success">
                Success
              </Button>
              <Button size="default" raised type="info">
                Info
              </Button>
              <Button size="default" raised type="warning">
                Warning
              </Button>
              <Button size="default" raised type="danger">
                Danger
              </Button>
              <Button size="default" raised type="dark">
                Dark
              </Button>
              <Button className="ant-raised" size="default" raised type="white">
                White
              </Button>
            </Cards>

            <Cards title="Rounded Outline" size="large">
              <Button size="default" outlined shape="circle" type="primary">
                Primary
              </Button>
              <Button size="default" outlined shape="circle" type="secondary">
                Secondary
              </Button>
              <Button size="default" outlined shape="circle" type="success">
                Success
              </Button>
              <Button size="default" outlined shape="circle" type="info">
                Info
              </Button>
              <Button size="default" outlined shape="circle" type="warning">
                Warning
              </Button>
              <Button size="default" outlined shape="circle" type="danger">
                Danger
              </Button>
              <Button size="default" outlined shape="circle" type="dark">
                Dark
              </Button>
              <Button className="btn-outlined" size="default" outlined shape="circle" type="light">
                Light
              </Button>
              <Button size="default" outlined shape="circle" type="dashed">
                Dashed
              </Button>
            </Cards>

            <Cards title="Rounded with Icon" size="large">
              <Button size="default" shape="circle" type="primary">
                <UilLayers />
                Default
              </Button>
              <Button size="default" shape="circle" transparented type="primary">
                <UilLayers />
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="primary">
                <UilLayers />
                Default
              </Button>
              <Button className="btn-outlined" size="default" shape="circle" outlined type="light">
                <UilLayers />
                Default
              </Button>
              <Button size="default" shape="circle" type="light">
                <UilLayers />
                Default
              </Button>
              <Button className="ant-raised" size="default" shape="circle" raised type="white">
                <UilLayers />
                Default
              </Button>
              <Button className="btn-icon" size="default" shape="round" type="primary">
                <UilLayers />
              </Button>
              <Button className="btn-icon" size="default" outlined shape="round" type="primary">
                <UilLayers />
              </Button>
              <Button className="btn-icon btn-outlined" size="default" outlined shape="round" type="light">
                <UilLayers />
              </Button>
              <Button className="btn-icon" size="default" shape="round" type="light">
                <UilLayers />
              </Button>
            </Cards>

            <Cards title="Disabled" size="large">
              <Row>
                <Button size="default" type="primary">
                  Primary
                </Button>
                <Button size="default" type="primary" disabled>
                  Primary(Disabled)
                </Button>
              </Row>
              <Row>
                <Button className="btn-outlined" size="default" outlined type="white">
                  Default
                </Button>
                <Button className="btn-outlined" size="default" outlined type="white" disabled>
                  Default(Disabled)
                </Button>
              </Row>
            </Cards>

            <Cards title="Loading" size="large">
              <Button size="default" shape="circle" type="primary" loading>
                Default
              </Button>
              <Button
                size="default"
                shape="circle"
                className="ant-btn-transparent"
                transparented
                type="primary"
                loading
              >
                Default
              </Button>
              <Button size="default" shape="circle" className="btn-outlined" outlined type="primary" loading>
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="white" loading>
                Default
              </Button>
              <Button size="default" shape="circle" type="light" loading>
                Default
              </Button>
              <Button size="default" shape="circle" raised type="white" loading>
                Default
              </Button>
              <Button className="btn-icon" size="default" shape="round" type="primary" loading />
              <Button className="btn-icon btn-outlined" size="default" outlined shape="round" type="primary" loading />
              <Button className="btn-icon btn-outlined" size="default" outlined shape="round" type="light" loading />
              <Button className="btn-icon" size="default" shape="round" type="light" loading />
            </Cards>

            <Cards
              bodyStyle={{
                borderRadius: `0 0 10px 10px`,
              }}
              className="ninjadash-ghost-card"
              title="Ghost"
              size="large"
            >
              <Button size="default" type="primary" ghost>
                Primary
              </Button>
              <Button size="default" type="secondary" ghost>
                Secondary
              </Button>
              <Button size="default" type="success" ghost>
                Default
              </Button>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Buttons;
