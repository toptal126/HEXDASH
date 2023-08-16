import React from 'react';
import { Row, Col, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilFrown from '@iconscout/react-unicons/icons/uil-frown';
import { Badge, FaqCategoryBox, FaqSupportBox, FaqWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 5,
  marginBottom: 5,
};

function Faq() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Faqs',
    },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    e.target.closest('ul').querySelector('a.active').classList.remove('active');
    e.target.classList.add('active');
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Faqs" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} sm={11}>
            <Row>
              <Col xs={24}>
                <FaqCategoryBox>
                  <Cards headless>
                    <Badge className="faq-badge" type="light">
                      Browse by Topic
                    </Badge>
                    <ul>
                      <li>
                        <Link className="active primary" onClick={handleChange} to="#">
                          Using Applications
                        </Link>
                      </li>
                      <li>
                        <Link className="secondary" onClick={handleChange} to="#">
                          UI Elements
                        </Link>
                      </li>
                      <li>
                        <Link className="success" onClick={handleChange} to="#">
                          Components
                        </Link>
                      </li>
                      <li>
                        <Link className="warning" onClick={handleChange} to="#">
                          Build Process
                        </Link>
                      </li>
                      <li>
                        <Link className="info" onClick={handleChange} to="#">
                          Support Policy
                        </Link>
                      </li>
                      <li>
                        <Link className="danger" onClick={handleChange} to="#">
                          Accounts & Billing
                        </Link>
                      </li>
                    </ul>
                  </Cards>
                </FaqCategoryBox>
              </Col>

              <Col xs={24}>
                <FaqSupportBox>
                  <Cards headless>
                    <figure>
                      <img src={require('../../static/img/pages/support.svg').default} alt="" />
                    </figure>
                    <figcaption>
                      <Heading as="h5">Not finding the help you need?</Heading>
                      <Button size="default" type="primary">
                        Contact Support
                      </Button>
                    </figcaption>
                  </Cards>
                </FaqSupportBox>
              </Col>
            </Row>
          </Col>

          <Col xxl={18} lg={16} md={14} sm={13}>
            <FaqWrapper>
              <Cards headless title="Using Applications">
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                >
                  <Panel header="How long does it take to download updates?" key="1" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="How to use SCSS variables to build custom color?" key="2" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="3" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="What is the flex layout?" key="4" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="5" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="Where to buy this UI dashboard?" key="6" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        <UilSmile />
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                  <Panel header="How long does it take to download updates?" key="7" style={customPanelStyle}>
                    <p>
                      Many support queries and technical questions will already be answered in supporting documentation
                      such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche reprehenderit, enim
                      eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    </p>
                    <Heading as="h4">Was this article helpful?</Heading>
                    <div className="panel-actions">
                      <Button outlined type="success">
                        Yes
                      </Button>
                      <Button outlined type="warning">
                        <UilFrown />
                        No
                      </Button>
                    </div>
                  </Panel>
                </Collapse>
              </Cards>
            </FaqWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Faq;
