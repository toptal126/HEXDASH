import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Skeleton, Input, Select } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { JobLandingStyle } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TopToolBox } from '../styled';
import { sorting, filterWithTitleLocation } from '../../redux/jobs/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Jobs() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'job',
      breadcrumbName: 'Job Search',
    },
  ];
  const { jobs } = useSelector((state) => {
    return {
      jobs: state.jobs.jobs,
    };
  });
  const path = '.';
  const dispatch = useDispatch();

  const handleSort = (value) => {
    dispatch(sorting(value, jobs));
  };

  const handleSearch = () => {
    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    dispatch(filterWithTitleLocation(title, location, jobs));
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Job Search " routes={PageRoutes} />
      <Main>
        <JobLandingStyle>
          <div className="ninjadash-joblanding-top align-center-v">
            <Input
              size="large"
              prefix={<UilSearch />}
              className="ninjadash-title-search"
              id="title"
              placeholder="Job title, skills, or company"
            />
            <Input
              id="location"
              size="large"
              className="ninjadash-location-search"
              prefix={<UilLocationPoint />}
              placeholder="Location"
            />
            <Button onClick={handleSearch} size="large" type="primary">
              <UilSearch /> Search
            </Button>
          </div>
          <Row gutter={25}>
            <Col xxl={6} lg={8} md={10} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton paragraph={{ rows: 22 }} active />
                  </Cards>
                }
              >
                <Filters />
              </Suspense>
            </Col>
            <Col xxl={18} lg={16} md={14} xs={24}>
              <TopToolBox>
                <div className="ninjadash-showcase-top d-flex justify-content-between align-items-center">
                  <div className="ninjadash-showcase-top__text">
                    <p className="search-result">Showing 1–8 of 86 results</p>
                  </div>
                  {(window.innerWidth <= 991 && window.innerWidth >= 768) ||
                    (window.innerWidth > 575 && (
                      <div className="ninjadash-showcase-top__action">
                        <div className="ninjadash-showcase-top__action--filter">
                          <span className="toolbox-menu-title"> Sort By:</span>
                          <Select onChange={handleSort} style={{ width: '150px' }} defaultValue="latest">
                            <Select.Option value="Latest">Latest</Select.Option>
                            <Select.Option value="Old">Old</Select.Option>
                          </Select>
                        </div>
                        <div className="ninjadash-showcase-top__action--viewmode">
                          <NavLink to={`${path}/grid`}>
                            <UilApps />
                          </NavLink>
                          <NavLink to={`${path}/list`}>
                            <UilListUl />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                </div>
              </TopToolBox>
              <Suspense
                fallback={
                  <div className="spin d-flex align-center-v">
                    <Spin />
                  </div>
                }
              >
                <Routes>
                  <Route index element={<Grid />} />
                  <Route path="grid" element={<Grid />} />
                  <Route path="list" element={<List />} />
                </Routes>
              </Suspense>
            </Col>
          </Row>
        </JobLandingStyle>
      </Main>
    </>
  );
}

export default Jobs;
