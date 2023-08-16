import React, { useState } from 'react';
import { Row, Col, Upload, message } from 'antd';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, ImportStyleWrap } from '../styled';
import Heading from '../../components/heading/heading';

const { Dragger } = Upload;
function Import() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Import',
    },
  ];
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });

  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setState({ ...state, file: info.file, list: info.fileList });
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
    defaultFileList: [],
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <UilTrashAlt />,
    },
  };
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Import" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <ImportStyleWrap>
              <div className="sDash_import-box">
                <Row gutter={15}>
                  <Col xs={24}>
                    <div className="sDash_import-inner">
                      <Dragger {...fileUploadProps}>
                        <p className="ant-upload-drag-icon">
                          <UilUpload />
                        </p>
                        <Heading as="h4" className="ant-upload-text">
                          <span> Drop File</span>
                          <span className="ant-upload-hint">
                            or <span>Browse</span>
                          </span>
                        </Heading>
                      </Dragger>
                    </div>
                  </Col>
                </Row>
              </div>
            </ImportStyleWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Import;
