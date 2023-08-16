import { Tabs } from 'antd';
import Styled from 'styled-components';

const { TabPane } = Tabs;

const TabBasic = Styled(Tabs)`
  margin-bottom: 30px !important;
  .ant-tabs-nav-wrap{
    .ant-tabs-tab{
      &.ant-tabs-tab-active{
        .ant-tabs-tab-btn{
          color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
        }
        span{
          color: ${({ theme }) => theme[theme.mainContent]['white-text']};
        }
      }
    }
    .ant-tabs-tab-btn{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .ant-tabs-ink-bar{
      background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
  }
  .ant-tabs-content-holder{
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  &.ninjadash-tab-primary{
    .ant-tabs-nav{
      .ant-tabs-tab{
        &.ant-tabs-tab-active{
          color: #fff;
          border-radius: 3px;
          background-color: ${({ theme }) => theme[theme.mainContent]['primary-background']};
          span{
            color: #fff;
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${({ theme }) => theme[theme.mainContent]['primary-background']};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p{
        color: #fff;
      }
    }
  }
  &.ninjadash-tab-white{
    .ant-tabs-nav{
      .ant-tabs-tab{
        &.ant-tabs-tab-active{
          color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          border-radius: 3px;
          background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
          span{
            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      p{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
    }
  }
`;

const Child = Styled(TabPane)` 
    
`;

export { TabBasic, Child };
