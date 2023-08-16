import React, { lazy, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Spin, Skeleton } from 'antd';
import { NavLink, Route, Routes } from 'react-router-dom';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';
import { TopToolBox } from '../Style';
import { sorting } from '../../../redux/product/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Filters = lazy(() => import('./overview/Filters'));
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Product() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'products',
    },
  ];
  const path = '.';
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);

  const [state, setState] = useState({
    notData: searchData,
    active: 'active',
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = (e) => {
    dispatch(sorting(e.target.value));
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Shop" routes={PageRoutes} />
      <Main>
        <Row gutter={30}>
          <Col className="product-sidebar-col" xxl={5} xl={7} lg={7} md={10} xs={24}>
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
          <Col className="product-content-col" xxl={19} lg={17} md={14} xs={24}>
            <TopToolBox>
              <Row gutter={0}>
                <Col xxl={7} lg={12} xs={24}>
                  <AutoComplete
                    onSearch={handleSearch}
                    dataSource={notData}
                    placeholder="Search"
                    width="100%"
                    patterns
                  />
                </Col>
                <Col xxl={7} lg={12} xs={24}>
                  <p className="search-result">Showing 1–8 of 86 results</p>
                </Col>
                <Col xxl={10} xs={24}>
                  <div className="product-list-action d-flex justify-content-between align-items-center">
                    <div className="product-list-action__tab">
                      <span className="toolbox-menu-title">Sort by:</span>
                      <Radio.Group onChange={onSorting} defaultValue="rate">
                        <Radio.Button value="rate">Top Rated</Radio.Button>
                        <Radio.Button value="popular">Popular</Radio.Button>
                        <Radio.Button value="time">Newest</Radio.Button>
                        <Radio.Button value="price">Price</Radio.Button>
                      </Radio.Group>
                    </div>
                    {(window.innerWidth <= 991 && window.innerWidth >= 768) ||
                      (window.innerWidth > 575 && (
                        <div className="product-list-action__viewmode">
                          <NavLink to={`${path}/grid`}>
                            <UilApps />
                          </NavLink>
                          <NavLink to={`${path}/list`}>
                            <UilListUl />
                          </NavLink>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>
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
      </Main>
    </>
  );
}

export default Product;
