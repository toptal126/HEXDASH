import Styled from 'styled-components';

const Aside = Styled.aside`
    @media only screen and (max-width: 1199px){
        max-width: 370px;
        margin: 0 auto;
    }
    .btn-create{
        height: 50px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 3px 5px #FF69A505;
        margin-bottom: 25px;
    }
    .ant-picker{
        visibility: hidden;
    }
    .ant-picker .ant-picker-input{
        display: none;
    }
    .listHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        .add-label{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            svg{
              width: 16px;
              height: 16px;
            }
        }
    }

    .event-list{
        li{
            position: relative;
            padding-left: 0;
            &:not(:last-child){
                margin-bottom: 14px;
            }
            /* &:after{
              position: absolute;
              left: 0;
              top: 6px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              content: "";
              background-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            } */
            .bullet{
              position: relative;
              top: -1px;
              border-radius: 50%;
              display: inline-block;
              height: 8px;
              margin-right: 12px;
              width: 8px;
              &.primary{
                background-color: ${({ theme }) => theme['primary-color']};
              }
              &.secondary{
                background-color: ${({ theme }) => theme['secondary-color']};
              }
              &.info{
                background-color: ${({ theme }) => theme['info-color']};
              }
              &.danger{
                background-color: ${({ theme }) => theme['danger-color']};
              }
              &.warning{
                background-color: ${({ theme }) => theme['warning-color']};
              }
              &.success{
                background-color: ${({ theme }) => theme['success-color']};
              }
            }
            a{
                font-size: 14px;
                font-weight: 400;
                display: block;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
`;

const CalendarWrapper = Styled.div`
    &.ninjadash-calendar-with-head{
      .react-calendar{
        padding: 0;
        margin-bottom: 0;
      }
    }
    &.ninjadash-calendar-wrap{
      .react-calendar{
        padding: 30px 25px 20px;
      }
      .react-calendar__month-view__days .react-calendar__tile{
        height: 46px !important;
        @media only screen and (max-width: 767px){
          height: 42px !important;
        }
      }
      .ninjadasgcaled {
        @media only screen and (max-width: 1199px){
          min-height: 750px;
        }
      }
    }
    .react-calendar{
        font-family: 'Jost', sans-serif;
        width: 100%;
        border-radius: 10px;
        padding: 60px 55px 40px;
        border: 0 none;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        margin-bottom: 25px;
        box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
        @media only screen and (max-width: 1599px){
            padding: 40px 35px 50px;
        }
        @media only screen and (max-width: 575px){
            padding: 15px;
        }
        .react-calendar__viewContainer{
            .react-calendar__year-view__months__month {
                &:hover{
                    background-color: transparent;
                }
                &.react-calendar__tile--hasActive{
                    background-color: transparent;
                    color: ${({ theme }) => theme['primary-color']}
                }
            }
        }
    }
    .react-calendar__navigation{
        justify-content: center;
        margin-bottom: 22px;
        height: auto;
        button{
            &:hover,
            &:focus{
                background-color: #fff !important;
            }
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .react-calendar__navigation__label{
            flex-grow: 0 !important;
            font-size: 16px;
            font-weight: 500;
            margin: 0 15px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            &:hover{
              background-color: transparent
            }
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .8rem .5rem;
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                @media only screen and (max-width: 1300px){
                    font-size: 11px;
                }
            }
        }
    }
    .react-calendar__month-view__days{
        .react-calendar__tile{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 64px !important;
            padding: 1em 0.5em;
            @media only screen and (max-width: 1599px){
              height: auto !important;
            }
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            abbr{
                font-size: 12px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 6px;
                border: 1px solid ${({ theme }) => theme['primary-color']};
            }
            &.react-calendar__tile--active{
                border-radius: 6px;
                border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                abbr{
                    color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex-flow: column;
        }
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            @media only screen and (max-width: 1599px){
                margin-bottom: 20px;
            }
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .btn-today{
                font-size: 14px;
                font-weight: 500;
                height: 34px;
                padding: 0 15px;
                border-radius: 4px;
                text-transform: capitalize;
                cursor: pointer;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                @media only screen and (max-width: 479px){
                    margin-bottom: 15px;
                }
            }
            .react-calendar{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                }
            }
            .calender-head__navigation{
                display: flex;
                align-items: center;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                @media only screen and (max-width: 479px){
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0px;
                }
                .btn-navigate{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    cursor: pointer;
                    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    i,
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 575px){
                      font-size: 12px;
                    }
                }
            }
        }
        .calendar-header__right{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
                align-items: center;
            }
            svg{
                width: 14px;
            }
            ul{
                margin-bottom: 0;
                li{
                    display: inline-block;
                    &:first-child{
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                    }
                    &:not(:first-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-right-radius' : 'border-top-left-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-right-radius' : 'border-bottom-left-radius'}: 0px;
                        }
                    }
                    &:not(:last-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-left-radius' : 'border-top-right-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-left-radius' : 'border-bottom-right-radius'}: 0px;
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${({ theme }) => theme['primary-color']};
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                @media only screen and (max-width: 479px){
                    margin: 15px 0 0 0;
                }
                svg,
                img,
                i{
                    margin-right: 6px;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme['primary-color']};
                }
                &.active{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }

    .table-event{
        
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &.table-responsive{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid color: ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                    
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${({ theme }) => theme['bg-color-light']};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                min-width: 140px;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                .currentTime{
                    width: calc(100% + 20px);
                    height: 1px;
                    display: block;
                    position: relative;
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -10px;
                    z-index: 222;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    border-radius: 3px 6px 6px 3px;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${({ theme }) => theme['primary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                    &.secondary{
                        background-color: #FFF0F6;
                        color: ${({ theme }) => theme['secondary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['secondary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['secondary-color']};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${({ theme }) => theme['success-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${({ theme }) => theme['warning-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    &.info{
                        background-color: ${({ theme }) => theme['info-color']}10;
                        color: ${({ theme }) => theme['info-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['info-color']};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
            
        }
    }

    .emptyData{
        min-height: 110px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
    }

    .event-week{
        tr{
            th,
            td{
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid color: ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        thead{
            tr{
                th{
                    text-align: center;
                    .week-dayName{
                        font-size: 13px;
                        font-weight: 400;
                        margin-bottom: 2px;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    .week-date{
                        display: inline-block;
                        line-height: 1.45;
                        border-radius: 9px;
                        font-size: 13px;
                        &.primary{
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
        tbody{
            .ant-dropdown-trigger{
                display: inline-block;
            }
        }
    }

    .schedule-event{
        tr{
            &:hover{
                box-shadow: 0 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
                td{
                    border-color: #fff;
                }
            }
            td{
                padding: 10px 20px !important;
                vertical-align: top;
                font-size: 14px;
                &:first-child{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                }
                &.schedule-time{
                    direction: ltr;
                    min-width: 100px;
                    width: 130px;
                }
                .ant-row{
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
                .schedule-date{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                .schedule-date-name{
                    margin-left: 10px;
                }
                .event-title{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 575px){
                        display: inline-block;
                        margin-top: 6px; 
                    }
                }
                .schedule-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
            }
        }
    }

    .events{
        li{
            position: relative;
            height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                padding: 5px 12px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
                &:hover{
                    color: #fff;
                }
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
    }  
    .rbc-btn {
        color: inherit;
        font: inherit;
        margin: 0;
      }
      button.rbc-btn {
        overflow: visible;
        text-transform: none;
        -webkit-appearance: button;
        cursor: pointer;
      }
      button[disabled].rbc-btn {
        cursor: not-allowed;
      }
      button.rbc-input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      .rbc-calendar {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 25px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
      }
      .rbc-calendar *,
      .rbc-calendar *:before,
      .rbc-calendar *:after {
        box-sizing: inherit;
      }
      .rbc-abs-full,
      .rbc-row-bg {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .rbc-ellipsis,
      .rbc-event-label,
      .rbc-row-segment .rbc-event-content,
      .rbc-show-more {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .rbc-rtl {
        direction: rtl;
      }
      .rbc-header {
        overflow: hidden;
        flex: 1 0 0%;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 16px 20px;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        min-height: 0;
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
        &:first-child{
          border-radius: 10px 0 0 0;
        }
        &:last-child{
          border-radius: 0 10px 0 0;
        }
        span{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-rtl .rbc-header + .rbc-header {
        border-left-width: 0;
        border-right: 1px solid #ddd;
      }
      .rbc-header > a,
      .rbc-header > a:active,
      .rbc-header > a:visited {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        padding-bottom: 7px;
      }
      .rbc-row-content {
        position: relative;
        user-select: none;
        z-index: 4;
        .rbc-row{
          &+.rbc-row{
            margin-top: 6px;
          }
        }
      }

      .rbc-event {
        border: none;
        box-shadow: none;
        margin: 0;
        padding: 3px 15px;
        color: #fff;
        cursor: pointer;
        width: 100%;
        text-align: left;
        border-radius: 4px;
        @media only screen and (max-width: 575px){
          font-size: 12px;
        }
        &.primary{
          background-color: ${({ theme }) => theme['primary-color']};
        }
        &.secondary{
          background-color: ${({ theme }) => theme['secondary-color']};
        }
        &.info{
          background-color: ${({ theme }) => theme['info-color']};
        }
        &.warning{
          background-color: ${({ theme }) => theme['warning-color']};
        }
        &.success{
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
      .rbc-slot-selecting .rbc-event {
        cursor: inherit;
        pointer-events: none;
      }
      .rbc-event-label {
        font-size: 80%;
      }
      .rbc-event-overlaps {
        box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
      }
      .rbc-event-continues-prior {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .rbc-event-continues-after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-event-continues-earlier {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .rbc-event-continues-later {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-row {
        display: flex;
        flex-direction: row;
      }
      .rbc-row-segment {
        padding: 0 1px 1px 1px;
      }
      .rbc-selected-cell {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .rbc-show-more {
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 4;
        font-weight: bold;
        font-size: 85%;
        height: auto;
        line-height: normal;
        white-space: nowrap;
      }
      .rbc-month-view {
        position: relative;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        width: 100%;
        user-select: none;
        height: 100%;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 10px;
      }
      .rbc-month-row{
        &:not(:last-child){
          .rbc-day-bg {
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
        }
      }
      .rbc-date-cell{
        &.rbc-off-range{
          .rbc-button-link{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
        }
        .rbc-button-link{
          margin-top: 5px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-month-header {
        display: flex;
        flex-direction: row;
      }
      .rbc-month-row {
        display: flex;
        position: relative;
        flex-direction: column;
        flex: 1 0 0;
        flex-basis: 0px;
        overflow: hidden;
        height: 100%;
      }
      .rbc-month-row + .rbc-month-row {
      }
      .rbc-date-cell {
        flex: 1 1 0;
        min-width: 0;
        padding-right: 5px;
        text-align: right;
      }
      .rbc-date-cell.rbc-now {
        font-weight: bold;
      }
      .rbc-date-cell > a,
      .rbc-date-cell > a:active,
      .rbc-date-cell > a:visited {
        color: inherit;
        text-decoration: none;
      }
      .rbc-row-bg {
        display: flex;
        flex-direction: row;
        flex: 1 0 0;
        overflow: hidden;
      }
      .rbc-day-bg {
        flex: 1 0 0%;
        &:not(:last-child){
          border-right: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        &.rbc-today{
          position: relative;
          background-color: ${({ theme }) => theme['primary-color']}15;
          &:after{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 2px;
            content: '';
            background-color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .rbc-day-bg + .rbc-day-bg {
      }
      .rbc-rtl .rbc-day-bg + .rbc-day-bg {
        border-left-width: 0;
      }
      .rbc-overlay {
        position: absolute;
        z-index: 5;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
        padding: 10px;
      }
      .rbc-overlay > * + * {
        margin-top: 1px;
      }
      .rbc-overlay-header {
        border-bottom: 1px solid #e5e5e5;
        margin: -10px -10px 5px -10px;
        padding: 10px;
      }
      .rbc-agenda-view {
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        overflow: auto;
        .rbc-agenda-table{
          .primary,
          .secondary,
          .info,
          .success,
          .danger,
          .warning,
          .secondary{
            background-color: transparent;
          }
          td{
            &:first-child{
              border-radius: 10px 0 0 0;
            }
          }
        }
      }
      .rbc-agenda-view table.rbc-agenda-table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      }
      .rbc-agenda-view table.rbc-agenda-table{
        thead{
          display: none;
        }
        tbody{
          >tr{
            &:not(:last-child){
              border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            &:hover{
              box-shadow: 0 15px 40px rgba(146,153,184,.08);
              border-bottom-color: transparent;
            }
            
            >td{
              font-size: 14px;
              padding: 15px 20px;
              vertical-align: top;
            }
            .rbc-agenda-date-cell,
            .rbc-agenda-event-cell{
              font-weight: 500;
              color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
            }
            .rbc-agenda-time-cell{
              span{
                font-size: 13px;
                position: relative;
                padding-left: 20px;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                &:after{
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: 0;
                  width: 10px;
                  height: 10px;
                  content: '';
                  border-radius: 50%;
                }
              }
            }
            &.primary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['primary-color']};
                  }
                }
              }
            }
            &.secondary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['secondary-color']};
                  }
                }
              }
            }
            &.info{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['info-color']};
                  }
                }
              }
            }
            &.success{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['success-color']};
                  }
                }
              }
            }
          }
        }
        .rbc-agenda-time-cell{
          padding-left: 15px;
          padding-right: 15px;
          text-transform: lowercase;
        }
      }
      .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
        border-left-width: 0;
      }
      .rbc-agenda-time-cell {
        text-transform: lowercase;
      }
      .rbc-agenda-time-cell .rbc-continues-after:after {
        content: ' »';
      }
      .rbc-agenda-time-cell .rbc-continues-prior:before {
        content: '« ';
      }
      .rbc-agenda-date-cell,
      .rbc-agenda-time-cell {
        white-space: nowrap;
        font-size: 12px;
      }
      .rbc-agenda-event-cell {
        width: 100%;
        font-size: 12px;
      }
      .rbc-time-column {
        display: flex;
        flex-direction: column;
        min-height: 100%;

      }
      .rbc-time-column .rbc-timeslot-group {
        flex: 1;
      }
      .rbc-timeslot-group {
        min-height: 40px;
        display: flex;
        flex-flow: nowrap;
      }
      .rbc-time-gutter,
      .rbc-header-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-label {
        padding: 0 20px;
      }
      .rbc-day-slot {
        position: relative;
      }
      .rbc-day-slot .rbc-events-container {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        margin-right: 10px;
        top: 0;
        .rbc-addons-dnd-resizable{
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          .rbc-event-content{
            order: -1;
            font-weight: 500;
          }
        }
      }
      .rbc-day-slot .rbc-events-container.rbc-is-rtl {
        left: 10px;
        right: 0;
      }
      .rbc-day-slot .rbc-event {
        display: flex;
        max-height: 100%;
        -webkit-flex-flow: column wrap;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        overflow: hidden;
        position: absolute;
      }
      .rbc-day-slot .rbc-event-label {
        flex: none;
        padding-right: 5px;
        width: auto;
      }
      .rbc-day-slot .rbc-event-content {
        width: 100%;
        flex: 1 1 0;
        word-wrap: break-word;
        line-height: 1;
        height: 100%;
        min-height: 1em;
      }
      .rbc-day-slot .rbc-time-slot {
        border-top: 1px solid transparent;
      }
      .rbc-time-view-resources .rbc-time-gutter,
      .rbc-time-view-resources .rbc-time-header-gutter {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        background-color: white;
        border-right: 1px solid #ddd;
        z-index: 10;
        margin-right: -1px;
      }
      .rbc-time-view-resources .rbc-time-header {
        overflow: hidden;
      }
      .rbc-time-view-resources .rbc-time-header-content {
        min-width: auto;
        flex: 1 0 0;
        flex-basis: 0px;
      }
      .rbc-time-view-resources .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-view-resources .rbc-day-slot {
        min-width: 140px;
      }
      .rbc-time-view-resources .rbc-header,
      .rbc-time-view-resources .rbc-day-bg {
        width: 140px;
        -webkit-flex: 1 1 0;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex-basis: 0 px;
        -ms-flex-preferred-size: 0 px;
        flex-basis: 0 px;
      }
      .rbc-time-header-content + .rbc-time-header-content {
        margin-left: -1px;
      }
      .rbc-time-slot {
        -webkit-flex: 1 0 0;
        -ms-flex: 1 0 0px;
        flex: 1 0 0;
      }
      .rbc-time-slot.rbc-now {
        font-weight: bold;
      }
      .rbc-day-header {
        text-align: center;
      }
      .rbc-slot-selection {
        z-index: 10;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 75%;
        width: 100%;
        padding: 3px;
      }
      .rbc-slot-selecting {
        cursor: move;
      }
      .rbc-time-view {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        min-height: 0;
        border-radius: 10px;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .rbc-time-header{
          .rbc-label{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
          }
          .rbc-header{
            border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
          
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${({ theme }) => theme['primary-color']}15;
              color: ${({ theme }) => theme['primary-color']};
              &:after{
                background-color: ${({ theme }) => theme['primary-color']};
              }
            }
            &.secondary{
              background-color: ${({ theme }) => theme['secondary-color']}15;
              color: ${({ theme }) => theme['secondary-color']};
              &:after{
                background-color: ${({ theme }) => theme['secondary-color']};
              }
            }
            &.info{
              background-color: ${({ theme }) => theme['info-color']}15;
              color: ${({ theme }) => theme['info-color']};
              &:after{
                background-color: ${({ theme }) => theme['info-color']};
              }
            }
            &.warning{
              background-color: ${({ theme }) => theme['warning-color']}15;
              color: ${({ theme }) => theme['warning-color']};
              &:after{
                background-color: ${({ theme }) => theme['warning-color']};
              }
            }
            &.success{
              background-color: ${({ theme }) => theme['success-color']}15;
              color: ${({ theme }) => theme['success-color']};
              &:after{
                background-color: ${({ theme }) => theme['success-color']};
              }
            }
          }
        }
        .rbc-time-content{
          .rbc-time-column{
            .rbc-timeslot-group{
              align-items: center;
              justify-content: center;
              border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
              .rbc-time-slot{
                span{
                  font-size: 14px;
                  display: inline-block;
                  color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
              }
            }
          }
          .rbc-day-slot {
            border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${({ theme }) => theme['primary-color']}15;
              color: ${({ theme }) => theme['primary-color']};
              &:after{
                background-color: ${({ theme }) => theme['primary-color']};
              }
            }
            &.secondary{
              background-color: ${({ theme }) => theme['secondary-color']}15;
              color: ${({ theme }) => theme['secondary-color']};
              &:after{
                background-color: ${({ theme }) => theme['secondary-color']};
              }
            }
            &.info{
              background-color: ${({ theme }) => theme['info-color']}15;
              color: ${({ theme }) => theme['info-color']};
              &:after{
                background-color: ${({ theme }) => theme['info-color']};
              }
            }
            &.warning{
              background-color: ${({ theme }) => theme['warning-color']}15;
              color: ${({ theme }) => theme['warning-color']};
              &:after{
                background-color: ${({ theme }) => theme['warning-color']};
              }
            }
            &.success{
              background-color: ${({ theme }) => theme['success-color']}15;
              color: ${({ theme }) => theme['success-color']};
              &:after{
                background-color: ${({ theme }) => theme['success-color']};
              }
            }
            .rbc-event-content{
              font-size: 13px;
              margin-bottom: 4px;
            }
          }
        }
      }
      .rbc-time-view .rbc-time-gutter {
        white-space: nowrap;
      }
      .rbc-time-view .rbc-allday-cell {
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .rbc-time-view .rbc-allday-cell + .rbc-allday-cell {
        border-left: 1px solid #ddd;
      }
      .rbc-time-view .rbc-allday-events {
        position: relative;
        z-index: 4;
      }
      .rbc-time-view .rbc-row {
        box-sizing: border-box;
      }
      .rbc-time-header {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        border-radius: 10px 10px 0 0;
        .rbc-time-header-gutter{
          border-radius: 10px 0 0 0;
        }
        .rbc-row-bg{
          .rbc-day-bg{
            &:first-child{
              border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};;
            }
          }
        }
      }
      .rbc-time-header.rbc-overflowing {
      }
      .rbc-rtl .rbc-time-header.rbc-overflowing {
        border-right-width: 0;
      }
      .rbc-time-header > .rbc-row:first-child {
      }
      .rbc-time-header > .rbc-row.rbc-row-resource {
      }
      .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-header-content {
        flex: 1;
        display: flex;
        min-width: 0;
        flex-direction: column;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .rbc-header{
          border-radius: 0px;
          &:last-child{
            border-radius: 0 10px 0 0;
          }
        }
        .rbc-row{
          background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
      }
      .rbc-rtl .rbc-time-header-content {
        border-left-width: 0;
      }
      .rbc-time-content {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1 0 0%;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100%;
        overflow-y: auto;
        position: relative;
      }
      .rbc-time-content > .rbc-time-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-time-content > * + * > * {
      }
      .rbc-rtl .rbc-time-content > * + * > * {
        border-left-width: 0;
      }
      .rbc-time-content > .rbc-day-slot {
        width: 100%;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-select: none;
      }
      .rbc-current-time-indicator {
        position: absolute;
        z-index: 3;
        left: 0;
        right: 0;
        height: 1px;
        pointer-events: none;
      }
      button.rbc-button-link{
          border: 0 none;
          background-color: transparent;
      }
`;

const UpdatePopup = Styled.div`
    .ant-card{
        width: 320px !important;
        .ant-card-body{
            padding: 0 !important;
            
            .headerUpdate{
                border-radius: 8px 8px 0 0;
                padding: 13px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4{
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    margin-bottom: 0;
                }
                .action{
                    display: flex;
                    align-items: center;
                    width: 100px;
                    justify-content: flex-end;
                    color: #fff;
                    a{
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background-color: transparent;
                        padding: 0;
                        color: #fff;
                        transition: .3s;
                        &:hover{
                            background-color: #F4F5F715;
                        }
                        svg{
                            margin: 0;
                        }
                    }
                }
            }
            .bodyUpdate{
                padding: 20px;
                .event-info{
                    display: flex;
                    align-items: flex-start;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    &:last-child{
                        margin-bottom: 0;
                    }
                    strong{
                        margin-left: 6px;
                        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    svg,
                    i{
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    svg,
                    i,
                    img{
                        margin: ${({ theme }) => (theme.rtl ? '4px 0 0 12px' : '4px 12px 0 0')};
                    }
                    label{
                        font-size: 13px;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                }
            }
        }
    }
`;

const EventModalStyleWrap = Styled.div`
    position: relative;
    .ninjadash-event-details-top{
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
      top: -74px;
      a{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: transparent;
        &:hover{
          background-color: #ffffff15;
          svg{
            color: #ffffff;
          }
        }
        svg{
          width: 15px;
          height: 15px;
          color: #ffffff75;
        }
      }
    }
    .ninjadash-event-details{
      ul{
        margin-bottom: 4px;
        li{
          display: flex;
          align-items: flex-start;
          font-size: 14px;
          &:not(:last-child){
            margin-bottom: 6px;
          }
          svg{
            width: 14px;
            height: 14px;
            margin: ${({ theme }) => (!theme.rtl ? '3px 12px 0 0' : '3px 0 0 12px')};
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          }
          &.ninjadash-event-description{
            margin-top: 12px;
            font-size: 15px;
          }
        }
      }
      .ninjadash-event-label{
        font-size: 14px;
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
      .ninjadash-event-text{
        strong{
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
`;

const BlockViewCalendarWrapper = Styled.div`
    &.table-responsive{
        table{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
    }
    .ant-picker-calendar{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-light']};
        .ant-picker-body{
            padding: 0 !important;
        }
        .ant-picker-calendar-date {
            padding-top: 10px;
            margin: 0 !important;
            border-top: 0 none !important;
        }
        .ant-picker-cell{
            min-width: 155px;
            ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
            .ant-picker-cell-inner{
                min-width: 155px;
            }
            &:hover{
                .ant-picker-calendar-date{
                    background-color: transparent !important;
                }
            }
            &.ant-picker-cell-today{
                .ant-picker-calendar-date-today{
                    background-color: #EFEFFE !important;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                        top: 0;
                        height: 2px;
                        width: 100%;
                        content: '';
                        background-color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
            &.ant-picker-cell-selected{
                .ant-picker-calendar-date{
                    background-color: transparent;
                }
            }
            &.ant-picker-cell-in-view{
                .ant-picker-calendar-date{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .ant-picker-calendar-date{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
            .ant-picker-calendar-date-value{
                margin: 6px 4px 10px 0
            }
        }
        table{
            thead{
                tr{
                    th{
                        padding: 16px 20px !important;
                        background-color: ${({ theme }) => theme['bg-color-light']} !important;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                }
            }
            tr{
                &:last-child{
                    td{
                        border-bottom: 0 none;
                    }
                }
                th,
                td{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0;
                    border-bottom: 1px solid color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    &:last-child{
                        border-right: 0 none;
                        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                    }
                }
            }
        }
    }
`;

const EventFormStyleWrap = Styled.div`
    label{
        font-weight: 400 !important;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
        margin-bottom: 0 !important;
    }
    .ninjadash-event-form-input,
    .ninjadash-event-timeselection{
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .ninjadash-event-form-label,
      .ninjadash-event-timeselection__label{
        min-width: 90px;
      }
      textarea{
        min-height: 100px;
      }
    }
    .ninjadash-event-form-input{
      .ant-form-item{
        width: 100%;
      }
    }
    .ninjadash-event-timeselection{
      .ant-form-item{
        margin: 0 10px 0 !important;
      }
    }
    .ninjadash-event-timeselection__input{
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 -10px;
      .ant-picker{
        min-width: auto;
        width: 100%;
        min-height: 50px;
      }
    }
    .ant-select-selector{
      min-height: 50px;
      .ant-select-selection-item{
        display: flex;
        align-items: center;
      }
    }
    .ant-picker-input > input{
      margin-top: 3px;
    }
    .ant-picker{
      min-width: auto;
      width: 100%;

      &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
      }
    }
    .ant-picker-input{
        padding: 0 25px;
        position: relative;
        @media only screen and (max-width: 575px){
            padding: 0 20px 0 25px;
        }
        .ant-picker-suffix{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 10px;
            top: 50%;
            transform: translateY(-50%);
            @media only screen and (max-width: 575px){
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 10px;
            }
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
    }
    .add-event-footer{
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
        }
        .btn-save{
            height: 38px;
            padding: 0 25px;
        }
    }
`;

export { CalendarWrapper, Aside, UpdatePopup, BlockViewCalendarWrapper, EventFormStyleWrap, EventModalStyleWrap };
