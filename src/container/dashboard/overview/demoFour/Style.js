import Styled from 'styled-components';

const MarketingCampaignStyle = Styled.div`
  @media only screen and (max-width: 1599px){
    min-height: 270px;
  }
  .ninjadash-info-element {
    img {
      max-width: 25px !important;
    }
  }
  .ant-card{
    @media only screen and (max-width: 1599px){
      min-height: 388px;
    }
    @media only screen and (max-width: 1199px){
      min-height: 100%;
    }
  }
  .ant-table-content {
    tr {
      &:first-child {
        td {
          padding-top: 0 !important;
        }
      }
      .ant-table-cell {
        padding: 7px 15px;
        @media only screen and (max-width: 1699px){
          padding: 7px 10px;
        }
      }
      td.ant-table-cell {
        &:last-child {
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        }
      }
    }
    .ant-progress-inner:not(.ant-progress-circle-gradient) {
      .ant-progress-circle-path{
        stroke: ${({ theme }) => theme['primary-color']};
      }
    }
    .ant-progress-circle-trail{
      stroke: ${({ theme }) => theme['primary-color']}15;
    }
  }
`;
const Span = Styled.span``;

const TeamListStyle = Styled.div`
  min-height: 272px;
  @media only screen and (max-width: 1599px){
    min-height: 302px;
  }
  @media only screen and (max-width: 1199px){
    min-height: 272px;
  }
  .ant-list-split {
    .ant-list-item,
    .ant-list-item-meta {
      border-bottom: 0 none;
      padding: 0;
    }
    .ant-list-item-meta {
      .ant-list-item-meta-avatar{
        img{
          max-width: 34px;
        }
      }
      .ant-list-item-meta-title {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        line-height: 1.25;
        a{
          color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
        }
      }
      .ant-list-item-meta-description {
        font-size: 12px;
        line-height: 1;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 12px;
        position: relative;
        &:before {
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform: translateY(-50%);
          content: '';
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
    .ant-list-items{
      padding-top: 4px;
    }
    .ant-list-item-meta-avatar {
      img {
        border-radius: 5px;
      }
    }
  }
  .ant-list-item {
    &:not(:last-child) {
      margin-bottom: 20px !important;
    }
    .ant-btn {
      font-size: 13px;
      font-weight: 600;
      border-radius: 3px;
      padding: 0 12px;
      color: ${({ theme }) => theme['primary-color']};
      background-color: ${({ theme }) => theme['primary-color']}10;
      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const TaskListStyle = Styled.div`
  .ant-card{
    @media only screen and (max-width: 1599px){
        min-height: 358px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
  }
`;

const TrafficTableWrapper = Styled.div`
    ${({ theme }) => (theme.topMenu ? 'min-height: 305px' : 'min-height: 305px')};
    
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table{
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
        .ninjadash-social-channel{
          font-size: 15px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ninjadash-traffic{
          display: block;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          min-width: 120px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-progress{
          min-width: 140px;
        }
    }
    
    .table-bordered {
      table{
        thead{
            tr{
                th{
                    background: #fff;
                    color: ${({ theme }) => theme['dark-color']};
                    padding: 16px 25px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    &:first-child, &:nth-child(5){
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
        tbody{
            tr{
              &.ant-table-row{
                &:hover{
                  td{
                      background-color: transparent !important;
                  }
                }
              }
              &:first-child{
                td{
                  padding-top: 0;
                }
              }
              td{
                  padding: 10px 15px;
                  border: 0 none;
                  color: ${({ theme }) => theme['gray-color']};
                  text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                  &:first-child, 
                  &:nth-child(5){
                      text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                  }
              }
            }
        }
        tr{
          th,
          td{
            &:first-child{
              ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            }
            &:last-child{
              ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
            }
          }
        }
      }
    }
`;

const TrafficChannelTableStyle = Styled.div`
    .ninjadash-social-company{
      .ninjadash-social-company__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
        &.ninjadash-social-company__icon-facebook{
          background-color: #F2EAFB;
          i,svg{
            color: ${({ theme }) => theme['primary-color']};
          }
        }
        &.ninjadash-social-company__icon-twitter{
          background-color: #EEEBFF;
          i,svg{
            color: ${({ theme }) => theme['secondary-color']};
          }
        }
        &.ninjadash-social-company__icon-instagram{
          background-color: #E5F6FF;
          i,svg{
            color: ${({ theme }) => theme['info-color']};
          }
        }
        &.ninjadash-social-company__icon-youtube{
          background-color: #FFE6E6;
          i,svg{
            color: ${({ theme }) => theme['danger-color']};
          }
        }
      }
      .ninjadash-social-company__text{
        font-weight: 500;
      }
      tr{
        td{
          color: #090E30;
        }
      }
    }
`;

const RecentSellerStyle = Styled.div`
  min-height: 200px;
  .ant-table-content{
    .ant-table-tbody {
      >tr:first-child {
        >td.ant-table-cell{
          padding-top: 8px !important;
        }
      }
    }
  }
    .ant-table-tbody{
      tr{
        td{
          text-align: right;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          &:first-child,
          &:last-child{
            text-align: left;
          }
        }
      }
    }
`;

export {
  MarketingCampaignStyle,
  Span,
  TeamListStyle,
  TrafficTableWrapper,
  TrafficChannelTableStyle,
  RecentSellerStyle,
  TaskListStyle,
};
