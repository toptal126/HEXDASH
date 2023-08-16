/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import { Col, Form, Input, Row } from 'antd';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import FontAwesome from 'react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ComingsoonStyleWrapper } from './style';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';

function ComingSoon() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Coming Soon',
    },
  ];
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  function Completionist() {
    return <span>You are good to go!</span>;
  }
  function renderer({ days, hours, minutes, seconds, completed }) {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div className="countdwon-data">
        <span>
          <span className="countdown-time">{days}</span> <span className="countdown-title">Days</span>
        </span>
        <span>
          <div className="countdown-time">{hours}</div>
          <span className="countdown-title">Hours</span>
        </span>
        <span>
          <div className="countdown-time">{minutes}</div>
          <span className="countdown-title">Minutes</span>
        </span>
        <span>
          <div className="countdown-time">{seconds}</div> <span className="countdown-title">Seconds</span>
        </span>
      </div>
    );
  }

  renderer.propTypes = {
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    completed: PropTypes.node,
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Coming Soon" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <ComingsoonStyleWrapper>
              <Cards headless>
                <div className="ninjaDash-logo">
                  {mainContent === 'lightMode' ? (
                    <img src={require('../../static/img/logo_dark.svg').default} alt="" />
                  ) : (
                    <img src={require('../../static/img/logo_white.svg').default} alt="" />
                  )}
                </div>
                <div className="coming-soon-content">
                  <h1>We are coming soon</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry`s standard dummy text ever
                    since the 1500s,
                  </p>
                </div>
                <div className="strikingDash-countdown">
                  <Countdown date={Date.now() + 1606546460} renderer={renderer} />
                </div>
                <div className="subscription-form">
                  <Form name="basic">
                    <div className="subscription-form-inner">
                      <Form.Item name="email" rules={[{ type: 'email', message: 'Please input your username!' }]}>
                        <Input placeholder="name@example.com" />
                      </Form.Item>
                      <Button size="large" type="primary" htmlType="submit">
                        Subscribe
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="coming-soon-social">
                  <ul>
                    <li>
                      <Link to="#" className="facebook">
                        <FontAwesome name="facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <FontAwesome name="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="globe">
                        <FontAwesome name="globe" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="github">
                        <FontAwesome name="github" />
                      </Link>
                    </li>
                  </ul>
                  <p>2022 © Sovware</p>
                </div>
              </Cards>
            </ComingsoonStyleWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ComingSoon;
