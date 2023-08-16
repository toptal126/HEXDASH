import React from 'react';
import { Row, Col, message, Space } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, MessageStyleWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';

function Messages() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Message',
    },
  ];
  const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const customSuccess = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };

  const loadingSuccess = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Message" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic">
              <MessageStyleWrapper>
                <Button type="primary" size="large" raised onClick={info}>
                  Display normal message
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Customize">
              <MessageStyleWrapper>
                <Button className="btn-outlined" type="light" outlined size="large" onClick={customSuccess}>
                  Customized display duration
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Other types of message">
              <Space>
                <div className="message-button-list">
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={success}>
                    Success
                  </Button>
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={error}>
                    Error
                  </Button>
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={warning}>
                    Warning
                  </Button>
                </div>
              </Space>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Loading">
              <MessageStyleWrapper>
                <Button className="btn-outlined" type="light" outlined size="large" onClick={loadingSuccess}>
                  Display a loading indicator
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Messages;
