import { Col, Row } from 'antd';
import { useState } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Tag } from '../../components/tags/tags';
import { Main } from '../styled';

function Tags() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Tags',
    },
  ];
  const [state, setstate] = useState({
    checke: null,
  });
  const log = () => {
    // console.log(e);
  };

  const checked = (checke) => {
    setstate({ ...state, checke });
  };

  const preventDefault = () => {
    // console.log('Clicked! But prevent default.');
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tags" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of tags">
              <div className="taglist-wrap">
                <Tag>Tag 1</Tag>
                <Tag>
                  <a href="https://demo.dashboardmarket.com/ninjadash-react">Link</a>
                </Tag>
                <Tag closable onClose={log}>
                  Tag 2
                </Tag>
                <Tag closable onClose={preventDefault}>
                  Prevent Default
                </Tag>
              </div>
            </Cards>
            <Cards title="Hot Tag" caption="The simplest use of tags">
              <Tag hottags onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Colorful Tag" caption="The simplest use of tags">
              <h4 style={{ marginBottom: 16 }}>Presets:</h4>
              <div className="taglist-wrap">
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              <h4 style={{ margin: '16px 0' }}>Custom:</h4>
              <div className="taglist-wrap">
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </div>
            </Cards>
            <Cards title="Animated Tag" caption="The simplest use of tags">
              <Tag animate onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Tags;
