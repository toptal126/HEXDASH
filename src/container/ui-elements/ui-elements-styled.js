import Styled from 'styled-components';

const DropdownStyle = Styled.div`
  .ant-card-body .ant-btn {
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      padding: 0px 19px;
      border-radius: 5px;
  }
`;

const DropdownIconStyleWrapper = Styled.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${({ theme }) => (theme.rtl ? '0 16px 0 10px' : '0 10px 0 16px')}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
  }
`;

const SpinerWraperStyle = Styled.div`
  text-align: center;
  background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const SwitchStyleWrap = Styled.div`
  margin: 0 -10px;
  .ant-switch{
    margin: 0 10px;
  }
`;

const CarouselStyleWraper = Styled.div`
  .ant-carousel {
    .slick-slide{
      text-align: center;
      height: 150px;
      line-height: 160px;
      background: ${({ theme }) => theme[theme.mainContent]['light-text']};
      overflow: hidden;
    }
    .slick-dots{
      li{
        width: 15px;
        button{
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
        &.slick-active{
          width: 25px;
        }
      }
    }
  }
  .ant-radio-group{
    margin-bottom: 16px !important;
  }
  .ant-radio-button-wrapper{
    font-size: 14px;
    height: 38px !important;
    line-height: 36px !important;
    font-weight: 600;
    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const AvatarWraperStyle = Styled.div`
  .ant-avatar {
    margin: 10px;
    background: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
  }
  .ant-btn-default{
    padding: 0 10px;
  }
  .ant-badge-count{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px !important;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px !important;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
  .btn-outlined{
    padding: 0px 8.05px;
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
  }
  .anticon svg{
    color: #fff;
  }
`;

const BadgeWraperStyle = Styled.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px !important;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    padding: 0;
    height: 20px;
    line-height: 14px;
    border: 3px solid transparent;  
  }
  .ant-scroll-number-custom-component{
    top: 10px !important;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -1px !important;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px !important;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
  }
`;

const BadgeRedStyle = Styled.div`
  .ant-badge:not(:last-child){
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px !important;
  }
`;

const BadgeStandAloneStyle = Styled.div`
  .ant-badge-count{
    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`;

const BadgeOverflowStyle = Styled.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`;

const BreadcrumbWrapperStyle = Styled.div`
  .ant-breadcrumb{
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    .ant-breadcrumb-link{
      a{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      .anticon{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 2px !important;
      }
    }
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
  }
  .demo{
    .ant-breadcrumb{
      .ant-breadcrumb-link{
        font-size: 13px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
      }
    }
    .ant-alert-info{
      border-color: #FB358615;
    }
  }
  .demo-nav{
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    border-radius: 4px;
    background: ${({ theme }) => theme[theme.mainContent].bgLight};
  }
  .demo-nav a{
    padding: 0 12px;
    color: ${({ theme }) => theme['primary-color']};
  }
  .ant-alert{
    &.ant-alert-info{
      background: ${({ theme }) => theme['primary-color']}15;
      background: ${({ theme }) => theme[theme.mainContent].info}15;
    }
    .ant-alert-message{
      font-size: 13px;
      color: ${({ theme }) => theme['primary-color']};
      background: ${({ theme }) => theme['primary-color']};
    }
  }
`;

const BadgeDynamicStyle = Styled.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin: ${({ theme }) => (theme.rtl ? '6px 12px 0 0' : '6px 0 0 12px')};
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    border-radius: 4px;
    padding: 0;
    .ant-btn {
      z-index: 2;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      &:first-child{
        z-index: 22;
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
      }
      svg{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }

  }
}
.ant-badge-dot{
  ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 16px !important;
  top: 8px;
}
.ant-switch{
  min-width: 44px;
  height: 22px;
  ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
  .ant-switch-handle{
    top: 4px;
  }
  .ant-switch-checked .ant-switch-handle{
    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: calc(100% - 14px - 5px);
  }
}
`;

const CardStyleWrapper = Styled.div`
  .ant-card{
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    &.ant-card-bordered{
      border-radius: 5px;
      overflow: hidden;
      background: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      .ant-card-head{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
      }
    }
  }
  .ant-card-head{
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    .ant-card-head-wrapper{
      .ant-card-head-title{
        padding: 12px 0;
      }
    }
    
    .ant-card-extra{
      display: block;
      padding: 12px 0;
      @media only screen and (max-width: 575px){
        margin-bottom: 4px;
      }
    }
  }
  .ant-card-head-wrapper .ant-card-extra a{
    color: ${({ theme }) => theme['primary-color']};
  }
  .ant-card-body{
    padding: 22px 25px 15px 25px !important;
    p{
      margin-bottom: 4px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  .ant-card-small > .ant-card-head{
    font-size: 16px;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .ant-card-small > .ant-card-body{
    padding: 12px 15px 8px 15px !important
  }
`;

const CasCaderStyleWrapper = Styled.div`
  .ant-cascader{
    display: block;
    width: fit-content;
  }
  .ant-cascader:not(:last-child){
    margin-bottom: 20px;
  }
`;

const SelectWrapperStyle = Styled.div`
  margin: -5px;
  .ant-select{
    margin: 5px;
  }
  .ant-select-selector{
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  .ant-select-multiple.ant-select-sm{
    .ant-select-selection-item{
      height: 20px;
      line-height: 18px;
      font-size: 11px;
    }
  }
`;

const SelectRadioStyle = Styled.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`;

const TimeLinePointerIconWrap = Styled.div`
  padding: 20px;
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item-tail{
    border-width: 3px;
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  .ant-timeline-item{
    padding-bottom: 28px;
    &.primary{
      background-color: transparent;
    }
    &.info{
      background-color: transparent;
    }
    &.warning{
      background-color: transparent;
    }
    &.pink{
      background-color: transparent;
    }
    &.success{
      background-color: transparent;
    }
    &.danger{
      background-color: transparent;
    }
    &:last-child{
      padding-bottom: 0;
    }
    &.primary{
      .ant-timeline-item-head{
        background-color: #FFEAF3;
      }
    }
    &.info{
      .ant-timeline-item-head{
        background-color: #DFF0FF;
      }
    }
    &.warning{
      .ant-timeline-item-head{
        background-color: #FFEEDA;
      }
    }
    &.pink{
      .ant-timeline-item-head{
        background-color: #FFE8F2;
      }
    }
    &.success{
      .ant-timeline-item-head{
        background-color: #DDF7F0;
      }
    }
    &.danger{
      .ant-timeline-item-head{
        background-color: #FFE4E5;
      }
    }
    .ant-timeline-item-head{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      &:after,
      &:before{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -8px;
        width: 8px;
        height: 8px;
        content: "";
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      }
      &:before{
        top: auto;
        bottom: -8px;
      }
    }
    .ant-timeline-item-content{
      margin: ${({ theme }) => (theme.rtl ? '-38px 42px 0 0' : '-38px 0 0 42px')};
      h3{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 30px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      p{
        font-size: 14px;
        font-weight: 400;
        max-width: 330px;
        margin-bottom: 12px;
      }
      .tags{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
      }
    }
  }
`;

const TimelineNormalWrap = Styled.div`
  .ant-timeline-item-last > .ant-timeline-item-content{
    min-height: auto;
  }
  
  .ant-timeline-right{
    .ant-timeline-item-right{
      .ant-timeline-item-content{
        width: calc(100% - 32px) !important;
      }
    }
  }
  .ant-timeline-item{
    padding-bottom: 25px;
    &:last-child{
      padding-bottom: 0;
    }
    &.active{
      .timeline-content-text{
        p{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    &.primary{
      background-color: transparent;
    }
    &.secondary{
      background-color: transparent;
    }
    &.success{
      background-color: transparent;
    }
    &.info{
      background-color: transparent;
    }
    &.warning{
      background-color: transparent;
    }
    .ant-timeline-item-content{
      margin: ${({ theme }) => (theme.rtl ? '0 32px 0 0' : '0 0 0 32px')};
      font-size: 14px !important;
      .timeline-content-inner{
        .timeline-content-time{
          min-width: 65px;
          font-weight: 600;
          color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
        }
      }
      p{
        margin-bottom: 0;
      }
    }
    .ant-timeline-item-head-custom{
      padding: 0px 1px;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
  }
`;

const TimelineBoxWrap = Styled.div`
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item{
    .ant-timeline-item-head{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    }
    &.ant-timeline-item-left{
      .ant-timeline-item-content{
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 16px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -16px;
        }
      }
    }
    &.ant-timeline-item-right{
      .ant-timeline-item-content{
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 6px;
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 16px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -16px;
        }
        .content-box{
          text-align: left !important;
        }
      }
    }
    .ant-timeline-item-content{
      h2{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      }
      .content-box{
        padding: 18px 20px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
        p{
          line-height: 1.75;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export {
  DropdownStyle,
  DropdownIconStyleWrapper,
  SpinerWraperStyle,
  SwitchStyleWrap,
  CarouselStyleWraper,
  AvatarWraperStyle,
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BreadcrumbWrapperStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
  CardStyleWrapper,
  CasCaderStyleWrapper,
  SelectWrapperStyle,
  SelectRadioStyle,
  TimeLinePointerIconWrap,
  TimelineNormalWrap,
  TimelineBoxWrap,
};
