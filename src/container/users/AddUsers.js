import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { Routes, Route, NavLink } from 'react-router-dom';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilShareAlt from '@iconscout/react-unicons/icons/uil-share-alt';
import UilBriefcaseAlt from '@iconscout/react-unicons/icons/uil-briefcase-alt';
import { AddUser } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const Info = lazy(() => import('../pages/overview/info'));
const Work = lazy(() => import('../pages/overview/work'));
const Social = lazy(() => import('../pages/overview/Social'));

function AddNew() {
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" ghost title="Add User" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <AddUser>
              <Cards
                title={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <NavLink to="./info">
                          <UilUser />
                          Personal Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./work">
                          <UilBriefcaseAlt />
                          Work Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./social">
                          <UilShareAlt />
                          Social
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="info" element={<Info />} />
                    <Route path="work" element={<Work />} />
                    <Route path="social" element={<Social />} />
                  </Routes>
                </Suspense>
              </Cards>
            </AddUser>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddNew;
