/* eslint-disable no-shadow */
import { Button } from 'antd';
import Styled from 'styled-components';

const ButtonGroup = Button.Group;

const outline = (theme, type) => {
  return `
        background: transparent;
        border: 1px solid ${
          type !== 'light' ? theme[`${type}-color`] : theme[theme.mainContent]['border-color-secondary']
        };
        color: ${type !== 'light' ? theme[`${type}-color`] : theme['gray-color']};
        &:hover, &:focus {
          background: transparent;
          border: 1px solid ${type !== 'light' ? theme[`${type}-hover`] : theme['primary-color']};
          color: ${type !== 'light' ? theme[`${type}-color`] : theme['primary-color']};
          svg{
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            color: ${type !== 'light' ? theme[`${type}-color`] : theme['primary-color']};
          }
        }
    `;
};

const ghosts = (theme) => {
  return `
          background: transparent;
          border: 1px solid ${theme['border-color-normal']} !important;
          color: ${theme['border-color-normal']} !important;
          &:hover, &:focus {
            background: ${theme['border-color-normal']}50 !important;
            border: 1px solid transparent !important;
            color: ${theme['border-color-normal']} !important;
        }
    `;
};

const transparents = (theme, type) => {
  return `
        background: ${theme[`${type}-color`]}15;
        border-width: 0px;
        color: ${theme[`${type}-color`]};
        &:hover, &:focus {
            background: ${type !== 'default' && theme[`${type}-hover`]}15;
            border-width: 0px;
            color: ${type !== 'default' && theme[`${type}-hover`]}; 
        }
    `;
};

const raise = (theme, type) => {
  return `
        box-shadow: 0 8px 13px ${type !== 'white' ? theme[`${type}-color`] : theme['light-color']}20;
    `;
};

const square = (theme, type) => `
    background: ${type !== 'default' && theme[`${type}-color`]};
    border: 1px solid ${type !== 'default' ? theme[`${type}-color`] : theme['disabled-color']};
    color: ${type !== 'default' && '#ffffff'};
    border-radius: 0px;
    padding: 0px 15px;

    &:hover, &:focus {
        background: ${type !== 'default' && theme[`${type}-hover`]};
        border: 1px solid ${type !== 'default' && theme[`${type}-hover`]};
        color: ${type !== 'default' && '#ffffff'};
    }
`;

const squareOutline = (theme, type) => `
    background: transparent;
    border: 1px solid ${type !== 'default' ? theme[`${type}-color`] : theme['disabled-color']};
    color: ${type !== 'default' && theme[`${type}-color`]};
    border-radius: 0px;
    padding: 0px 15px;
    &:hover, &:focus {
        background: ${type !== 'default' && theme[`${type}-hover`]};
        border: 1px solid ${type !== 'default' && theme[`${type}-hover`]};
        color: ${({ theme, type }) => type !== 'default' && theme['white-color']};
    }
`;

const socialButton = (color, shape) => `
    background: ${color};
    background: ${color};
    border: 1px solid ${color};
    color: ${({ theme }) => theme['white-color']};
    border-radius: ${!shape ? '4px' : '40px'};
    padding: 0px 12px;
    display: inline-flex;
    align-items: center;
    span {
        padding-left: 5px;
    }
    &:hover, &:focus {
        background: ${color}90;
        border: 1px solid ${color}90;
        color: ${({ theme }) => theme['white-color']};
    }
`;

const ButtonStyled = Styled(Button)`
    font-size: 14px;
    background: ${({ type, theme }) => type !== 'default' && theme[`${type}-color`]};
    border-width: 0px;
    border-style: ${({ type }) => (type !== 'dashed' ? 'solid' : 'dashed')};
    color: ${({ theme, type }) => (type !== 'default' ? '#ffffff' : theme[theme.mainContent]['gray-text'])};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ shape }) => (!shape ? '4px' : '40px')};
    padding: 0px 20.5px;
    height: ${({ size, theme }) => (size !== 'default' ? theme[`btn-height-${size}`] : '44px')};
    font-weight: 600;
    box-shadow: 0 0;
    &:hover, &:focus {
        color: ${({ type, theme }) => (type !== 'default' ? theme['white-color'] : theme['light-color'])};
        background: ${({ type, theme }) => type !== 'default' && theme[`${type}-hover`]}};
    }
    i,
    svg,
    img{
    width: 14px;
    height: 14px;
    +span{
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
    }
}

${({ transparent, theme, type }) => transparent && transparents(theme, type)};
${({ outlined, theme, type }) => outlined && outline(theme, type)};
${({ ghost, theme }) => ghost && ghosts(theme)};
${({ raised, theme, type }) => raised && raise(theme, type)};
${({ squared, theme, type }) => squared && square(theme, type)};
${({ squared, outlined, theme, type }) => squared && outlined && squareOutline(theme, type)};
${({ social, color, shape }) => social && socialButton(color, shape)};
`;

const ButtonStyledGroup = Styled(ButtonGroup)`
    >.ant-btn:first-child{
    border-top-left-radius: 3px!important;
    border-bottom-left-radius: 3px!important;
}
button {
    margin: 0px;
    padding: 0 10.75px;
    height: 30px;
    font - size: 12px;
    font - weight: 500;
}
.ant-btn-light:hover{
    background: ${({ theme }) => theme[theme.mainContent].bgNormal};
}
`;

export { ButtonStyled, ButtonStyledGroup };
