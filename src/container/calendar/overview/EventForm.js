/* eslint-disable import/no-cycle */
import { DatePicker, Form, Input, Radio, Select, TimePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Button } from '../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../styled';
import { EventFormStyleWrap } from '../Style';
import { eventContext } from '../Calendar';

const { Option } = Select;
function EventForm({ onHandleAddEvent }) {
  const eventData = useContext(eventContext);

  const title = eventData && eventData.title ? eventData.title : '';
  const type = eventData && eventData.type ? eventData.type : '';
  const start = eventData && eventData.start ? eventData.start : moment();
  const end = eventData && eventData.end ? eventData.end : moment().add(3, 'hours');
  const description = eventData && eventData.description ? eventData.description : '';
  const label = eventData && eventData.label ? eventData.label : '';

  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    const startDate = moment(values.eventStartDate).format('MM/DD/YYYY');
    const startTime = moment(values.eventStartTime).format('LT');
    const endDate = moment(values.eventEndDate).format('MM/DD/YYYY');
    const endTime = moment(values.eventEndTime).format('LT');
    onHandleAddEvent({
      title: values.eventTitle,
      description: values.eventDescription,
      start: moment(`${endDate} ${endTime}`).format('MM/DD/YYYY/LT'),
      end: moment(`${startDate} ${startTime}`).format('MM/DD/YYYY/LT'),
      type: values.eventType,
      label: values.eventLabel,
    });
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue({
      eventTitle: title,
      eventType: type,
      eventStart: start,
      eventEnd: end,
      eventDescription: description,
      eventLabel: label,
    });
  });

  return (
    <BasicFormWrapper>
      <EventFormStyleWrap>
        <Form form={form} name="addNewEvent" onFinish={handleSubmit}>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Title</span>
            <Form.Item name="eventTitle" initialValue={title}>
              <Input placeholder="Please set event title" />
            </Form.Item>
          </div>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Event Type</span>
            <Form.Item name="eventType" initialValue={type}>
              <Radio.Group>
                <Radio value="event">Event</Radio>
                <Radio value="reminder">Reminder</Radio>
                <Radio value="task">Task</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">Start:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventStartDate" initialValue={moment(start)}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventStartTime" initialValue={moment(start)}>
                <TimePicker format="h:mm:ss A" />
              </Form.Item>
            </div>
          </div>
          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">End:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventEndDate" initialValue={moment(start)}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventEndTime" initialValue={moment(start)}>
                <TimePicker format="h:mm:ss A" />
              </Form.Item>
            </div>
          </div>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Description</span>
            <Form.Item name="eventDescription">
              <Input.TextArea placeholder="Write Your Description" />
            </Form.Item>
          </div>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Label</span>
            <Form.Item name="eventLabel">
              <Select name="title" style={{ width: '100%' }}>
                <Option value="primary">
                  <span className="bullet primary" />
                  Primary
                </Option>
                <Option value="secondary">
                  <span className="bullet secondary" />
                  Secondary
                </Option>
                <Option value="success">
                  <span className="bullet success" />
                  success
                </Option>
                <Option value="warning">
                  <span className="bullet warning" />
                  Warning
                </Option>
                <Option value="info">
                  <span className="bullet info" />
                  Info
                </Option>
              </Select>
            </Form.Item>
          </div>
          <div className="add-event-footer text-right">
            <Button
              className="ant-btn ant-btn-white"
              onClick={() => {
                return form.resetFields();
              }}
            >
              Reset
            </Button>
            <Button htmlType="submit" className="btn-save" type="primary">
              Save
            </Button>
          </div>
        </Form>
      </EventFormStyleWrap>
    </BasicFormWrapper>
  );
}

EventForm.propTypes = {
  // eventData: PropTypes.object,
  onHandleAddEvent: PropTypes.func,
};

export default EventForm;
