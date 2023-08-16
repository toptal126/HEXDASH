import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input, Upload, message } from 'antd';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import { JobApplicationWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main, BasicFormWrapper } from '../styled';
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
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main ninjadash-pageheader-with-back"
        title={
          <>
            <h4>Job Apply</h4>
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
        <Row gutter={15}>
          <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} lg={16} xs={24}>
            <JobApplicationWrap>
              <Cards headless>
                <h2 className="ninjadash-application-title">Submit your application</h2>
                <BasicFormWrapper className="mb-25">
                  <Form name="ninjadash-vertical-form" layout="vertical">
                    <Form.Item name="name" label="Full Name">
                      <Input size="large" placeholder="e.g. John Smith" />
                    </Form.Item>
                    <Form.Item name="email" label="Email Address">
                      <Input size="large" placeholder="Enter Email" />
                    </Form.Item>

                    <Form.Item name="phone" label="Phone">
                      <Input size="large" placeholder="e.g. +8811111111111" />
                    </Form.Item>
                    <Form.Item name="about" label="About you">
                      <Input.TextArea placeholder="Tell us about yourself" />
                    </Form.Item>
                    <Form.Item name="website" label="Website URL (optional)">
                      <Input size="large" placeholder="e.g. www.ninjadash.com" />
                    </Form.Item>
                    <Form.Item name="portfolio" label="Portfolio URL (Optional)">
                      <Input size="large" placeholder="e.g. Portfolio" />
                    </Form.Item>
                    <Form.Item name="github" label="Github URL (Optional)">
                      <Input size="large" placeholder="e.g. Github" />
                    </Form.Item>
                    <Form.Item name="newRole" label="What are you looking for in a new role?">
                      <Input.TextArea placeholder="What can we help with?" />
                    </Form.Item>
                    <Form.Item name="interested" label="Why are you interested in working with us?">
                      <Input.TextArea placeholder="What can we help with?" />
                    </Form.Item>
                    <Form.Item name="past" label="What has been your most challenging experience in a past role? ">
                      <Input.TextArea placeholder="What can we help with?" />
                    </Form.Item>
                    <Form.Item name="salary" label="Salary Expectation">
                      <Input size="large" placeholder="" />
                    </Form.Item>
                    <Form.Item name="file" label="Please upload your CV">
                      <Upload {...props}>
                        <Button type="secondary" size="small">
                          <UilPaperclip />
                          Browse
                        </Button>
                      </Upload>
                    </Form.Item>

                    <div className="ninjadash-form-action">
                      <Button htmlType="submit" className="btn-signin" type="primary" size="large">
                        Submit Application
                      </Button>
                    </div>
                  </Form>
                </BasicFormWrapper>
              </Cards>
            </JobApplicationWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default JobSearchDetails;
