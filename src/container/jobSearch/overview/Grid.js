import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import JobCardView from './JobCardView';
import Heading from '../../../components/heading/heading';
import { PaginationWrapper, NotFoundWrapper } from '../Style';
import { jobsReadData } from '../../../redux/jobs/actionCreator';

function Grid() {
  const { jobs, isLoader } = useSelector((state) => {
    return {
      jobs: state.jobs.jobs,
      isLoader: state.jobs.loading,
    };
  });

  const dispatch = useDispatch();

  const [state, setState] = useState({
    current: 0,
    pageSize: 0,
  });

  useEffect(() => {
    if (dispatch) {
      dispatch(jobsReadData());
    }
  }, [dispatch]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={30}>
      {isLoader ? (
        <Col xs={24}>
          <div className="spin">
            <Spin />
          </div>
        </Col>
      ) : jobs.length ? (
        jobs.map((job, key) => {
          return (
            <Col xxl={12} lg={12} xs={24} key={key + 1}>
              <JobCardView job={job} />
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <NotFoundWrapper>
            <Heading as="h1">Data Not Found</Heading>
          </NotFoundWrapper>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <PaginationWrapper style={{ marginTop: 10 }}>
          {jobs.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </PaginationWrapper>
      </Col>
    </Row>
  );
}

export default Grid;
