import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import JobListView from './JobListView';
import Heading from '../../../components/heading/heading';
import { PaginationWrapper } from '../Style';
import { jobsReadData } from '../../../redux/jobs/actionCreator';

function List() {
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
    <Row gutter={15}>
      {isLoader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : jobs.length ? (
        jobs.map((job, key) => {
          return (
            <Col xs={24} key={key + 1}>
              <JobListView job={job} />
            </Col>
          );
        })
      ) : (
        <Col xs={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        {jobs.length ? (
          <PaginationWrapper style={{ marginTop: 20 }}>
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={100}
            />
          </PaginationWrapper>
        ) : null}
      </Col>
    </Row>
  );
}

export default List;
