import React from 'react';
import { Row, Col } from 'antd';
import OverviewCardMesh from '../../../../components/cards/OverviewCardMesh';
import { OverviewDataStyleWrap } from '../../Style';

import OverviewData from '../../../../demoData/overviewMeshData.json';

const OverviewDataList = React.memo(() => {
  return (
    <Row>
      <Col xs={24}>
        <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
          {OverviewData.map((item, i) => {
            return <OverviewCardMesh data={item} key={i} />;
          })}
        </OverviewDataStyleWrap>
      </Col>
    </Row>
  );
});

export default OverviewDataList;
