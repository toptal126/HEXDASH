import Styled from 'styled-components';

const borderd = (type) => {
  return `
        border-radius: 4px;
        background: #ffffff;
        color: #5A5F7D;
        border: 1px solid ${type};
    `;
};
const content = () => {
  return `
        justify-content: space-between;
    `;
};
const bg = () => {
  return `
        color: #5A5F7D;
      `;
};
const grad = (type, direction) => {
  return `
         background-image: linear-gradient(${direction}, ${type[0]}, ${type[1]});
         height: 100px;
         span + span{
          color: #fff !important;
         }
        `;
};

const ColorPalette = Styled.div`
    span + span{
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    width: 100%;
    height: 48px;
    background: ${({ type }) => type};
    border-radius: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: center;
    ${({ isbordered, type }) => isbordered && borderd(type)}
    ${({ iscontent }) => iscontent && content()}
    ${({ isbg }) => isbg && bg()}
    ${({ isgrad, type, direction }) => isgrad && grad(type, direction)}
`;

export { ColorPalette };
