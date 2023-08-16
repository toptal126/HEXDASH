/* eslint-disable no-shadow */
import { Alert } from 'antd';
import Styled from 'styled-components';

const outline = (theme, type) => {
  return `
    border: 1px solid ${theme[`${type}-color`]} !important;
    background: #fff!important;
    &:hover, &:focus, &:active {
      .ant-alert-message, .ant-alert-message{
        color: #fff;
      }
    }
    .ant-alert-message, .ant-alert-message {
      color: ${({ theme }) => theme[`${type}-color`]};
    }
  `;
};

const AlertWrap = Styled(Alert)`
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  border-width: 0px !important;
  margin: 15px 0 0 0!important;
  padding: 16.5px 20px!important;
  .ant-alert-message{
    line-height: 1.8;
    margin-bottom: 0 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
  &.ant-alert-with-description{
    .ant-alert-content{
      line-height: 1;
    }
    .ant-alert-message{
      margin-bottom: 10px !important;
      line-height: 1;
    }
    .ant-alert-description{
      font-size: 15px;
      line-height: 1.35;
    }
  }
  &.ant-alert-closable {
    .ant-alert-message{
      display: block;
    }
  }
  .ant-alert-message, 
  .ant-alert-description {
    color: ${({ type, theme }) => theme[`${type}-color`]};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${({ type, theme }) => theme[`${type}-color`]};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #9299B8;
  }

  ${({ outlined, theme, type }) => outlined && outline(theme, type)}

  ${({ showIcon, theme }) =>
    showIcon &&
    `padding: 16px 20px 20px!important;
    alert-empty-message{
      padding: 11px 40px 11px!important;
    }
    .ant-alert-icon{
      top: 20px !important;
      ${theme.rtl ? 'right' : 'left'}: 15px !important;
    }
    .ant-alert-message{
      margin-top: -2px;
    }
    i.ant-alert-icon {
      color: ${({ type, theme }) => theme[`${type}-color`]} !important;
      background: #ffffff80 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      ${theme.rtl ? 'right' : 'left'}: 0;
    }`}


  .ant-alert-close-icon {
    top: 12px !important;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
`;

export { AlertWrap };
