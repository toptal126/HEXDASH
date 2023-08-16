import React, { useState } from 'react';
import { Row, Col, Form, Input, Switch, DatePicker, Upload, message } from 'antd';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';
import UilCreditCard from '@iconscout/react-unicons/icons/uil-credit-card';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import RichTextEditor from 'react-rte';
import propTypes from 'prop-types';
import { FormComponentsWrap, DropDownListComponents } from './overview/Style';
import { Main, BasicFormWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Slider } from '../../components/slider/slider';
import { Tag } from '../../components/tags/tags';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';

const { RangePicker } = DatePicker;
const { Dragger } = Upload;
function FormLayout({ onChange }) {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Components',
    },
  ];
  const [state, setState] = useState({
    onChangeValue: null,
    value: RichTextEditor.createEmptyValue(),
  });

  const onSliderChange = (value) => {
    setState({ ...state, onChangeValue: value });
  };

  const onTextInput = (value) => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };
  const log = () => {
    // console.log(e);
  };
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Form Components" routes={PageRoutes} />
      <Main>
        <FormComponentsWrap>
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <Cards title="Input Groups" className="mb-25">
                <BasicFormWrapper>
                  <Form name="ninjadash_textarea" layout="vertical">
                    <Row gutter="30">
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-name">
                          <Input prefix={<UilUser />} placeholder="Name" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-email">
                          <Input prefix={<UilEnvelope />} placeholder="Email" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-location">
                          <Input prefix={<UilMapMarker />} placeholder="Location" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-password">
                          <Input.Password prefix={<UilLock />} placeholder="Password" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-payment">
                          <Input prefix={<UilCreditCard />} placeholder="Payment Method" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} xs={24} className="mb-25">
                        <Form.Item name="input-phone">
                          <Input prefix={<UilPhone />} placeholder="Phone" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </BasicFormWrapper>
              </Cards>
              <Cards title="Dropdowns" className="mb-25">
                <DropDownListComponents>
                  <div className="ninjadash_dropdown-list">
                    <Dropdown placement="bottomLeft">
                      <Button className="btn-outlined" size="large" outlined type="light">
                        Alerts
                      </Button>
                    </Dropdown>
                    <Dropdown placement="bottomLeft">
                      <Button className="btn-outlined" size="large" outlined type="light">
                        Select an option...
                      </Button>
                    </Dropdown>
                  </div>
                </DropDownListComponents>
              </Cards>
              <Cards title="Datepicker" className="mb-25">
                <div className="ninjadash_datepicker-list">
                  <BasicFormWrapper>
                    <Form name="datepicker-form" layout="vertical">
                      <Form.Item name="datePicker" label="Datepicker">
                        <DatePicker />
                      </Form.Item>
                      <Form.Item name="rangePicker" label="Date Range Picker">
                        <RangePicker />
                      </Form.Item>
                    </Form>
                  </BasicFormWrapper>
                </div>
              </Cards>
              <Cards title="Text Editor" className="mb-25">
                <div className="ninjadash_editor">
                  <RichTextEditor placeholder="Type your message..." value={state.value} onChange={onTextInput} />
                </div>
              </Cards>
            </Col>
            <Col md={12} xs={24}>
              <Cards title="Tags" className="mb-25">
                <div className="taglist-wrap">
                  <Tag>Unremovable</Tag>
                  <Tag closable onClose={log}>
                    Tag 2
                  </Tag>
                  <Tag closable onClose={log}>
                    Tag 3
                  </Tag>
                </div>
              </Cards>
              <Cards title="Toggle buttons" className="mb-25">
                <Switch defaultChecked size="large" />
              </Cards>
              <Cards title="Sliders" className="mb-25">
                <div className="ninjadash_slider-list">
                  <Slider onChange={onSliderChange} defaultValue={30} />
                  <Slider onChange={onSliderChange} range defaultValues={[20, 50]} />
                </div>
              </Cards>
              <Cards title="Dropzone" className="mb-25">
                <div className="ninjadash_uploader-list">
                  <Dragger {...props} className="ninjadash-uploader-large">
                    <p className="ant-upload-text">Drop files here to upload</p>
                  </Dragger>
                  <Dragger {...props}>
                    <p className="ant-upload-text">Drop files here to upload</p>
                  </Dragger>
                </div>
              </Cards>
            </Col>
          </Row>
        </FormComponentsWrap>
      </Main>
    </>
  );
}
FormLayout.propTypes = {
  onChange: propTypes.func,
};
export default FormLayout;
