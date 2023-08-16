import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { Col, DatePicker, Form, Input, Radio, Row, Select, Spin, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RecordFormWrapper } from './Style';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { axiosDataSubmit, axiosFileClear, axiosFileUploder } from '../../../redux/crud/axios/actionCreator';
import { BasicFormWrapper, Main } from '../../styled';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
function AddNew() {
  const dispatch = useDispatch();
  const { isLoading, url, isFileLoading } = useSelector((state) => {
    return {
      isLoading: state.AxiosCrud.loading,
      url: state.AxiosCrud.url,
      isFileLoading: state.AxiosCrud.fileLoading,
    };
  });
  const { pathname } = useLocation();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    join: '',
  });

  useEffect(() => {
    dispatch(axiosFileClear());
  }, [pathname, dispatch]);

  const handleSubmit = (values) => {
    dispatch(
      axiosDataSubmit({
        ...values,
        image: url,
        join: state.join,
        id: new Date().getTime(),
      }),
    );
    form.resetFields();
    dispatch(axiosFileClear());
  };

  const onChange = (date, dateString) => {
    setState({ join: dateString });
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: false,
    showUploadList: false,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        dispatch(axiosFileUploder(info.file.originFileObj));
      }
      if (info.file.status === 'done') {
        // message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        buttons={[
          <Button className="btn-add_new" size="default" key="1" type="primary">
            <Link to="/admin/axios/crud/axios-view">View All</Link>
          </Button>,
        ]}
        ghost
        title="Add New"
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <RecordFormWrapper>
              <Cards headless>
                <Row justify="center">
                  <Col xl={10} md={16} xs={24}>
                    <BasicFormWrapper>
                      <Form
                        className="add-record-form"
                        style={{ width: '100%' }}
                        layout="vertical"
                        form={form}
                        name="addnew"
                        onFinish={handleSubmit}
                      >
                        <figure className="pro-image align-center-v">
                          <img
                            src={
                              url === null
                                ? require('../../../static/img/avatar/profileImage.png')
                                : `${process.env.REACT_APP_API_ENDPOINT}/${url}`
                            }
                            alt=""
                          />
                          <figcaption>
                            <Upload {...props}>
                              <Link className="upload-btn" to="#">
                                <UilCamera />
                              </Link>
                            </Upload>
                            <div className="info">
                              <Heading as="h4">Profile Photo</Heading>
                            </div>
                            {isFileLoading && (
                              <div className="isUploadSpain">
                                <Spin />
                              </div>
                            )}
                          </figcaption>
                        </figure>
                        <Form.Item name="name" label="Name">
                          <Input placeholder="Input Name" />
                        </Form.Item>
                        <Form.Item name="email" rules={[{ type: 'email' }]} label="Email">
                          <Input placeholder="example@gmail.com" />
                        </Form.Item>
                        <Form.Item name="country" initialValue="" label="Country">
                          <Select style={{ width: '100%' }}>
                            <Option value="">Please Select</Option>
                            <Option value="bangladesh">Bangladesh</Option>
                            <Option value="india">India</Option>
                            <Option value="pakistan">Pakistan</Option>
                            <Option value="srilanka">Srilanka</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="city" initialValue="" label="City">
                          <Select style={{ width: '100%' }}>
                            <Option value="">Please Select</Option>
                            <Option value="dhaka">Dhaka</Option>
                            <Option value="mymensingh">Mymensingh</Option>
                            <Option value="khulna">Khulna</Option>
                            <Option value="barisal">Barisal</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="company" label="Company">
                          <Input placeholder="Company Name" />
                        </Form.Item>
                        <Form.Item name="position" label="Position">
                          <Input placeholder="Position" />
                        </Form.Item>
                        <Form.Item label="Joining Date">
                          <DatePicker onChange={onChange} style={{ width: '100%' }} format={dateFormat} />
                        </Form.Item>
                        <Form.Item name="status" label="Status">
                          <Radio.Group>
                            <Radio value="active">Active</Radio>
                            <Radio value="deactivated">Deactivated</Radio>
                            <Radio value="blocked">Blocked</Radio>
                          </Radio.Group>
                        </Form.Item>
                        <div className="record-form-actions text-right">
                          <Button size="default" htmlType="Save" type="primary">
                            {isLoading ? 'Loading...' : 'Submit'}
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </Col>
                </Row>
              </Cards>
            </RecordFormWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddNew;
