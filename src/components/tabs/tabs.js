import * as Unicons from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import React from 'react';
import { Child, TabBasic } from './style';

function Tab(props) {
  const { data, tabPosition, type, color } = props;
  let counter = 0;

  return (
    <TabBasic
      className={`ninjadash-tab-${type}`}
      color={color && color}
      defaultActiveKey="1"
      tabPosition={tabPosition !== undefined ? tabPosition : 'top'}
    >
      {data.map((item) => {
        const { title, content, icon, tabTitle } = item;
        const IconTag = Unicons[icon];
        counter += 1;
        return (
          <Child
            color={color && color}
            tab={
              icon === undefined ? (
                tabTitle
              ) : (
                <span>
                  <IconTag />
                  {tabTitle}
                </span>
              )
            }
            key={counter}
          >
            <h2>{title}</h2>
            <p>{content}</p>
          </Child>
        );
      })}
    </TabBasic>
  );
}

Tab.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  tabPosition: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export { Tab };
