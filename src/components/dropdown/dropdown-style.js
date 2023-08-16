import { Dropdown } from 'antd';
import Styled from 'styled-components';

const Content = Styled.div`
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    box-shadow: 0px 0px 2px #888;
    padding: 4px 0;
    a i, a svg, a img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
    a {
        display: flex;
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        padding: 6px 12px;
        span{
            line-height: 1.25;
        }
    }
    a:hover {
        background: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .dropdown-theme-2{
        a:hover{
            background: ${({ theme }) => theme.pink}10;
            color: ${({ theme }) => theme.pink}
        }
    }
`;

const DropdownStyle = Styled(Dropdown)`
    
`;

export { Content, DropdownStyle };
