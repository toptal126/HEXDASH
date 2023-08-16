import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilChartPie from '@iconscout/react-unicons/icons/uil-chart-pie';
import UilWebGridAlt from '@iconscout/react-unicons/icons/uil-web-grid-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import { Link, NavLink, Routes, Route, useParams } from 'react-router-dom';
import { ProjectDetailsWrapper, TaskLists } from './style';
import FileListCard from './overview/FileListCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/project/actionCreator';

const TaskList = lazy(() => import('./overview/TaskList'));
const Activities = lazy(() => import('./overview/Activities'));

function ProjectDetails() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.data);
  const params = useParams();
  useEffect(() => {
    if (!dispatch) {
      dispatch(filterSinglePage(parseInt(params.id, 10)));
    }
  }, [params.id, dispatch]);

  const { title, content } = project[0];

  return (
    <ProjectDetailsWrapper>
      <PageHeader
        className="ninjadash-page-header-main"
        ghost
        title={
          <div key="1" className="project-header">
            <Heading as="h2">{title}</Heading>
            <Button type="primary" size="small">
              <UilPlus /> Add Task
            </Button>
            <Button className="btn-markComplete" outlined type="white" size="small">
              <UilCheck /> Mark as Complete
            </Button>
          </div>
        }
        buttons={[
          <div key="1" className="project-action">
            <Link key={1} to="#" className="project-edit">
              <UilEditAlt />
              Edit
            </Link>
            <Link key={2} to="#" className="project-remove">
              <UilTrashAlt />
              Remove
            </Link>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <div className="project-progress">
              <h3>Progress</h3>
              <Progress percent={65} strokeWidth={5} status="active" />
            </div>
            <Cards headless>
              <div className="state-single">
                <div className="color-primary">
                  <Link to="#">
                    <UilListUl />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  <Link to="#">
                    <UilChartPie />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">34</Heading>
                  <p>Task Completed</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-success">
                  <Link to="#">
                    <UilWebGridAlt />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">$27,500</Heading>
                  <p>Spendings</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                  <Link to="#">
                    <UilClock />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">250</Heading>
                  <p>Hours Spent</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-project-wrapper">
              <Cards title="About Project">
                <div className="about-content">
                  <p>{content}</p>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor
                  </p>
                </div>
                <div className="about-project">
                  <div>
                    <span>Project Owner</span>
                    <p>Peter Jackson</p>
                  </div>
                  <div>
                    <span>Budget</span>
                    <p>$56,700</p>
                  </div>
                  <div>
                    <span>Start Date</span>
                    <p className="color-primary">28 Dec 2019</p>
                  </div>
                  <div>
                    <span>Deadline</span>
                    <p className="color-danger">18 Mar 2020</p>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={6} lg={9} xs={24}>
            <div className="project-users-wrapper">
              <Cards
                title="Users"
                isbutton={
                  <Button className="btn-addUser" outlined type="white" size="small">
                    <UilUserPlus /> Add Users
                  </Button>
                }
              >
                <div className="project-users">
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/1.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/3.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Tuhin Molla</Heading>
                      <p>Project Manager</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/9.jpg`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Billal Hossain</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/4.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Khalid Hasan</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/5.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Ui Designer</p>
                    </div>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
          <Col xxl={16} lg={15} xs={24}>
            <TaskLists>
              <Cards
                title={
                  <nav>
                    <NavLink to="./tasklist">Task List</NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="./activities">Activities</NavLink>
                  </nav>
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
                    <Route index element={<TaskList />} />
                    <Route path="tasklist" element={<TaskList />} />
                    <Route path="activities" element={<Activities />} />
                  </Routes>
                </Suspense>
              </Cards>
            </TaskLists>
          </Col>
          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col>
        </Row>
      </Main>
    </ProjectDetailsWrapper>
  );
}

export default ProjectDetails;
