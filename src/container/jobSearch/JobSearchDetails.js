import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Spin } from 'antd';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import { useDispatch, useSelector } from 'react-redux';
import { JobDetailsWrap, AdditionalInfoStyle } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { singlePageReade } from '../../redux/jobs/actionCreator';
import { Button } from '../../components/buttons/buttons';

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function JobSearchDetails() {
  const { dataState } = useSelector((state) => {
    return {
      dataState: state.jobs.job,
    };
  });

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (dispatch) {
      dispatch(singlePageReade(params.id));
    }
  }, [dispatch, params.id]);

  const navigate = useNavigate();

  const navigateToApply = () => {
    navigate('/admin/app/job/apply');
  };

  return (
    <JobDetailsWrap>
      <PageHeader
        className="ninjadash-page-header-main ninjadash-pageheader-with-back"
        title={
          <>
            <h4>Job Details</h4>
            <span className="back-link">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                to="#"
              >
                <UilArrowLeft />
                Go back
              </Link>
            </span>
          </>
        }
        routes={PageRoutes}
      />
      <Main>
        {dataState.length ? (
          <Row gutter={15} className="mt-sm-10">
            <Col xxl={18} lg={16} xs={24}>
              <Cards headless>
                {/* <figure>
                  <img src={require("../../" + dataState[0].icon)} alt="" /> 
                  <figcaption>
                    <h2>{dataState[0].title}</h2>
                    <p>{dataState[0].location}</p>
                    <Button onClick={navigateToApply} size='large' type="primary">Apply Now</Button>
                  </figcaption>
                </figure> */}

                <div className="ninjadash-media align-center-v">
                  <div className="ninjadash-media__figure">
                    <img src={require(`../../${dataState[0].icon}`)} alt="" />
                  </div>
                  <div className="ninjadash-media__body">
                    <Heading as="h4">{dataState[0].title}</Heading>
                    <p>{dataState[0].location}</p>
                  </div>
                </div>

                <article>
                  <h2>Job Description</h2>
                  <p>
                    There are have a many variations of passages of Lorem Ipsum available, but the randomised words
                    which don`t look even slightly believable. If you are going to sdsss embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                    necessary, making which don`t first true generator on the Internet.
                  </p>
                </article>
                <article>
                  <h2>Requirements</h2>
                  <ul>
                    <li>At least 3+ years of working experience in PHP/WordPress.</li>
                    <li>
                      Solid PHP knowledge and a good understanding of advanced PSP concepts eg. OOP, Namespace, Taits
                      ,etc
                    </li>
                    <li>HTMl/CSS</li>
                    <li>Intermediate to Advanced JavaScript knowledge.</li>
                    <li>
                      Solid understanding of WordPress core features eg. action/hooks,restAPI,post type,taxonomies,post
                      meta, database stuctures,etc.
                    </li>
                    <li>Good understanding of PHP/WordPress coding standard</li>
                    <li>Must be able to write quality code following the coding standards and best practice.</li>
                    <li>Ability to work without supervision.</li>
                    <li>must be polite and should have good interpersonal communication skills.</li>
                    <li>Fast learner, self motivated , eager to learn new technologies.</li>
                  </ul>
                </article>
                <article>
                  <h2>Preferable Skills</h2>
                  <ul>
                    <li>Fluency in English.</li>
                    <li>Experience in other PHP framework.</li>
                    <li>HTMl/CSS</li>
                    <li>Knowledge in Software design patterns.</li>
                    <li>Experience in Vue / React.</li>
                    <li>VPS/Server knowledge.</li>
                  </ul>
                </article>
              </Cards>
            </Col>
            <Col xxl={6} lg={8} xs={24}>
              <Cards headless>
                <AdditionalInfoStyle>
                  <h2 className="ninjadash-additional-info__title">Information</h2>
                  <ul className="ninjadash-additional-info__list">
                    <li>
                      <span className="ninjadash-list-label">Job Type:</span>
                      <span className="ninjadash-list-text">{dataState[0].jobType}</span>
                    </li>
                    <li>
                      <span className="ninjadash-list-label">Industry:</span>
                      <span className="ninjadash-list-text">Development</span>
                    </li>
                    <li>
                      <span className="ninjadash-list-label">Salary:</span>
                      <span className="ninjadash-list-text">{dataState[0].salary}</span>
                    </li>
                    <li>
                      <span className="ninjadash-list-label">Location:</span>
                      <span className="ninjadash-list-text">{dataState[0].location}</span>
                    </li>
                    <li>
                      <span className="ninjadash-list-label">Deadline:</span>
                      <span className="ninjadash-list-text">{dataState[0].deadline}</span>
                    </li>
                  </ul>
                  <Button onClick={navigateToApply} size="default" type="primary" block>
                    Apply Now
                  </Button>
                </AdditionalInfoStyle>
              </Cards>
            </Col>
          </Row>
        ) : (
          <Cards headless>
            <Spin />
          </Cards>
        )}
      </Main>
    </JobDetailsWrap>
  );
}

export default JobSearchDetails;
