import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse } from 'antd';
import UilPlay from '@iconscout/react-unicons/icons/uil-play';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilBook from '@iconscout/react-unicons/icons/uil-book-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilAward from '@iconscout/react-unicons/icons/uil-award';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';
import ModalVideo from 'react-modal-video';
import { CourseDetailsWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CollapseStyleWrap } from '../styled';
import { Button } from '../../components/buttons/buttons';
import '../profile/myProfile/overview/video-modal.css';

const { Panel } = Collapse;
const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'course',
    breadcrumbName: 'Courses',
  },
];

const lectures = [
  {
    id: '1',
    title: 'Getting Started',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '2',
    title: 'User Interface Vs User Experience',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '3',
    title: 'Design Fundamental',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '4',
    title: 'Colour Theory',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '5',
    title: 'Typography',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '6',
    title: 'Live Project 01',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '7',
    title: 'Live Project 02',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
];

function CourseDetails() {
  const [isOpen, setOpen] = useState(false);

  return (
    <CourseDetailsWrap>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <PageHeader className="ninjadash-page-header-main" title="Course " routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col lg={12} xs={24}>
            <div className="ninjadash-course-details-wrap">
              <div className="ninjadash-course-content">
                <h2 className="ninjadash-course-content-top-title">UI/UX Design Masters Course</h2>
                <div className="ninjadash-course-info">
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                  </p>
                </div>
                <h2 className="ninjadash-course-content__title">About Instructor </h2>
                <div className="ninjadash-course-instructor">
                  <img src={require(`../../static/img/users/14.jpg`)} alt="ninjadash course" />
                  <div className="ninjadash-course-instructor__info">
                    <h5 className="ninjadash-course-instructor__name">David Warner</h5>
                    <span className="ninjadash-course-instructor__designation">
                      Senior UI/UX Designer at Dribble, Top Rated Freelancer at Upwork{' '}
                    </span>
                  </div>
                </div>
                <h2 className="ninjadash-course-content__title">About This Course </h2>
                <p>
                  User interface design or user interface engineering is the design of user interfaces for machines and
                  software, such as computers, home appliances, mobile devices, and other electronic devices, with the
                  focus on maximizing usability and the user experience.
                </p>
                <p className="mb-0">
                  User interface design or user interface engineering is the design of user interfaces for machines and
                  software, such as computers, home appliances, mobile devices, and other electronic devices, with the
                  focus on maximizing.
                </p>
                <h2 className="ninjadash-course-content__title">What You Will Learn</h2>
                <ul className="ninjadash-course-content__list">
                  <li>Basic to Advance knowledge of UI/UX Design </li>
                  <li>UI/UX Design Fundamental </li>
                  <li>Colour Theory </li>
                  <li>Typography </li>
                  <li>Design Systems </li>
                  <li>Alignment </li>
                  <li>User Research </li>
                  <li>User Flow </li>
                </ul>
                <h2 className="ninjadash-course-content__title">Course content </h2>
                <div className="ninjadash-course-content__lectures">
                  <CollapseStyleWrap>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={['1']}
                      expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                    >
                      {lectures.map((lecture) => (
                        <Panel
                          header={`${lecture.title}`}
                          key={lecture.id}
                          extra={
                            <>
                              <span>03 Lectures</span> <span>15:00</span>
                            </>
                          }
                        >
                          <ul>
                            {lecture.classes.map((singleClass, index) => (
                              <li key={index}>
                                <Link
                                  className="ninjadash-course-content__lecture--single"
                                  onClick={() => setOpen(true)}
                                  to="#"
                                >
                                  <UilPlay />
                                  <span className="ninjadash-course-content__lecture--title">
                                    {singleClass.classTitle}
                                  </span>
                                  <div className="ninjadash-course-content__lecture--extra">
                                    <p>Preview</p>
                                    <span className="ninjadash-course-content__lecture--duration">5:00</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Panel>
                      ))}
                    </Collapse>
                  </CollapseStyleWrap>
                </div>
                <h2 className="ninjadash-course-content__title">FAQ </h2>
                <div className="ninjadash-course-content__faqs">
                  <CollapseStyleWrap>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={['1']}
                      expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                    >
                      <Panel header="How long does it take to download updates?" key="1">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="How to use SCSS variables to build custom color?" key="2">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="How long does it take to download updates?" key="3">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="What is the flex layout?" key="4">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="How long does it take to download updates?" key="5">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="Where to buy this UI dashboard?" key="6">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                      <Panel header="How long does it take to download updates?" key="7">
                        <p>
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                          assumenda shoreditch et.
                        </p>
                      </Panel>
                    </Collapse>
                  </CollapseStyleWrap>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div className="ninjadash-course-infobox">
              <div className="ninjadash-course-infobox__video">
                <iframe
                  height="315"
                  src="https://www.youtube.com/embed/dBd1j6x2HOo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <ul className="ninjadash-course-meta">
                <li className="ninjadash-course-meta__item">
                  <span className="ninjadash-course-meta__item--icon bg-primary">
                    <UilBook />
                  </span>
                  <span className="ninjadash-course-meta__item--text">35 Lectures</span>
                </li>
                <li className="ninjadash-course-meta__item">
                  <span className="ninjadash-course-meta__item--icon bg-secondary">
                    <UilClock />
                  </span>
                  <span className="ninjadash-course-meta__item--text">15 Hours</span>
                </li>
                <li className="ninjadash-course-meta__item">
                  <span className="ninjadash-course-meta__item--icon bg-success">
                    <UilAward />
                  </span>
                  <span className="ninjadash-course-meta__item--text">Certificate</span>
                </li>
                <li className="ninjadash-course-meta__item">
                  <span className="ninjadash-course-meta__item--icon bg-warning">
                    <UilSync />
                  </span>
                  <span className="ninjadash-course-meta__item--text">Lifetime access</span>
                </li>
              </ul>
              <div className="ninjadash-course-infobox__action">
                <span className="ninjadash-course-infobox__price">$250</span>
                <Button size="default" type="primary">
                  Start This Course
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </CourseDetailsWrap>
  );
}

export default CourseDetails;
