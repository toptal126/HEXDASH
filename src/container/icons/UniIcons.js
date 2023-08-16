import React from 'react';
import { Row, Col } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Unicons from '@iconscout/react-unicons';
import { IconWrapper } from './IconStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

function UnIconsSvg() {
  return (
    <>
      <PageHeader title="Unicons Icon" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="large">
                <Row gutter={15}>
                  {Object.keys(Unicons).map((icon) => {
                    const IconTag = Unicons[icon];
                    return (
                      <Col xl={6} md={12} xs={24} key={icon}>
                        <div className="icon-single unicon align-center-v">
                          <IconTag />
                          <span className="ninjadash-icon-text">{icon.substring(3)}</span>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Cards>
            </IconWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default UnIconsSvg;
