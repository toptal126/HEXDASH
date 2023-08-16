/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilExclamationCircle from '@iconscout/react-unicons/icons/uil-exclamation-circle';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Upload, message } from 'antd';
import { MailBox } from './style';
import { Button } from '../../../components/buttons/buttons';

function MailComposer({ onChange, onSend, defaultTag, replay, text }) {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: defaultTag ? [defaultTag] : [],
  });

  const onChanges = (value) => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };

  const handleChange = (tags) => {
    setState({ ...state, tags });
  };

  const onSubmit = () => {
    onSend && onSend(state.value.toString('html'));
  };

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
    <MailBox>
      <div className="body">
        {!text && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="group">
            <div className="reply-inner" style={{ display: 'flex', alignItems: 'center' }}>
              {!replay ? null : <span className="reply-title">Replay To</span>}
              <TagsInput
                inputProps={{
                  placeholder: replay ? null : 'To',
                }}
                value={state.tags}
                onChange={handleChange}
              />
            </div>
            <span className="mail-cc">Cc</span>
          </div>
        )}
        <div className="group">
          <RichTextEditor placeholder="Type your message..." value={state.value} onChange={onChanges} />
        </div>
      </div>
      {!text && (
        <div className="footer">
          <div className="left d-flex align-items-center">
            <Button size="default" type="primary" onClick={onSubmit} raised>
              Send
            </Button>
            <Link to="#">
              <Upload {...props}>
                <UilPaperclip />
              </Upload>
            </Link>
            <Link to="#">
              <UilExclamationCircle />
            </Link>
          </div>
          <div className="right">
            <Link to="#">
              <UilTrashAlt />
            </Link>
          </div>
        </div>
      )}
    </MailBox>
  );
}

MailComposer.propTypes = {
  onChange: propTypes.func,
  onSend: propTypes.func,
  defaultTag: propTypes.string,
  replay: propTypes.bool,
  text: propTypes.bool,
};

export default MailComposer;
