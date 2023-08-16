import React from 'react';
import { Row, Col, Collapse } from 'antd';
import { ChangelogWrapper, VersionHistoryList } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import versions from '../../demoData/changelog.json';

const { Panel } = Collapse;

function ChangeLog() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Changelog',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Changelog" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xxl={19} md={16} xs={24}>
            <ChangelogWrapper>
              <Cards
                title={
                  <>
                    <span className="v-num">Version {versions[0].version} </span> <span className="sign">-</span>{' '}
                    <span className="rl-date">{versions[0].date}</span>
                  </>
                }
              >
                <div className="changelog-featured">
                  <div className="version-list">
                    {versions[0].new && (
                      <div className="version-list__single">
                        <div className="version-list__top">
                          <span className="badge badge-lg badge-success">New</span>
                        </div>
                        <ul className="version-success">
                          {versions[0].new.map((item, key) => {
                            return <li key={key + 1}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    )}
                    {versions[0].fixed && (
                      <div className="version-list__single">
                        <div className="version-list__top">
                          <span className="badge badge-lg badge-info">Fixed</span>
                        </div>
                        <ul className="version-info">
                          {versions[0].fixed.map((item, key) => {
                            return <li key={key + 1}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    )}

                    {versions[0].updated && (
                      <div className="version-list__single">
                        <div className="version-list__top">
                          <span className="badge badge-lg badge-primary">Updated</span>
                        </div>
                        <ul className="version-primary">
                          {versions[0].updated.map((item, key) => {
                            return <li key={key + 1}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="changelog-accordion">
                  <Collapse accordion>
                    {versions.map((version, index) => {
                      return (
                        index >= 1 && (
                          <Panel
                            key={version.id}
                            header={
                              <>
                                <span className="v-num">{version.version} - </span>
                                <span className="rl-date">{version.date}</span>
                              </>
                            }
                          >
                            <div className="version-list">
                              {version.new && (
                                <div className="version-list__single">
                                  <div className="version-list__top">
                                    <span className="badge badge-lg badge-success">New</span>
                                  </div>
                                  <ul className="version-success">
                                    {version.new.map((item, key) => {
                                      return <li key={key + 1}>{item}</li>;
                                    })}
                                  </ul>
                                </div>
                              )}
                              {version.fixed && (
                                <div className="version-list__single">
                                  <div className="version-list__top">
                                    <span className="badge badge-lg badge-info">Fixed</span>
                                  </div>
                                  <ul className="version-info">
                                    {version.fixed.map((item, key) => {
                                      return <li key={key + 1}>{item}</li>;
                                    })}
                                  </ul>
                                </div>
                              )}

                              {version.updated && (
                                <div className="version-list__single">
                                  <div className="version-list__top">
                                    <span className="badge badge-lg badge-primary">Updated</span>
                                  </div>
                                  <ul className="version-primary">
                                    {version.updated.map((item, key) => {
                                      return <li key={key + 1}>{item}</li>;
                                    })}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </Panel>
                        )
                      );
                    })}
                  </Collapse>
                </div>
              </Cards>
            </ChangelogWrapper>
          </Col>
          <Col xxl={5} md={8} xs={24}>
            <VersionHistoryList>
              <Cards title="CHANGELOG">
                <h4 className="history-title">VERSION HISTORY</h4>
                <ul className="v-history-list">
                  {versions.map((version) => {
                    return (
                      <li key={version.id}>
                        <span className="version-name">Version {version.version}</span>
                        <span className="version-date">{version.date}</span>
                      </li>
                    );
                  })}
                </ul>
              </Cards>
            </VersionHistoryList>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ChangeLog;
