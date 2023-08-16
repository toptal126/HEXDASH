import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { JobsCard } from '../Style';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const JobListView = React.memo(({ job }) => {
  const { title, id, deadline, location, jobType, salary, icon } = job;

  return (
    <JobsCard>
      <div className="ninjadash-job-card ninjadash-job-card-listview">
        <Row gutter={15}>
          <Col lg={8} md={10} xs={24}>
            <div className="ninjadash-media align-center-v">
              <div className="ninjadash-media__figure">
                <img src={require(`../../../${icon}`)} alt="" />
              </div>
              <div className="ninjadash-media__body">
                <Heading as="h4">
                  <Link to={`/admin/app/jobDetails/${id}`}>{title}</Link>
                </Heading>
                <p>{location}</p>
              </div>
            </div>
          </Col>
          <Col xxl={11} md={14} lg={16} xs={24}>
            <ul className="ninjadash-jobinfo-meta">
              <li>
                <span className="ninjadash-jobinfo-meta__label">Job Type:</span>
                <span className="ninjadash-jobinfo-meta__info">{jobType}</span>
              </li>
              <li>
                <span className="ninjadash-jobinfo-meta__label">Deadline:</span>
                <span className="ninjadash-jobinfo-meta__info">{deadline}</span>
              </li>
              <li>
                <span className="ninjadash-jobinfo-meta__label">Salary:</span>
                <span className="ninjadash-jobinfo-meta__info">{salary}</span>
              </li>
            </ul>
          </Col>
          <Col xxl={5} xs={24}>
            <div className="ninjadash-job-card__action">
              <Button size="small" type="light" shape="round" to={`/admin/app/jobDetails/${id}`}>
                View Details
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </JobsCard>
  );
});

JobListView.propTypes = {
  job: PropTypes.object,
};

export default JobListView;
