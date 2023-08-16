import { Popover } from 'antd';
import Styled from 'styled-components';

const Content = Styled.div`  
  a, .span {
      display: flex;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      padding: 6px 12px;
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
      span {
        line-height: 1.25;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 12px;
      }
  }
  a:hover {
    background: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
  }
  
`;
const Title = Styled.p`
  text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
  margin: 0;
`;
const PopoverStyle = Styled(Popover)` 
  
`;
export { Content, PopoverStyle, Title };
