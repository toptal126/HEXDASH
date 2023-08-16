import React from 'react';
import { Form, Input, Button } from 'antd';
import { VerticalFormStyleWrap } from './Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

function VerticalForm() {
  return (
    <BasicFormWrapper>
      <VerticalFormStyleWrap>
        <Cards title="Vertical Form">
          <Form name="ninjadash-vertical-form" layout="vertical">
            <Form.Item name="name" initialValue="Duran Clayton" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" initialValue="username@email.com" label="Email Address">
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item name="password" initialValue="1234567" label="Password">
              <Input.Password />
            </Form.Item>
            <div className="ninjadash-form-action">
              <Button className="btn-signin" htmlType="submit" type="light" size="large">
                Cancel
              </Button>
              <Button className="btn-signin" type="primary" size="large">
                Save
              </Button>
            </div>
          </Form>
        </Cards>
      </VerticalFormStyleWrap>
    </BasicFormWrapper>
  );
}

export { VerticalForm };
