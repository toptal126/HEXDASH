import React, { lazy, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';

function Team() {
  const { searchData, team } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      team: state.team.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
  });

  const { notData } = state;
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const actions = (
    <>
      <Link to="#">
        <UilEye />
        <span>View</span>
      </Link>
      <Link to="#">
        <UilEdit />
        <span>Edit</span>
      </Link>
      <Link to="#">
        <UilTrashAlt />
        <span>Delete</span>
      </Link>
    </>
  );

  return (
    <>
      <CardToolbox>
        <PageHeader
          className="ninjadash-page-header-main"
          backIcon={false}
          title="Team Members"
          subTitle={
            <>
              <span className="title-counter">274 Users</span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                width="100%"
                placeholder="Search by Name"
                patterns
              />
            </>
          }
          buttons={[
            <Link to="/admin/users/add-user/info" className="btn-add_new">
              <UilPlus /> Add New Member
            </Link>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={25}>
          {team.map((user) => {
            const TeamCard = lazy(() => import('../pages/overview/TeamCard'));
            const { id } = user;
            return (
              <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton avatar active />
                    </Cards>
                  }
                >
                  <TeamCard actions={actions} user={user} />
                </Suspense>
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
}

export default Team;
