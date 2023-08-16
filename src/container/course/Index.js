import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import { CoursePagination } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import courseData from '../../demoData/course.json';
import CourseCard from '../../components/cards/CourseCard';

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
function Course() {
  const [state, setState] = useState({
    courses: courseData,
    current: 0,
    pageSize: 0,
  });
  const { courses } = state;
  useEffect(() => {
    if (courseData) {
      setState({
        courses: courseData,
      });
    }
  }, []);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Course " routes={PageRoutes} />
      <Main>
        <Row gutter={25} className="mt-sm-10">
          {courses.map((value, index) => (
            <CourseCard key={index} courseData={value} />
          ))}
          <Col xs={24}>
            <CoursePagination>
              {courseData.length ? (
                <Pagination
                  onChange={onHandleChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  pageSize={10}
                  defaultCurrent={1}
                  total={40}
                />
              ) : null}
            </CoursePagination>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Course;
