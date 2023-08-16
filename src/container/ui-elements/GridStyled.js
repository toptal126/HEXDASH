import Styled from 'styled-components';

const GridStyle = Styled.div`
    .ant-row .ant-col, .ant-row-flex .ant-col {
        height: 50px;
        background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: ${({ theme }) => theme[theme.mainContent]['white-text']};
    }
    .ant-row .ant-col:nth-child(even), .ant-row-flex .ant-col:nth-child(even) {
        background: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
`;

const GridStyleGutter = Styled.div`
    .ant-row .ant-col .gutter-box {
        height: 50px;
        background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: ${({ theme }) => theme[theme.mainContent]['white-text']};
    }    
`;

const GridStyleOffset = Styled.div`
    .ant-row .ant-col {
        height: 50px;
        background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: ${({ theme }) => theme[theme.mainContent]['white-text']};
    }    
`;

export { GridStyle, GridStyleGutter, GridStyleOffset };
