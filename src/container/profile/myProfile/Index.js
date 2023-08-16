import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import { SettingWrapper } from './overview/Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

const UserCards = lazy(() => import('../../pages/overview/UserCard'));
const CoverSection = lazy(() => import('../overview/CoverSection'));
const UserBio = lazy(() => import('./overview/UserBio'));
const Overview = lazy(() => import('./overview/Overview'));
const Timeline = lazy(() => import('./overview/Timeline'));
const Activity = lazy(() => import('./overview/Activity'));

function MyProfile() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'My Profile',
    },
  ];
  const path = '.';
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="My Profile" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar active paragraph={{ rows: 3 }} />
                </Cards>
              }
            >
              <UserCards
                user={{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'static/img/users/1.png' }}
              />
            </Suspense>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active paragraph={{ rows: 10 }} />
                </Cards>
              }
            >
              <UserBio />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <div className="coverWrapper">
                  <CoverSection />
                  <nav className="profileTab-menu">
                    <ul>
                      <li>
                        <NavLink to={`${path}/overview`}>Overview</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/timeline`}>Timeline</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/activity`}>Activity</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Suspense>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active paragraph={{ rows: 10 }} />
                  </Cards>
                }
              >
                <Routes>
                  <Route path="overview" element={<Overview />} />
                  <Route path="timeline" element={<Timeline />} />
                  <Route path="activity" element={<Activity />} />
                </Routes>
              </Suspense>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

MyProfile.propTypes = {
  // match: propTypes.object,
};

export default MyProfile;
