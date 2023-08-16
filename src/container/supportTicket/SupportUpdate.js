import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

const { Option } = Select;

function SupportCreate({ visible, onCancel, handleSubmit, editableData }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(editableData);
  }, [form, editableData]);

  const handleOk = (value) => {
    handleSubmit({ ...value, id: editableData.id });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      getContainer={false}
      type="primary"
      title="Create Support"
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="supportCreate" onFinish={handleOk}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item name="priority" initialValue="high" label="Priority">
              <Select style={{ width: '100%' }}>
                <Option value="high">High</Option>
                <Option value="medium">Medium</Option>
                <Option value="low">Low</Option>
              </Select>
            </Form.Item>
            <Form.Item name="status" initialValue="open" label="Status">
              <Select style={{ width: '100%' }}>
                <Option value="open">Open</Option>
                <Option value="close">Close</Option>
                <Option value="pending">Pending</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button size="default" htmlType="submit" type="primary" key="submit" onClick={() => handleOk}>
                Submit Ticket
              </Button>
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

SupportCreate.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  editableData: propTypes.oneOf([propTypes.object, false]),
};

export default SupportCreate;
