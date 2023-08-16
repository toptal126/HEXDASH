import Styled from 'styled-components';

const Action = Styled.div`
  .active{
    color: #FA8B0C;
  }
`;
const ContactPageheaderStyle = Styled.div`
  .ant-page-header-heading-title{
    margin-right: 0;
    padding-right: 0;
    &:after{
      display: none;
    }
  }
  .ant-select .ant-select-selection-search-input{
    border-radius: 6px;
  }
`;
const ContactCardWrapper = Styled.div`
  position: relative;
  button{
    position: absolute;
    background: transparent !important;
    top: 0;
    right: 0;
    padding: 0;
    svg {      
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      width: 18px;
      height: 18px;
    }
  }
  .contact-card{
    figure{
      text-align: center;
      margin: 0;
      img{
        border-radius: 50%;
      }
      figcaption{
        margin-top: 20px;
        h3{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0;
        }
        span{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
    .user-info{
      margin-top: 20px;
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      padding-top: 25px;
      ul{
        li{
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
          &:not(:last-child){
            margin-bottom: 14px;
          }
          svg{
            width: 16px;
            height: 16px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
          }
        }
      }
    }
  }
`;
export { Action, ContactPageheaderStyle, ContactCardWrapper };
