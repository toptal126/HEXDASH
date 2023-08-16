/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Row, Col, Form, Input, Select, Upload, message, Radio, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { GridForm } from './overview/GridForm';
import { SizedForm } from './overview/SizedForm';
import { InputForm } from './overview/InputForm';
import { CheckListWrap } from './overview/Style';
import { Main, BasicFormWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

const { Option } = Select;
const { TextArea } = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function FormElements() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Elements',
    },
  ];
  function onChange() {}
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Form Elements" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <GridForm />
          </Col>
          <Col lg={12} xs={24}>
            <SizedForm />
            <InputForm />
          </Col>
          <Col lg={12} xs={24}>
            <BasicFormWrapper>
              <Cards title="Text Input" className="mb-25">
                <Form name="ninjadash-textarea" layout="vertical">
                  <Form.Item name="basic-textarea" label="Basic Textarea">
                    <TextArea />
                  </Form.Item>
                  <Form.Item name="unresizable-textarea" label="Unresizable Textarea">
                    <TextArea className="ninjadash-unresizable" />
                  </Form.Item>
                </Form>
              </Cards>
            </BasicFormWrapper>
            <BasicFormWrapper>
              <Cards title="Select" className="mb-25">
                <Form name="ninjadash-select" layout="vertical">
                  <Form.Item name="basic-select" label="Basic Select">
                    <Select size="large" className="ninjadash-fullwidth-select">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="disabled-select" label="Disabled Basic Select">
                    <Select size="large" className="ninjadash-fullwidth-select" disabled>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="multi-select" initialValue={['1', '2']} label="Multiple Select">
                    <Select size="large" mode="multiple" className="ninjadash-fullwidth-select">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="disabled-multi-select" initialValue={['1', '2']} label="Disabled Multiple Select">
                    <Select size="large" mode="multiple" className="ninjadash-fullwidth-select" disabled>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Cards>
            </BasicFormWrapper>
            <BasicFormWrapper>
              <Cards title="File Browser" className="ninjadash-upload-form mb-25">
                <Form name="ninjadash-upload" layout="vertical">
                  <Upload className="ninjadash-upload-basic" {...props}>
                    <span className="ninjadash-upload-text">Select File</span>
                    <Link to="#" className="ninjadash-upload-browse">
                      Browse
                    </Link>
                  </Upload>
                </Form>
              </Cards>
            </BasicFormWrapper>
            <CheckListWrap className="mb-25">
              <Cards title="Checkboxes and Radios">
                <div className="ninjadash-check-list-wrap">
                  <ul className="ninjadash-check-list ninjadash-check-list--left">
                    <li>
                      <Checkbox onChange={onChange}>Checkbox</Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} checked>
                        Checked
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} disabled>
                        Disabled Unchecked
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} checked disabled>
                        Disabled Checked
                      </Checkbox>
                    </li>
                  </ul>
                  <ul className="ninjadash-check-list ninjadash-check-list--right">
                    <li>
                      <Radio>Uncheck</Radio>
                    </li>
                    <li>
                      <Radio checked>Checked</Radio>
                    </li>
                    <li>
                      <Radio disabled>Disabled Unchecked</Radio>
                    </li>
                    <li>
                      <Radio checked disabled>
                        Disabled Checked
                      </Radio>
                    </li>
                  </ul>
                </div>
              </Cards>
            </CheckListWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default FormElements;
