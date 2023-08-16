import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { SettingWrapper } from './overview/style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));
const AuthorBox = lazy(() => import('./overview/ProfileAuthorBox'));
const CoverSection = lazy(() => import('../overview/CoverSection'));

function Settings() {
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
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="My Profile" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar />
                </Cards>
              }
            >
              <AuthorBox />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton avatar />
                  </Cards>
                }
              >
                <CoverSection />
              </Suspense>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton paragraph={{ rows: 20 }} />
                  </Cards>
                }
              >
                <Routes>
                  <Route index element={<Profile />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="account" element={<Account />} />
                  <Route path="password" element={<Password />} />
                  <Route path="social" element={<SocialProfiles />} />
                  <Route path="notification" element={<Notification />} />
                </Routes>
              </Suspense>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Settings;
