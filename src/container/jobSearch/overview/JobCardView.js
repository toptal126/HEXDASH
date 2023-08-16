/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';
import { JobsCard } from '../Style';

function JobCardView({ job }) {
  const { id, title, deadline, location, jobType, salary, icon } = job;

  return (
    <JobsCard>
      <div className="ninjadash-job-card align-center-v">
        <div className="ninjadash-job-card__content">
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
          <ul className="ninjadash-jobinfo-meta">
            <li>
              <span className="ninjadash-jobinfo-meta__label">Deadline:</span>
              <span className="ninjadash-jobinfo-meta__info">{deadline}</span>
            </li>
            <li>
              <span className="ninjadash-jobinfo-meta__label">Job Type:</span>
              <span className="ninjadash-jobinfo-meta__info">{jobType}</span>
            </li>
            <li>
              <span className="ninjadash-jobinfo-meta__label">Salary:</span>
              <span className="ninjadash-jobinfo-meta__info">{salary}</span>
            </li>
          </ul>
        </div>
        <div className="ninjadash-job-card__action">
          <Link className="ninjadash-job-card-btn-details" to={`/admin/app/jobDetails/${id}`}>
            View Details
          </Link>
        </div>
      </div>
    </JobsCard>
  );
}

JobCardView.propTypes = {
  job: PropTypes.object,
};

export default JobCardView;
