import { AutoComplete } from 'antd';
import Styled from 'styled-components';

const AutoCompleteStyled = Styled(AutoComplete)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 23px;
            padding: 0 !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    input{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                    }
                }
            }
            textarea{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-select-selection-search{
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
        width: auto;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
        textarea.ant-input{
            padding: 12px 20px;
        }
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
        input{
            height: 38px !important;
        }
        .ant-input-suffix{
            height: auto;
            border-radius: ${({ theme }) => (theme.rtl ? '4px 0 0 4px' : '0 4px 4px 0')}; 
            svg,
            i{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
            .search-btn{
                height: 38px;
                border-radius: 0px 4px 4px 0px;
                svg,
                i{
                    color: #fff !important;
                }
            }
        }
    }
`;

export { AutoCompleteStyled };
