import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilExpandArrowsAlt from '@iconscout/react-unicons/icons/uil-expand-arrows-alt';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { UsercardWrapper, UserCarrdTop } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const User = lazy(() => import('../pages/overview/UserCard'));
const UserCardStyle = lazy(() => import('../pages/overview/UserCardStyle'));
const UserCardList = lazy(() => import('../pages/overview/UserCardList'));
const UserCardGroup = lazy(() => import('../pages/overview/UserCardGroup'));

function Users() {
  const { searchData, users, userGroup } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      users: state.users,
      userGroup: state.userGroup,
    };
  });

  const path = '.';

  const [state, setState] = useState({
    notData: searchData,
    current: 0,
    pageSize: 0,
    page: 0,
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onChange = (page) => {
    setState({ ...state, page });
  };

  const GridView = React.memo(() => {
    return users.map((user) => {
      const { id } = user;

      return (
        <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton avatar active />
              </Cards>
            }
          >
            <User user={user} />
          </Suspense>
        </Col>
      );
    });
  });

  const ListView = React.memo(() => {
    return users.map((user) => {
      const { id } = user;

      return (
        <Col key={id} xxl={12} xl={12} sm={24} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton avatar active />
              </Cards>
            }
          >
            <UserCardList user={user} />
          </Suspense>
        </Col>
      );
    });
  });

  const GridStyle = React.memo(() => {
    return users.map((user) => {
      const { id } = user;

      return (
        <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton avatar active />
              </Cards>
            }
          >
            <UserCardStyle user={user} />
          </Suspense>
        </Col>
      );
    });
  });

  const GridGroup = React.memo(() => {
    return userGroup.map((user) => {
      const { id } = user;

      return (
        <Col key={id} xxl={8} md={12} sm={24} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton avatar active />
              </Cards>
            }
          >
            <UserCardGroup user={user} />
          </Suspense>
        </Col>
      );
    });
  });

  return (
    <>
      <CardToolbox>
        <UserCarrdTop>
          <PageHeader
            className="ninjadash-page-header-main"
            ghost
            title="Users Card"
            subTitle={
              <>
                <span className="title-counter">274 Users </span>
                <AutoComplete
                  onSearch={handleSearch}
                  dataSource={notData}
                  placeholder="Search by Name"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button className="btn-add_new" size="default" type="primary" key="1">
                <Link to="/admin/users/add-user/info">
                  <UilPlus /> Add New User
                </Link>
              </Button>,
              <NavLink className="action-btn" key="2" to={`${path}/grid`}>
                <UilApps />
              </NavLink>,
              <NavLink className="action-btn" key="3" to={`${path}/list`}>
                <UilListUl />
              </NavLink>,
              <NavLink className="action-btn" key="4" to={`${path}/grid-style`}>
                <UilExpandArrowsAlt />
              </NavLink>,
              <NavLink className="action-btn" key="5" to={`${path}/grid-group`}>
                <UilUsersAlt />
              </NavLink>,
            ]}
          />
        </UserCarrdTop>
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            <Routes>
              <Route path="grid" element={<GridView />} />
              <Route path="list" element={<ListView />} />
              <Route path="grid-group" element={<GridGroup />} />
              <Route path="grid-style" element={<GridStyle />} />
            </Routes>

            <Col xs={24}>
              <div className="user-card-pagination">
                <Pagination
                  onChange={onChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  defaultCurrent={6}
                  total={500}
                />
              </div>
            </Col>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
}

export default Users;
