import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Col, Row, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link, NavLink } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { LocationTableWrap, SaleLocationMap } from '../../Style';

import salesLocations from '../../../../demoData/table-data.json';

const { salesLocation } = salesLocations;

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
const moreContent = (
  <>
    <NavLink to="#">
      <UilPrint />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <UilBookOpen />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <UilFileAlt />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <UilTimes />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <UilFile />
      <span>CSV</span>
    </NavLink>
  </>
);

const regionColumns = [
  {
    title: 'Top Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

const SaleByLocation = React.memo(() => {
  // Inititalize Default Sales Location
  const [state, setState] = useState({
    locationTab: 'today',
  });

  /* State destructuring */
  const { locationTab } = state;
  const handleChangeLocation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      locationTab: value,
    });
  };

  // Make Data Array for Table
  const saleLocationData = [];
  if (salesLocation !== null)
    salesLocation[locationTab].map((item, key) => {
      return saleLocationData.push({
        key: key + 1,
        region: item[0],
        order: item[1],
        revenue: item[2],
      });
    });

  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#E3E6EF',
      height: '220px',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  }

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object).isRequired,
  };

  // Map Configuration
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [content, setContent] = useState('');
  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = () => {
    setPosition(position);
  };

  return (
    <Cards
      isbutton={
        <div className="ninjadash-card-nav">
          <ul>
            <li className={locationTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'}>
              <Link onClick={(event) => handleChangeLocation('today', event)} to="#">
                Today
              </Link>
            </li>
            <li className={locationTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
              <Link onClick={(event) => handleChangeLocation('week', event)} to="#">
                Week
              </Link>
            </li>
            <li className={locationTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
              <Link onClick={(event) => handleChangeLocation('month', event)} to="#">
                Month
              </Link>
            </li>
          </ul>
        </div>
      }
      title="Sales by Location"
      size="large"
      more={moreContent}
    >
      <Row>
        <Col xxl={12} md={11} xs={24}>
          <LocationTableWrap>
            <Scrollbars
              autoHeight
              autoHeightMin={280}
              autoHide
              renderTrackVertical={(props) => <div {...props} className="ninjadash-track-vertical" />}
            >
              <Table columns={regionColumns} dataSource={saleLocationData} pagination={false} />
            </Scrollbars>
          </LocationTableWrap>
        </Col>
        <Col xxl={12} md={13} xs={24}>
          <SaleLocationMap>
            <div>
              <ReactTooltip>{content}</ReactTooltip>
              <ComposableMap
                data-tip=""
                data-html
                projectionConfig={{
                  scale: window.innerWidth <= 440 ? 160 : 160,
                }}
                viewBox="110, 50, 800, 410"
              >
                <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => {
                            const { name } = geo.properties;
                            setContent(`${name}`);
                          }}
                          onMouseLeave={() => {
                            setContent('');
                          }}
                          fill="#DBE1E8"
                          stroke="#FFF"
                          strokeWidth={0.5}
                          style={{
                            default: {
                              fill: '#DBE1E8',
                              outline: 'none',
                            },
                            hover: {
                              fill: '#5F63F2',
                              outline: 'none',
                            },
                            pressed: {
                              fill: '#5F63F2',
                              outline: 'none',
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>

              <div className="controls">
                <button type="button" onClick={handleZoomIn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <button type="button" onClick={handleZoomOut}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </div>
          </SaleLocationMap>
        </Col>
      </Row>
    </Cards>
  );
});

export default SaleByLocation;
