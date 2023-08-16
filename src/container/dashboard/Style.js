import Styled from 'styled-components';

const EChartCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .card-chunk{
        width: 50%;
        flex: 0 0 50%;
        h1{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    @media only screen and (max-width: 379px){
        .card-chunk{
            width: 100%;
            flex: 0 0 100%;
            h1{
                margin-bottom: 0;
            }
            p{
                margin: 5px 0 20px 0;
            }
        }
    }
    .chartjs-tooltip {
        min-width: 132px !important;
    }
`;

const OverviewDataStyleWrap = Styled.div`
    
    &.card-mesh-wrap{
        justify-content: space-between;
        margin-bottom: 25px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 991px){
            flex-wrap: wrap;
        }
        .ninjadash-overview-card-single{
            flex: 0 0 auto;
            margin-bottom: 0;
            @media only screen and (max-width: 991px){
                flex: 0 0 50%;
            }
            @media only screen and (max-width: 575px){
                flex: 0 0 100%;
            }
        }

    }
`;

const NewProductWrapper = Styled.div`
    .ant-table-content{
        .ninjadash-product-price{
            font-weight: 500;
        }
    }
`;

const DemoFourStyle = Styled.div`
    .ninjadash-congratulation-banner{
        @media only screen and (max-width: 991px){
            margin-bottom: 25px;
        }
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card .ant-btn-white{
            background-color: #fff;
        }
        .ant-card-body{
            min-height: 360px !important;
        }
        .ninjadash-congratulation-banner-content{
            img{
                bottom: -155px;
            }
        }
        figcaption{
            h2{
                font-size: 30px;
                @media only screen and (max-width: 475px){
                    font-size: 24px
                }
            }
            p{
                margin-bottom: 22px;
            }
        }
    }
    
`;

const TotalChartStyleWrap = Styled.div`
    .ant-card-head{
        border: 0 none;
        .ant-card-head-title{
            padding-bottom: 0;
        }
    }
    .ninjadash-total-earning{
        .ant-card{
            min-height: 396px;
            @media only screen and (max-width: 1599px){
                min-height: 468px;
            }
            @media only screen and (max-width: 1499px){
                min-height: 432px;
            }
            @media only screen and (max-width: 1399px){
                min-height: 375px;
            }
        }
    }
    .ant-card{
        .ant-card-body{
            padding: 20px 20px !important;
            @media only screen and (max-width: 991px){
                padding: 20px 10px !important;
            }
            @media only screen and (max-width: 767px){
                min-height: auto;
            }
        }
    }
`;

const SalesOverviewStyleWrap = Styled.div`
    .ninjadash-sales-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .ninjadash-sales-content{
        justify-content: center;
        text-align: center;
        margin-top: 20px;
    }
    .ant-card{
        min-height: 430px;
    }
    .ant-progress{
        .ant-progress-text{
            font-size: 46px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
    }

    .ninjadash-sales-content__item{
        min-width: 200px;
        @media only screen and (max-width: 575px) {
            min-width: auto;
            margin: 0 20px;
        }
        .ninjadash-sales-content__item--label{
            display: inline-block;
            font-size: 16px;
            margin-bottom: 6px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ninjadash-sales-content__item--total{
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            line-height: 1;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
`;

const DashboardBaseStyleWrap = Styled.div`
    .ninjadash-configuration-box{
        display: flex;
        flex-wrap: wrap;
        margin: -5px;
        .ninjadash-configuration-box__item{
            margin: 5px;
            text-align: center;
            flex-wrap: wrap;
            .ninjadah-color-code{
                display: block;
                margin-top: 5px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    /* Button Hover Color Style */
    .ninjadash-configuration-box {
        &.ninjadash-configuration-box-button-hover{
            .ninjadash-configuration-box__item{
                .ant-btn-primary{
                    background-color: ${({ theme }) => theme['primary-hover']};
                }
                .ant-btn-secondary{
                    background-color: ${({ theme }) => theme['secondary-hover']};
                }
                .ant-btn-success{
                    background-color: ${({ theme }) => theme['success-hover']};
                }
                .ant-btn-info{
                    background-color: ${({ theme }) => theme['info-hover']};
                }
                .ant-btn-warning{
                    background-color: ${({ theme }) => theme['warning-hover']};
                }
                .ant-btn-danger{
                    background-color: ${({ theme }) => theme['danger-hover']};
                }
                .ant-btn-dark{
                    background-color: ${({ theme }) => theme['dark-hover']};
                }
                .ant-btn-gray{
                    background-color: ${({ theme }) => theme['gray-hover']};
                }
            }
        }
    }
    .ninjadash-heading-typography{
        p{
            margin-bottom: 0;
        }
    }
    .ninjadash-body-typography{
        margin-bottom: 20px;
        h1{
            margin-bottom: 0;
        }
        .ninjadash-typo-list{
            display: flex;
            align-items: center;
            margin: -10px;
            color: ${({ theme }) => theme['primary-color']};
            li{
                margin: 10px;
            }
        }
        .ninjadash-body-typography__text{
            margin-top: 14px;
        }
        &.typo-small{
            p{
                font-size: 14px;
                line-height: 1.57;
            }
        }
        &.typo-big{
            p{
                font-size: 16px;
                line-height: 1.69;
            }
        }
    }
    h1{
        margin-bottom: 15px;
    }
    .ant-card .ant-card-body{
        >h1{
            margin-bottom: 30px;
        }
    }
    .ant-row{
        margin: -5px 0;
    }
    .ant-col{
        margin: 5px 0;
    }
    span{
        &+span{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
`;

const CardBarChart = Styled.div`
    .ninjadash-chart-top{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -6px -12px;
        @media only screen and (max-width: 767px) {
            flex-direction: column;
            align-items: center !important;
            margin: -6px;
        }
    }
    .ninjadash-chart-top__item{
        position: relative;
        display: flex;
        align-items: center;
        margin: 12px;
        @media only screen and (max-width: 767px) {
            margin: 6px;
        }
        .ninjadash-chart-top__item--label{
            position: relative;
            padding-left: 14px;
        }
        .ninjadash-chart-top__item--tika{
            position: absolute;
            left: 0;
            top: 50%;
            display: block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            transform: translateY(-50%);
        }
        .ninjadash-chart-top__item--amount{
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            line-height: 1.2;
            margin: 0 5px 0 0;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ninjadash-chart-top__item--status{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            svg{
                height: 20px;
                width: 20px;
            }
            &.status-growth{
                color: ${({ theme }) => theme['success-color']};
                svg{
                    path{
                        fill: ${({ theme }) => theme['sucess-color']};
                    }
                }
            }
            &.status-down{
                color: ${({ theme }) => theme['danger-color']};
                svg{
                    path{
                        fill: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }
    &.ninjadash-chart-container-overview{
        .ninjadash-chart-top{
            margin-top: -35px;
            @media only screen and (max-width: 767px) {
                margin-top: 0;
            }
        }
        .ninjadash-chart-top__item{
            .ninjadash-chart-top__item--label{
                font-size: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            }
        }
    }
    &.ninjadash-profitGroth-barCHar-wrap{
        min-height: 310px;
        @media only screen and (max-width: 1499px) {
            min-height: 348px;
        }
        @media only screen and (max-width: 1399px) {
            min-height: 288px;
        }
    }
    >div{
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            align-items: flex-start !important;
            ul{
                margin: 0 0 15px;
            }
        }
    }
    .card-bar-top{
        &.flex-grid{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: -20px;
            @media only screen and (max-width: 575px) {
                flex-flow: column;
                align-items: center;
            }
            h1{
                font-size: 24px;
                margin-bottom: 22px;
                @media only screen and (max-width: 1199px) {
                    font-size: 20px;
                }
            }
        }
        .flex-grid-child{
            padding: 0 20px;
        }
        p{
            font-size: 14px;
            margin-bottom: 8px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        h1{
            margin-bottom: 18px;
            sub{
                bottom: 0;
                font-size: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                color: ${({ theme }) => theme['success-color']};
                svg{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
        .profitGrowth-list{
            text-align: center;
            @media only screen and (max-width: 575px) {
                margin-top: 6px;
            }
            .custom-label{
                font-size: 14px
            }
        }
    }
    .ninjadash-chartdata-list{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        li{
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            text-transform: capitalize;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
            }
        }
    }
    .chartjs-tooltip{
        min-width: 140px !important;
        @media only screen and (max-width: 1199px){
            min-width: 115px !important;
        }
    }
    .deals-barChart{
        display: flex;
        .card-bar-top{
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
        h4{
            font-weight: 400;
            color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
            p{
                &.growth-down{
                    .deal-percentage{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
                &.growth-up{
                    .deal-percentage{
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
                .deal-percentage{
                    svg,
                    img,
                    i{
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
                    }
                }
                .deal-value{
                    font-size: 22px;
                    font-weight: 600;
                    margin-right: 8px;
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
        }
    }
    .deals-list{
        .custom-label{
            font-size: 14px;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
    }
`;

const UserOverviewStyle = Styled.div`
    .ant-card{
        min-height: 458px;
        @media only screen and (max-width: 1599px){
            min-height: auto;
        }
    }
`;

const LocationTableWrap = Styled.div`
    max-height: 260px;
    margin-bottom: 30px;
    direction: ltr;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']};
    .ant-table {
        background: transparent !important;
    }
    .ant-table-thead{
        > tr > th{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    table{
        tr{
            &:hover {
                td {

                    background-color: ${({ theme }) => theme[theme.mainContent]['light-background']} !important;
                }
            }
            &:first-child{
                td{
                    padding-top: 15px;
                }
            }
            &:last-child{
                td{
                    padding-bottom: 15px;
                }
            }
            th{
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                padding: 10.5px 20px;
            }
            td{
                font-size: 15px;
                border: 0 none;
                padding: 10.5px 20px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                
                &:first-child{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
            th,
            td{
                &:last-child{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 40px;
                    text-align: right;
                }
            }
        }
    }
    .ninjadash-track-vertical{
        position: absolute;
        width: 6px;
        transition: opacity 200ms ease 0s;
        opacity: 0;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 6px;
        bottom: 2px;
        top: 2px;
        border-radius: 6px;
        >div{
            background-color: ${({ theme }) => theme[theme.mainContent]['scroll-bg']} !important;
        }
    }
`;

const SaleLocationMap = Styled.div`
    text-align: center;
    height: 100%;
    margin-bottom: 55px;
    .__react_component_tooltip {
        background: #fff;
        color: #010413;
        font-weight: 500;
        border-radius: 3px;
        box-shadow: 0 10px 15px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
        &:after{
            border-top-color: #fff !important;
        }
    }
    >div{
        width: 100%;
        height: 250px;
        overflow: hidden;
        @media only screen and (max-width: 479px){
            height: 200px;
        }
    }
    svg{
        width: 450px;
        @media only screen and (max-width: 479px){
            height: 180px;
        }
        @media only screen and (max-width: 440px){
            width: 310px;
        }
        @media only screen and (max-width: 320px){
            width: 280px;
        }
    }
    .controls{
        position: absolute;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
        bottom: 10px;
        button{
            display: block;
            width: 27px;
            height: 27px;
            background: none;
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            padding: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            cursor: pointer;
            &:first-child{
                border-radius: 6px 6px 0 0;
            }
            &:last-child{
                border-radius: 0 0 6px 6px;
            }
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        button + button{
            border-top: 0 none;
        }
    }
`;

const CardBarChart2 = Styled.div`
    @media only screen and (max-width: 379px){
        text-align: center
    }
    h1{
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 1500px){
        h1{
            font-size: 22px;
        }
    }
    & > span{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
    }
    p{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px 0 -6px 0;
        @media only screen and (max-width: 379px){
            justify-content: center;
        }
        .growth-upward, .growth-downward{
            display: inline-flex;
            align-items: center;
            ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
            font-weight: 600;

            svg{
                width: 15px;
            }
        }
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        span{
            color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
            font-size: 14px;
            display: inline-block;
        }
    }
`;

const SalesRevenueWrapper = Styled.div`
    .ninjadash-sales-revenue-lineChart{
        margin: ${({ theme }) => (!theme.rtl ? '0 -4px 0 0' : '0 0 0 -4px')};
    }
    .ninjadash-chart-top{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -12px;
        @media only screen and (max-width: 767px) {
            flex-direction: column;
            margin: -6px;
        }
    }
    #ninjadash-sales-revenue{
        margin-top: 12px;
    }
    .ninjadash-chart-top__item{
        position: relative;
        display: flex;
        align-items: center;
        margin: 12px;
        padding-left: 12px;
        @media only screen and (max-width: 767px) {
            margin: 6px;
        }
        &:before{
            position: absolute;
            width: 7px;
            height: 7px;
            left: 0;
            top: 50%;
            border-radius: 50%;
            content: '';
            transform: translateY(-50%);
        }
        &.ninjadash-chart-top__item-order{
            &:before{
                background-color: ${({ theme }) => theme['primary-color']};
            }
            
        }
        &.ninjadash-chart-top__item-sale{
            &:before{
                background-color: ${({ theme }) => theme['info-color']};
            }
           
        }
        .ninjadash-chart-top__item--text{
            font-size: 14px;
            font-weight: 400;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ninjadash-chart-top__item--amount{
            display: inline-block;
            font-size: 22px;
            font-weight: 600;
            margin: 0 5px 0 10px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 767px) {
                font-size: 18px;
            }
        }
        .ninjadash-chart-top__item--status{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            svg{
                height: 20px;
                width: 20px;
            }
            &.status-growth{
                color: ${({ theme }) => theme['success-color']};
                svg{
                    path{
                        fill: ${({ theme }) => theme['sucess-color']};
                    }
                }
            }
            &.status-down{
                color: ${({ theme }) => theme['danger-color']};
                svg{
                    path{
                        fill: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }
`;

const RevenueGeneratedWrapper = Styled.div`
    ${({ theme }) => (theme.topMenu ? 'min-height: 355px' : 'min-height: 336px')};
    .ninjadash-revenue-company{
        .ninjadash-revenue-company__icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
            height: 32px;
            width: 32px;
            &.ninjadash-revenue-company__icon-google{
                background-color: #F1433610;
                color: #F14336
            }
            &.ninjadash-revenue-company__icon-facebook{
                background-color: #1976D210;
                color: #1976D2;
            }
            &.ninjadash-revenue-company__icon-twitter{
                background-color: #03A9F410;
                color: #03A9F4;
            }
            &.ninjadash-revenue-company__icon-linkedin{
                background-color: #007AB910;
                color: #007AB9;
            }
            &.ninjadash-revenue-company__icon-instagram{
                background-color: #D1208F10;
                color: #D1208F;
            }
        }
        .ninjadash-revenue-company__content{
            span{
                font-size: 15px;
                font-weight: 500;
                text-transform: capitalize;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }

    .ninjadsh-revenue-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 25px;
        @media only screen and (max-width: 1599px) {
            justify-content: space-around;
            min-height: 305px;
            padding: 0;
        }
        @media only screen and (max-width: 1299px) {
            flex-direction: column;
        }
        @media only screen and (max-width: 991px) {
            flex-direction: row;
        }
        @media only screen and (max-width: 991px) {
            flex-direction: column;
        }
    }

    .ninjadsh-revenue-chart-source{
        display: flex;
        margin: -22px;
        @media only screen and (max-width: 1599px) {
            margin: -12px;
        }
        @media only screen and (max-width: 1399px) {
            margin: -6px;
        }
        @media only screen and (max-width: 1299px) {
            margin-top: 10px;
        }
        @media only screen and (max-width: 991px) {
            margin-top: -16px;
        }
        .ninjadsh-revenue-chart-source__single{
            margin: 22px;
            @media only screen and (max-width: 1599px) {
                margin: 12px;
            }
            @media only screen and (max-width: 1399px) {
                margin: 6px;
            }
            @media only screen and (max-width: 991px) {
                margin: 16px;
            }
        }
        .ninjadsh-revenue-chart-source__icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
            border-radius: 10px;
            @media only screen and (max-width: 1599px) {
                width: 60px;
                height: 60px;
            }
            @media only screen and (max-width: 1399px) {
                width: 55px;
                height: 55px;
            }
            &.ninjadash-facebook{
                background-color: #E6D5F6;
                svg{
                    path{
                        fill: #8231D3;
                    }
                }
            }
            &.ninjadash-twitter{
                background-color: #CCEEFF;
                svg{
                    path{
                        fill: #03A9F4;
                    }
                }
            }
            &.ninjadash-google{
                background-color: #DDD9FF;
            }
        }
        .ninjadsh-revenue-chart-source__text{
            text-align: center;
            span{
                display: block;
                font-weight: 500;
            }
            .ninjadsh-revenue-chart-source__title{
                font-size: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            .ninjadsh-revenue-chart-source__count{
                font-size: 14px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-table-content{
        table{
            tr{
                th{
                    &:first-child,
                    &:last-child{
                        text-align: left !important;
                    }
                }
                th,
                td{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
                    text-align: right;
                }
                td{
                    padding: 9.5px 15px !important;
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0 !important;
                    }
                    &:last-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
                    }
                    .ninjadash-revenue{
                        display: inline-block;
                        min-width: 60px;
                    }
                    .ninjadash-trend-progress{
                        min-width: 60px;
                        .ninjadash-trend-percentage{
                            font-size: 14px;
                            font-weight: 400;
                            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 14px;
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        }
                        .ant-progress-inner{
                            background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
                        }
                        .ant-progress-bg{
                            border-radius: 30px;
                        }
                        &.ninjadash-trend-progress-primary{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                        &.ninjadash-trend-progress-info{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['info-color']};
                            }
                        }
                        &.ninjadash-trend-progress-success{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                        &.ninjadash-trend-progress-violet{
                            .ant-progress-bg{
                                background-color: #5840FF;
                            }
                        }
                        &.ninjadash-trend-progress-warning{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['warning-color']};
                            }
                        }
                        &.ninjadash-trend-progress-google{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                        &.ninjadash-trend-progress-facebook{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].info};
                            }
                        }
                        &.ninjadash-trend-progress-twitter{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].success};
                            }
                        }
                        &.ninjadash-trend-progress-linkedin{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].secondary};
                            }
                        }
                        &.ninjadash-trend-progress-instagram{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme[theme.mainContent].warning};
                            }
                        }
                    }
                }
            }
        }
    }
    .table-responsive{
        .ant-table-content{
            table{
                tr{
                    th,
                    td{
                        white-space: normal;
                    }
                }
            }
        }
    }
`;

const ChartContainer = Styled.div`
    display: block;
    font-family: 'Jost', sans-serif;
    &.ninjadash-chart-pie{
        .chartjs-tooltip {
            padding: 4px !important;
            table tbody td{
                color: #000;
            }
        }
    }
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        box-shadow: 0 3px 16px #ADB5D915;
        padding: 8px 6px !important;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        min-width: 80px;
        transition: all 0.5s ease;
        pointer-events: none;
        transform: translate(-50%, 5%);
        z-index: 222;
        top: 0;
        left: 0;
        @media only screen and (max-width: 991px){
            transform: translate(-60%, 5%);
        }
        &:before {
            position: absolute;
            content: '';
            border-top: 5px solid ${({ theme }) => theme[theme.mainContent]['dark-background']};
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: -5px;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 50%;
            transform: translateX(-50%);
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}
        : 5px;
    }
    .tooltip-title {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        font-size: 12px;
        line-height: 1;
        font-weight: 500 !important;
        font-family: 'Jost', sans-serif;;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: 'Jost', sans-serif;;
    }
    .tooltip-value sup {
        font-size: 12px;
        @media only screen and (max-width: 1199px){
            font-size: 11px;
        }
    }
    table{
        tbody{
            td{
                font-size: 12px;
                font-weight: 500;
                padding-bottom: 3px;
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                .data-label{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
                }
            }
        }
    }
`;

const SalesOverviewStyleWrap2 = Styled.div`
    .ninjadash-overview-percentage{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        .ninjadash-overview-percentage__item{
            display: flex;
            align-items: center;
            margin: 15px;
        }
        .ninjadash-overview-percentage__point{
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 5px;
            background-color: ${({ theme }) => theme['primary-color']};
        }
        .ninjadash-overview-percentage__text{
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card-body{
        padding: 30px 25px !important;
    }
    .ninjadash-overview-wrap{
        color: #333;
        canvas{
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }
    }
    .ninjadash-overview-box{
        margin-top: 10px;
        padding: 16.65px 32px;
        border-radius: 8px;
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
        .ninjadash-overview-box-item{
            text-align: center;
            h4{
                font-size: 18px;
                line-height: 1;
                font-weight: 600;
                margin-bottom: 6px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            p{
                margin-bottom: 0;
                font-size: 15px;
                line-height: 1.25;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    /* .sent-emial-data{
        margin-top: 30px;
    }
    .sent-emial-box{
        justify-content: space-between;
        @media only screen and (max-width: 575px){
            align-items: flex-start;
            flex-direction: column;
        }
    }
    .sent-emial-item{
        display: flex;
        @media only screen and (max-width: 575px){
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .sent-emial-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            background-color: ${({ theme }) => theme['primary-color']}10;
            &.icon-success{
                background-color: ${({ theme }) => theme['success-color']}10;
            }
            &.icon-primary{
                background-color: ${({ theme }) => theme['primary-color']}10;
            }
            &.icon-warning{
                background-color: ${({ theme }) => theme['warning-color']}10;
            }
        }
        .sent-emial-content{
            flex: auto;
            h4{
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 2px;
                strong{
                    font-weight: 500;
                }
            }
            p{
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    } */
`;

const UpcomingEventsStyleWrap = Styled.div`
    .ninjadash-event-details{
        @media only screen and (max-width: 575px){
            align-items: flex-start;
        }
        .ninjadash-event-details__date{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: ${({ theme }) => theme['white-color']};
            min-width: 60px;
            min-height: 60px;
            padding: 0 10px;
            border-radius: 6px;
            &.ninjadash-event-primary{
                background-color: ${({ theme }) => theme['primary-color']};
            }
            &.ninjadash-event-info{
                background-color: ${({ theme }) => theme['info-color']};
            }
            &.ninjadash-event-secondary{
                background-color: ${({ theme }) => theme['secondary-color']};
            }
            &.ninjadash-event-warning{
                background-color: ${({ theme }) => theme['warning-color']};
            }
            span{
                font-size: 15px;
                font-weight: 500;

            }
        }
        .ninjadash-event-details__content{
            margin: ${({ theme }) => (!theme.rtl ? '-1px 0 0 15px' : '-1px 15px 0 0')};
            @media only screen and (max-width: 575px){
                margin: ${({ theme }) => (!theme.rtl ? '-3px 0 0 15px' : '-3px 15px 0 0')};
            }
            .ninjadash-event-details__title{
                font-size: 15px;
                line-height: 1.2;
                font-weight: 400;
                margin-bottom: 2px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            .ninjadash-event-details__time{
                line-height: 1;
                margin-bottom: 0;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                @media only screen and (max-width: 575px){
                    margin-top: 6px;
                }
            }
        }
    }
    .ant-table-content{
        .ant-table-tbody {
            >tr >td.ant-table-cell:last-child{
                padding-right: 0;
                ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
            }
            >tr:first-child >td.ant-table-cell{
                padding-top: 6px !important;
            }
        }
    }
    .ninjadash-event-details-action{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: -12px;
        a{
            display: block;
            margin: 12px;
            svg{
                width: 14px;
                height: 14px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
        .ninjadash-event-details-action__edit{
            &:hover{
                svg{
                    color: ${({ theme }) => theme['info-color']};
                }
            }
            
        }
        .ninjadash-event-details-action__delete{
            &:hover{
                svg{
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
    }
`;

const KnowledgeBaseCardWrap = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 360px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    .ninjadash-knowledgebase-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        min-height: 310px;
        @media only screen and (max-width: 767px){
            min-height: 100%;
        }
        @media only screen and (max-width: 575px){
            padding-top: 5px;
        }
        .ninjadash-knowledgebase-card__text{
            text-align: center;
            margin-top: 18px;
        }
        .ninjadash-knowledgebase-card__title{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 8px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 26px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ninjadash-knowledgebase-card__action{
        font-weight: 500;
        height: 38px;
    }
`;

const TimelineStyleWrap = Styled.div`
    .ant-timeline{
        margin-top: 5px;
        .ant-timeline-item-content{
            p{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['gray-lighter-text']};
                .ninjadash-time{
                    font-size: 13px;
                    font-weight: 400;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
            }
        }
    }
    .ant-card {
        @media only screen and (max-width: 1199px){
            min-height: 410px;
        }
        @media only screen and (max-width: 991px){
            min-height: auto;
        }
        .ant-card-body{
            padding-bottom: 32px !important;
        }
    }
`;

const InboxListStyleWrap = Styled.div`
    .ant-list {
        padding-top: 5px;
        .ant-list-items{
            padding-top: 0;
            li{
                &:not(:last-child){
                    margin-bottom: 18px;
                }
            }
            .ant-list-item{
                padding: 0;
                border: 0 none;
                .ant-list-item-meta{
                    padding: 0;
                    border: 0 none;
                }
                .ninjadash-mail-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .ant-list-item-meta-avatar{
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                }
            }
            .ant-list-item-meta-content{
                margin-top: -4px;
                .ant-list-item-meta-title{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 0;
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-lighter-text']};
                    }
                }
                .ant-list-item-meta-description{
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
    .ant-card{
        @media only screen and (max-width: 1199px){
            min-height: 446px;
        }
        @media only screen and (max-width: 991px){
            min-height: auto;
        }
    }
`;

const TopSellerWrap = Styled.div`
    .ant-table {
        background: transparent !important;
    }
    .top-seller-table {
        min-height: auto;
        .product-info{
            .product-img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            }
            .product-name{
                text-transform: capitalize;
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
            }
        }
        .ant-table-thead {
            th {
                background: ${({ theme }) => theme[theme.mainContent]['light-background']};
            }
        }
        .ant-table-row,
        tr {
            .ant-table-cell{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:not(:first-child){ 
                    text-align: right;
                }

            }
        }
    }
`;

const BrowserStateWrap = Styled.div`
    .ant-table {
        min-height: 310px;
        background: transparent !important;

        .ant-table-thead {
            th {
                background: ${({ theme }) => theme[theme.mainContent]['light-background']};
                &:not(:first-child){
                    text-align: right;
                }
            }
        }
        .ant-table-row {
            .ant-table-cell{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:not(first-child){ 
                    text-align: right;
                }
            }
        }
    }
    .ninjadash-product-info{
        .ninjadash-product-img{
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
            img{
                max-width: 31px;
            }
        }
        .ninjadash-product-name{
            font-size: 15px;
            text-transform: capitalize;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
`;

const PerfomanceOverviewStyle = Styled.div`
    margin-top: 26px;
    &.ninjadash-chartpoint-vertical{
        display: flex;
        align-items: center;
        margin: 0;
        @media only screen and (max-width: 991px){
            justify-content: center;
        }
        >div{
            margin-left: -40px;
            @media only screen and (max-width: 1699px){
                margin-left: -55px;
            }
        }
        .ninjadash-chartpoint{
            margin: 0 0 0 -10px;
            .ninjadash-chartpoint__item{
                position: relative;
                padding-left: 14px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
               .ninjadash-chartpoint__tika{
                    position: absolute;
                    width: 7px;
                    height: 7px;
                    left: 0;
                    top: 50%;
                    border-radius: 50%;
                    transform: translateY(-50%);
                }
                .ninjadash-chartpoint__label{
                    font-size: 15px;
                    font-weight: 400;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
    .doughnutchart-inner-label{
        display: inline-block;
        margin-top: 6px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .ninjadash-chartpoint{
        margin-top: 34px;
        margin-bottom: 10px;
    }
`;

export {
  OverviewDataStyleWrap,
  NewProductWrapper,
  TotalChartStyleWrap,
  SalesOverviewStyleWrap,
  ChartContainer,
  DashboardBaseStyleWrap,
  EChartCard,
  CardBarChart,
  SaleLocationMap,
  UserOverviewStyle,
  LocationTableWrap,
  CardBarChart2,
  SalesRevenueWrapper,
  RevenueGeneratedWrapper,
  SalesOverviewStyleWrap2,
  TopSellerWrap,
  BrowserStateWrap,
  PerfomanceOverviewStyle,
  DemoFourStyle,
  UpcomingEventsStyleWrap,
  KnowledgeBaseCardWrap,
  TimelineStyleWrap,
  InboxListStyleWrap,
};
