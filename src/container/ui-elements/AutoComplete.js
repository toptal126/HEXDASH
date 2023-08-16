import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, AutoCompleteWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

const { TextArea } = Input;
function AutoCompletess() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'AutoComplete',
    },
  ];
  const searchData = useSelector((state) => state.headerSearchData);

  const [state, setState] = useState({
    dataSource: [],
    notData: searchData,
  });
  const { dataSource, notData } = state;

  const onSearch = (searchText) => {
    let arrayData = [];
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    if (data.length) {
      data.map((item) => arrayData.push(item.title));
    } else {
      arrayData = ['Data Not Found!'];
    }
    setState({
      dataSource: !searchText ? [] : arrayData,
    });
  };

  const patternSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      notData: data,
    });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="AutoComplete" routes={PageRoutes} />
      <Main>
        <AutoCompleteWrapper>
          <Row gutter={25}>
            <Col md={12} sm={24} xs={24}>
              <Cards title="Basic Usage">
                <div className="auto-complete-input">
                  <AutoComplete options={dataSource} onSearch={onSearch} />
                  <AutoComplete options={dataSource} onSearch={onSearch} />
                </div>
              </Cards>
              <Cards title="Customize Input Component">
                <div className="auto-complete-input">
                  <AutoComplete
                    customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                    options={dataSource}
                    onSearch={onSearch}
                  />
                </div>
              </Cards>
              <Cards title="Lookup-Patterns - Certain Category">
                <AutoComplete onSearch={patternSearch} options={notData} width="100%" patterns />
              </Cards>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="auto-complete-input">
                <Cards title="Customize">
                  <AutoComplete options={dataSource} onSearch={onSearch} />
                </Cards>
              </div>

              <Cards title="Lookup-Patterns - Uncertain Category">
                <AutoComplete options={notData} onSearch={patternSearch} width="100%" patterns patternButtons />
              </Cards>
            </Col>
          </Row>
        </AutoCompleteWrapper>
      </Main>
    </>
  );
}

export default AutoCompletess;
