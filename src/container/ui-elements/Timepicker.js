import React, { useState } from 'react';
import { Row, Col, TimePicker, Button } from 'antd';
import moment from 'moment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const format = 'HH:mm';
function TimePickers() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Time Picker',
    },
  ];
  const [state, setState] = useState({ open: false });

  const handleOpenChange = (open) => {
    setState({ open });
  };

  const handleClose = () => setState({ open: false });

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Time Picker" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('00:00:00', 'HH:mm:ss')} />
            </Cards>
            <Cards title="interval option" caption="The simplest use of Time picker">
              <TimePicker minuteStep={15} secondStep={10} />
            </Cards>
            <Cards title="Three Size" caption="The simplest use of Time picker">
              <div className="timepicker-list">
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} style={{ marginRight: '10px' }} />
                <TimePicker
                  defaultValue={moment('12:08:23', 'HH:mm:ss')}
                  size="large"
                  style={{ marginRight: '10px' }}
                />
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
              </div>
            </Cards>
            <Cards title="Addon" caption="The simplest use of Time picker">
              <TimePicker
                open={state.open}
                onOpenChange={handleOpenChange}
                renderExtraFooter={() => (
                  <Button size="small" type="primary" onClick={handleClose}>
                    Ok
                  </Button>
                )}
              />
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Disebled" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
            </Cards>
            <Cards title="12 hours" caption="The simplest use of Time picker">
              <div className="timepicker-list">
                <TimePicker use12Hours style={{ marginRight: '10px' }} />
                <TimePicker use12Hours format="h:mm:ss A" style={{ marginRight: '10px' }} />
                <TimePicker use12Hours format="h:mm a" />
              </div>
            </Cards>
            <Cards title="Hours and minute" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default TimePickers;
