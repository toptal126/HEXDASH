import React from 'react';
import { Upload, message } from 'antd';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function CoverSection() {
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
    <div className="cover-image">
      <img style={{ width: '100%' }} src={require('../../../static/img/profile/cover-img.png')} alt="banner" />
      <Upload {...props}>
        <Link to="#">
          <UilCamera /> Change Cover
        </Link>
      </Upload>
    </div>
  );
}

CoverSection.propTypes = {
  match: propTypes.object,
};

export default CoverSection;
