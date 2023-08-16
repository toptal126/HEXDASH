import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload, Spin } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { RecordFormWrapper } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Main, BasicFormWrapper } from '../../styled';
import { fbDataUpdate, fbDataSingle, fbFileUploder } from '../../../redux/firebase/firestore/actionCreator';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
function Edit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { crud, isLoading, image, isFileLoading } = useSelector((state) => {
    return {
      crud: state.singleCrud.data,
      isLoading: state.crud.loading,
      image: state.crud.image,
      isFileLoading: state.crud.fileLoading,
    };
  });
  const [state, setState] = useState({
    join: null,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    if (crud) {
      form.setFieldsValue(crud);
      setState({ join: crud.join });
    }
  }, [form, crud]);

  useEffect(() => {
    if (fbDataSingle) {
      dispatch(fbDataSingle(parseInt(id, 10)));
    }
  }, [dispatch, id]);

  const handleSubmit = (values) => {
    dispatch(
      fbDataUpdate(parseInt(id, 10), {
        ...values,
        image: image || crud.image,
        join: state.join,
        id: parseInt(id, 10),
      }),
    );
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
        dispatch(fbFileUploder(info.file.originFileObj));
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
        routes={[]}
        buttons={[
          <Button className="btn-add_new" size="default" key="1" type="primary">
            <Link key="1" to="/admin/firestore/fbView">
              View All
            </Link>
          </Button>,
        ]}
        ghost
        title="Update Your Recored"
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <RecordFormWrapper>
              <Cards headless>
                {crud === null ? (
                  <div className="record-spin">
                    <Spin />
                  </div>
                ) : (
                  <Row justify="center">
                    <Col xl={10} md={16} xs={24}>
                      <figure className="pro-image align-center-v mt-25">
                        {crud !== null && (
                          <img
                            src={
                              image ||
                              (crud.image ? crud.image : require('../../../static/img/avatar/profileImage.png'))
                            }
                            alt={crud.id}
                          />
                        )}

                        <figcaption>
                          <Upload {...props}>
                            <Link className="upload-btn" to="#">
                              <FeatherIcon icon="camera" size={16} />
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
                      <BasicFormWrapper>
                        {crud.name !== undefined ? (
                          <Form
                            className="add-record-form"
                            style={{ width: '100%' }}
                            layout="vertical"
                            form={form}
                            name="edit"
                            onFinish={handleSubmit}
                            initialValues={crud}
                          >
                            <Form.Item name="name" label="Name">
                              <Input />
                            </Form.Item>
                            <Form.Item name="email" rules={[{ type: 'email' }]} label="Email">
                              <Input />
                            </Form.Item>
                            <Form.Item name="country" label="Country">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="bangladesh">Bangladesh</Option>
                                <Option value="india">India</Option>
                                <Option value="pakistan">Pakistan</Option>
                                <Option value="srilanka">Srilanka</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="city" label="City">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="dhaka">Dhaka</Option>
                                <Option value="mymensingh">Mymensingh</Option>
                                <Option value="khulna">Khulna</Option>
                                <Option value="barisal">Barisal</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="company" label="Company">
                              <Input />
                            </Form.Item>
                            <Form.Item name="position" label="Position">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Joining Date">
                              <DatePicker
                                defaultValue={moment(`${state.join === null ? crud.join : state.join}`, dateFormat)}
                                onChange={onChange}
                                style={{ width: '100%' }}
                                format={dateFormat}
                              />
                            </Form.Item>
                            <Form.Item name="status" label="Status">
                              <Radio.Group>
                                <Radio value="active">Active</Radio>
                                <Radio value="deactivated">Deactivated</Radio>
                                <Radio value="blocked">Blocked</Radio>
                              </Radio.Group>
                            </Form.Item>
                            <div className="record-form-actions text-right">
                              <Button htmlType="submit" type="primary">
                                {isLoading ? 'Loading...' : 'Update'}
                              </Button>
                            </div>
                          </Form>
                        ) : null}
                      </BasicFormWrapper>
                    </Col>
                  </Row>
                )}
              </Cards>
            </RecordFormWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Edit;
