import Styled from 'styled-components';

const FigureCart = Styled.figure`

    display: inline-flex;
    img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
`;

const Sidebar = Styled.div`
    max-width: 480px;
    margin: 0 auto;
    .ant-card .ant-card-body{
        padding: 20px 25px 30px !important
    }
    .ant-card-head-title{
        padding: 14px 0 !important;
        span{
            display: flex;
            align-items: center;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            svg{
                width: 16px;
                height: 16px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            }
        }
    }
`;

const NotFoundWrapper = Styled.div`
    text-align: center;
    margin-top: 60px;
    h1{
        border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        padding: 15px 0 20px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
`;

const SidebarSingle = Styled.div`
    h1{
        font-size: 15px;
        margin-bottom: 15px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ant-slider{
        margin-bottom: 15px;
    }
    .ninjadash-price-text{
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ninjadash-category-list{
        margin-bottom: 0;
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
            a{
                width: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                &:hover{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    .ninjadash-category-count{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                .ninjadash-category-count{
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
            }
        }
    }
    .btn-seeMore{
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-top: 8px;
        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-checkbox-group{
        margin-top: -6px;
        .ant-checkbox-group-item{
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:not(:last-child){
                margin-bottom: 10px;
            }
            &.ant-checkbox-wrapper{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            >span + span{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                line-height: 1;
                margin-top: 6px;
                padding-left: 15px;
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                .brand-count{
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .rating-left{
                    margin-top: -4px;
                    min-width: 150px;
                    @media only screen and (max-width: 1792px){
                        min-width: 130px;
                    }
                    .ant-rate{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                    .anticon svg{
                        color: #FA8B0C;
                    }
                }
                .rating-right{
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    min-width: 60px;
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    @media only screen and (max-width: 1792px){
                        min-width: 26.5px;
                    }
                }
            }
        }
    }
    .ant-checkbox-group{
        width: 100%;
    }
`;

const ProductCard = Styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    position: relative;
    box-shadow: 0 5px 20px rgba(173, 181, 217, .10);
    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    .product-list{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};;
        padding: 20px;
        border-radius: 10px;
        figure{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            @media only screen and (max-width: 1199px){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            @media only screen and (max-width: 1199px){
                margin-top: 15px;
            }
            p{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 15px;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            button{
                min-width: 132px;
                margin: 0;
                @media only screen and (max-width: 991px){
                    min-width: 100px;
                }
            }
            .btn-cart{
                margin: 0 0 10px;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
            @media only screen and (max-width: 1199px){
                top: -10px;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
            svg{
                width: 14px;
                height: 14px;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100%;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .btn-heart{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
        top: 15px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 5px 10px ${({ theme }) => theme[theme.mainContent]['extra-light-text']}20;
        @media only screen and (max-width: 1199px){
            width: 30px;
            height: 30px;
        }
        div{
            line-height: 0;
        }
        svg{
            width: 14px;
            height: 14px;
            fill: ${({ theme }) => theme[theme.mainContent]['light-text']}
        }
        &.favourite{
            svg{
                fill: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .product-single-title{
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 600;
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            &:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            font-size: 14px;
            margin: 0 5px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
    .product-single-price__new{
        font-weight: 600;
        color: ${({ theme }) => theme['primary-color']};
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme['secondary-color']};
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        .ant-rate{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
        }
        .ant-rate-star:not(:last-child) {
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 2px !important;
        }
        .total-reviews{
            font-weight: 400;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        .anticon svg{
            color: #FA8B0C;
        }
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px -5px -5px -5px;
        button{
            margin: 5px;
            &:hover{
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
            svg{
                position: relative;
                top: -2px;
            }
        }
        .btn-cart{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            &:hover{
                color: ${({ theme }) => theme['primary-color']} !important;
            }
        }
        .ant-btn-default{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-btn-white{
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']} !important;
            }
        }
        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 21px;
            height: 36px;
            @media only screen and (max-width: 991px){
                padding: 0px 5px;
            }
            
            & + .ant-btn-sm{
                padding: 0px 24px;
            }
        }
    }
`;

const TopToolBox = Styled.div`
    margin-bottom: 30px;
    /* Toolbox Common Styles */
    .ant-row{
        align-items: center;
    }
    .table-toolbox-menu{
        margin: -10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        @media only screen and (max-width: 1599px){
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        }
        @media only screen and (max-width: 991px){
            margin-top: 20px;
        }
        .ant-radio-button-wrapper{
            height: 40px;
            line-height: 40px;
            padding: 0 12.5px;
            &.ant-radio-button-wrapper-checked,
            &:hover{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
            &:first-child{
                padding-left: 0;
            }
        }
        @media only screen and (max-width: 991px){
            text-align: center;
        }
        .toolbox-menu-title,
        .ant-radio-group-outline{
            margin: 5px;
        }
    }
    .ant-input-affix-wrapper {
        .ant-input-suffix{
            height: auto;
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-select{
        @media only screen and (max-width: 1599px){
            margin-bottom: 20px;
        }
        @media only screen and (max-width: 767px){
            max-width: 350px;
            margin: 0 auto 20px;
        }
        .ant-select-selection-search{
            @media only screen and (max-width: 991px){
                width: 100% !important;
            }
            .ant-select-selection-search-input{
                min-width: 350px;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                @media only screen and (max-width: 1792px){
                    min-width: 230px;
                }
                input{
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
            }
        }
    }
    .search-result{
        margin: ${({ theme }) => (theme.rtl ? '0 25px 0 0' : '0 0 0 25px')};
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        @media only screen and (max-width: 1599px){
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            margin-bottom: 15px;
        }
        @media only screen and (max-width: 991px){
            text-align: center;
            margin-bottom: 18px;
        }
        @media only screen and (max-width: 991px){
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
        }
    }
    .ant-select-selector{
        height: 46px !important;
        .ant-select-selection-search-input{
            box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}3;
            border-radius: 23px;
            border: 0 none;
            input{
                height: 46px !important;
            }
        }
    }

    .ant-radio-group-outline{
        padding: 0 10px;
        border-radius: 5px;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border: 0 none;
        @media only screen and (max-width: 1792px){
            padding: 0 5px;
        }
        @media only screen and (max-width: 991px){
            padding: 0;
        }
    }
    .ant-radio-button-wrapper{
        height: 40px;
        line-height: 42px;
        padding: 0 12px;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-defalut']};
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border: 0 none !important;
        @media only screen and (max-width: 1792px){
            padding: 0 7.5px;
        }
        @media only screen and (max-width: 1599px){
            padding: 0 12.5px;
        }
        &.ant-radio-button-wrapper-checked{
            &:focus-within{
                box-shadow: 0 0;
            }
        }
        &:not(:first-child){
            &:before{
                display: none;
            }
        }
        &:not(:last-child){
            &:after{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0px;
                display: block;
                box-sizing: content-box;
                width: 1px;
                height: 50%;
                padding: 1px 0;
                background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
                transition: background-color 0.3s;
                content: '';
                z-index: 1;
                @media only screen and (max-width: 479px){
                    display: none;
                }
            }
        }
        span{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            @media only screen and (max-width: 1792px){
                font-size: 13px;
            }
        }
        &.ant-radio-button-wrapper-checked{
            span{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }

    // Product Toolbox Styles
    .product-list-action{
        @media only screen and (max-width: 991px){
            flex-flow: column;
            justify-content: center;
        }
    }
    .product-list-action__tab{
        margin: -10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        
        @media only screen and (max-width: 767px){
            margin-bottom: 15px;
            text-align: center;
        }
        @media only screen and (max-width: 991px) and (min-width: 768px){
            margin: -10px -10px 0;
        }
        @media only screen and (max-width: 575px){
            margin: -6px -6px 0;
        }
        @media only screen and (max-width: 344px){
            .ant-radio-group-outline{
                margin-top: 8px;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;;
            }
        }
        .toolbox-menu-title,
        .ant-radio-group{
            margin: 10px;
            @media only screen and (max-width: 575px){
                margin: 6px
            }
        }
        .ant-radio-button-wrapper{
            &.ant-radio-button-wrapper-checked{
                background-color: transparent;
                .ant-radio-button {
                    & + span{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        position: relative;
                        top: -1px;
                    }
                }
            }
            span{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
            &:hover{
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }

    .product-list-action__viewmode{
        display: flex;
        align-items: center;
        a{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            &.active{
                background-color: #fff;
                box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
                color: ${({ theme }) => theme['primary-color']};
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
        svg{
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }

    .table-search-box{
        @media only screen and (max-width: 991px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-select{
            margin-bottom: 0;
            .ant-select-selector{
                .ant-select-selection-search{
                    width: 100% !important;
                    .ant-select-selection-search-input {
                        border-radius: 20px;
                        border: 0 none;
                        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                        height: 40px;
                        input{
                            background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                            height: 40px !important;
                        }
                    }
                }
            }
        }
    }
    .table-toolbox-actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media only screen and (max-width: 1599px){
            margin-top: 20px;
            justify-content: center !important;
            text-align: center !important;
        }
        button{
            padding: 0px 13.4px;
            height: 38px;
            font-size: 13px;
            font-weight: 500;
            border-radius: 6px;
            svg,
            i{
                color: #fff;
            }
            &{
                +button{
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                }
            }
        }
    }
    &.ninjadash-toolbox-seller{
        .table-toolbox-actions{
            justify-content: flex-end !important;
            @media only screen and (max-width: 991px){
                justify-content: center !important;
            }
        }
    }
`;

const PaginationWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
    
    @media only screen and (max-width: 767px){
        margin-top: 0px !important
    }
    @media only screen and (max-width: 1199px){
        justify-content: center;
    }
    .ant-pagination{
        .ant-pagination-item-link,
        .ant-pagination-item,
        .ant-pagination-options .ant-select-selector{
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['input-bg']} !important;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']}; 
        }
        .ant-pagination-item a{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
`;

const ProductDetailsWrapper = Styled.div`
    .product-details-box{
        padding: 15px;
        @media only screen and (max-width: 575px){
            padding: 0;
        }
    }
    .product-details-box__left{
        figure{
            margin-bottom: 0;
            img{
                border-radius: 10px;
            }
        }
    }
    .pdbl__slider{
        margin-top: 15px;
    }
    .pdbl__image{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
        img{
            border-radius: 10px;
            max-width: 90px;
            @media only screen and (max-width: 991px){
                margin-bottom: 10px;
            }
        }
    }
    .product-details-box__right{
        @media only screen and (max-width: 991px){
            margin-top: 20px;
        }
        p{
            margin-bottom: 8px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-rate{
            margin-bottom: 6px;
            position: relative;
            top: -3px;
        }
        .ant-rate-star:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 2px !important;
        }
        .ant-rate-star-first,
        .ant-rate-star-second{
            .anticon svg{
                color: #FA8B0C;
            }
        }
    }
    .pdbr__title{
        margin-bottom: 10px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .pdbr__rating{
        display: inline-block;
        margin: ${({ theme }) => (theme.rtl ? '0 8px 0 4px' : '0 4px 0 8px')};
        font-size: 15px;
        font-weight: 600;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .pdbr__review-count{
        font-size: 15px;
        font-weight: 400;
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .pdbr__brand-text{
        font-size: 13px;
        display: inline-block;
        margin: 0 6px 8px 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .pdbr__brand-name{
        font-size: 13px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .pdbr__new-price{
        font-size: 22px;
        font-weight: 500;
        margin: 18px 0 8px;
        color: ${({ theme }) => theme['primary-color']};
        .pdbr__currency{
            font-size: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
    }
    .pdbr__desc{
        font-size: 15px;
        max-width: 580px;
    }
    .pdbr__old-price{
        display: inline-flex;
        align-items: center;
        margin-bottom: 22px;
        del{
            font-size: 16px;
            font-weight: 400;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        .pdbr__offer-price{
            display: inline-block;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            font-size: 12px;
            color: ${({ theme }) => theme['secondary-color']};
        }
    }

    .pdbr__current-status{
        margin-top: 25px;
        p{
            margin-bottom: 2px;
        }
        .current-status-title{
            font-weight: 500;
            margin-right: 30px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 1000px){
                margin-right: 15px;
            }
        }
        .stock-status{
            &.in-stock{
                font-weight: 500;
                color: ${({ theme }) => theme['success-color']};
            }
        }
        .shipping-cost{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .pdbr__quantity{
        font-weight: 500;
        margin: 30px 0 30px !important;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        button{
            min-height: 38px;
            background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
            &.btn-inc{
                margin-right: 15px;
            }
            &.btn-dec{
                margin-left: 15px;
            }
            span{
                font-size: 16px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
        .pdbr__availability{
            font-size: 13px;
            font-weight: 400;
            margin-left: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
    }
    .pdbr__Actions{
        border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        padding-bottom: 30px;
        margin-bottom: 28px;
        @media only screen and (max-width: 1399px){
            flex-flow: column;
            align-items: flex-start;
        }
        .pdbr__product-action{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .btn-cart{
                padding: 0 26.35px;
            }
            .btn-buy{
                padding: 0 29.85px;
            }
            .btn-cart,
            .btn-buy{
                border-radius: 6px;
                height: 44px;
            }
            button,
            a{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                @media only screen and (max-width: 1399px){
                    margin-bottom: 20px;
                }
                &:focus{
                    svg{
                        fill: #5a5f7d;
                    }
                }
            }
            .btn-icon{
                height: 40px;
                padding: 0 13px;
                box-shadow: 0 5px 15px ${({ theme }) => theme['extra-light-color']}15;
                &:hover{
                    background: transparent;
                }
                i{
                    color: #707070;
                }
            }
            .btn-heart{
                svg{
                    fill: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
                &.favourite{
                    fill: ${({ theme }) => theme['primary-color']}
                }
            }
        }
        .pdbr__socials{
            margin: 0px 0 0 5px;
            a{
                color: #666666;
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
                }
                span{
                    font-size: 14px;
                    color: #666666;
                }
                &:hover{
                    span{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }

    .pdbr__list{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        li{
            span{
                &:first-child{
                    display: inline-block;
                    min-width: 66px;
                    font-weight: 500;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
            span + span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .btn-cart span {
        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
    }
`;

const ProductTable = Styled.div`
    .table-cart{
        .ant-table-content{
            padding-bottom: 10px;
        }
        .ant-table{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        .ant-table-tbody{
            .cart-single{
                figure{
                    align-items: center;
                    margin-bottom: 0;
                    img{
                        max-width: 80px;
                        min-height: 80px;
                        border-radius: 10px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
                    }
                }
                .cart-single__info{
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6{
                        font-size: 16px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    p{
                        margin-bottom: 0;
                    }
                }
            }
            .ant-table-row{
                &:hover{
                    box-shadow: 0 10px 15px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
                    td{
                        background: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
                    }
                    .table-action{
                        button{
                            background: #FF4D4F15;
                            i,
                            svg{
                                color: ${({ theme }) => theme['danger-color']};
                            }
                        }
                    }
                }
            }
            >tr{
                >td{
                    background-color: transparent;
                }
            }
        }
    }
    .table-invoice{
        .ant-table table {
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')}
        }
        .ant-table{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        table{
            thead{
                >tr{
                    th{
                        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        &:first-child{
                            ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                        }
                        &:last-child{
                            ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                    }
                }
            }
            tbody{
                >tr{
                    &.ant-table-row{
                        &:hover{
                            >td{
                                background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                            }
                        }
                    }
                    td{
                        border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        border-radius: 0 !important;
                        
                        @media print {
                            padding: 6px 16px;
                        }
                        &:last-child{
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                            border-radius: 0px !important;
                        }
                        .product-info-title{
                            font-size: 15px;
                            font-weight: 500;
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        }
                        .product-unit{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 40px;
                        }
                        .product-quantity{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 50px;
                        }
                    }
                }
            }
        }
        .product-info{
            min-width: 300px;
            @media print {
                min-width: 200px;
            }
            .product-info{
                margin-bottom: 8px;
            }
        }
    }
    table{
        thead{
            tr{
                border-radius: 10px;
                th{
                    border-bottom: 0 none;
                    background:  ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                    &:first-child{
                        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                    &:last-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                }
            }
        }
        tbody{
            tr{
                border-radius: 10px;
                td{
                    border-bottom: 0 none;
                    &:first-child{
                        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')};
                    }
                    &:last-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                }
            }
        }

        .info-list{
            li{
                display: inline-block;
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                }
                span{
                    font-size: 15px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    &.info-title{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                }
            }
        }
        .cart-single-price{
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .cart-single-t-price{
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            display: inline-block;
            min-width: 80px;
        }
        .cart-single-quantity{
            button{
                background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
                i,
                img,
                svg{
                    min-width: 12px;
                    height: 12px;
                }
                &.btn-inc,
                &.btn-dec{
                    width: 36px;
                    height: 36px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                &.btn-inc{
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                    @media only screen and (max-width: 575px){
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                }
                &.btn-dec{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                    @media only screen and (max-width: 575px){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                }
            }
        }
        .table-action{
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            button{
                padding: 0 11px;
                height: 38px;
                background: #fff;
                i,
                svg{
                    color: #707070;
                }
            }
        }
    }
`;

const CouponForm = Styled.div`
    margin: 10px 0 20px 0;
    .coupon-form-input{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        input::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    #submitCoupon{
        >.ant-row{
            align-items: center;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-form-item-control-input-content{
            input{
                max-width: 180px;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                height: 44px;
                background:  ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color:  ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                @media only screen and (max-width: 991px){
                    max-width: 100%;
                }
                @media only screen and (max-width: 575px){
                    max-width: 200px;
                    margin-bottom: 15px;
                }
            }
        }
        button{
            border-radius: 5px;
            height: 44px;
            box-shadow: 0 3px 5px ${({ theme }) => theme['success-color']}15;
        }
    }
`;

const OrderSummary = Styled.div`
    max-width: 650px;
    margin: 0 auto;
    .ant-card{
        margin-bottom: 0 !important;
    }
    .ant-card-body{
        box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['dark-text']}10;
    }
    .ant-form-item{
        margin-bottom: 0;
        .ant-form-item-control-input-content{
            input{
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }

    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .order-summary-inner{
        padding-bottom: 5px;
        @media only screen and (max-width: 1599px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-select{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            .ant-select-selector{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
            }
            .ant-select-selection-item{
                font-weight: 500;
                img{
                    position: relative;
                    top: -1px;
                }
            }
            .ant-select-arrow{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
            li{
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
        .summary-total-amount{
            color: ${({ theme }) => theme['primary-color']} !important;
        }
    }

    .summary-list{
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
            .summary-list-title{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .summary-list-text{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            color: ${({ theme }) => theme['success-color']};
        }
        .ant-select-arrow{
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        }
    }
    .promo-apply-form{
        display: flex;
        align-items: flex-end;
        margin: 5px 0 18px;
        @media only screen and (max-width: 479px){
            flex-flow: column;
            align-items: flex-start;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex: auto;
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            label{
                font-weight: 400;
                margin-bottom: 4px;
                height: fit-content;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .ant-form-item-control-input-content{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            input{
                margin: ${({ theme }) => (theme.rtl ? '0 0 0px 6px' : '0 6px 0px 0')};
                height: 40px;
                @media only screen and (max-width: 479px){
                    margin: ${({ theme }) => (theme.rtl ? '0 0 10px 6px' : '0 6px 10px 0')};
                    width: 100% !important;
                }
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-top: 22px;
        @media only screen and (max-width: 575px){
            font-size: 13px;
        }
        a{
            display: flex;
            align-items: center;
        }
        i,
        svg{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
        }
    }
`;

const AddProductForm = Styled.div`
    margin-top: 28px;
    @media only screen and (max-width: 575px){
        margin-top: 0;
    }
    .ant-select-arrow{
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 11px;
    }
    
    .ant-table table {
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    }
    .add-product-block{
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
        border-radius: 20px;
        padding: 30px;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-background']};
        @media only screen and (max-width: 575px){
            padding: 20px;
        }
        &:not(:last-child){
            margin-bottom: 30px;
            @media only screen and (max-width: 575px){
                margin-bottom: 15px;
            }
        }
        .ant-card{
            margin-bottom: 0 !important;
            border-radius: 20px;
        }
        .add-product-content{
            box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
            border-radius: 20px;
            .ant-card-head{
                padding: 0 40px !important;
                border-radius: ${({ theme }) => (theme.rtl ? '20px 0 0 20px' : '20px 20px 0 0')};
                @media only screen and (max-width: 575px){
                    padding: 0 15px !important;
                }
            }
            .ant-card-head-title{
                padding: 26px 0 25px;
            }
            .ant-card-body{
                padding: 26px 40px 40px !important;
                @media only screen and (max-width: 575px){
                    padding: 20px !important;
                }
            }
        }
        .ant-upload{
            border-spacing: 6px;
            border-width: 2px;
            border-radius: 10px;
            background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-deep']};
            padding: 50px;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            &.ant-upload-drag{
                background: ${({ theme }) => theme[theme.mainContent]['main-background-light']} !important;
            }
            .ant-upload-drag-icon{
                i,
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            .ant-upload-text{
                font-weight: 500;
                margin-bottom: 8px;
            }
            .ant-upload-hint{
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                span{
                    color: ${({ theme }) => theme['secondary-color']};
                }
            }
        }
        .ant-upload-list-item{
            height: 100%;
            padding: 0;
            border: 0 none;
            margin-top: 25px;
        }
        .ant-upload-list-item-info{
            height: 100%;
            >span{
                display: flex;
                align-items: center;
            }
            .ant-upload-list-item-name{
                padding: 0 10px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
            .ant-upload-list-item-card-actions{
                position: relative;
                top: 0;
                i,
                svg{
                    width: 15px;
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
            .ant-upload-list-item-thumbnail{
                position: relative;
                top: 0;
                min-width: 100px;
                width: auto;
                height: 100%;
                img{
                    max-width: 100px;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px;
                }
            }
        }
    }
    .add-form-action{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        margin-top: 40px;
        @media only screen and (max-width: 575px){
            text-align: center;
            margin-top: 0;
        }
        .ant-form-item-control-input{
            button{
                height: 50px;
                padding: 0 22.82px;
            }
        }
        button{
            font-size: 15px;
            font-weight: 400;
            height: 50px;
        }
        .btn-cancel{
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            background: ${({ theme }) => theme['bg-color-light']};
        }
    }
`;

const InvoiceHeader = Styled.div`
    margin: 50px 0;
    @media only screen and (max-width: 575px){
        margin: 25px 0;
    }
    @media print {
        margin: 0px 0 15px 0;
    }
    .company-logo{
        @media print {
            position: absolute;
            left: 0
            top: 0;
            width: 100%;
        }
    }
    .top-img{
        max-width: 140px;
    }
    figure{
        @media only screen and (max-width: 575px){
            text-align: center;
        }
    }
    .invoice-info{
        font-weight: 500;
        line-height: 1.6;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 575px){
            text-align: center !important;
            margin-bottom: 0;
        }
    }
`;

const InvoiceLetterBox = Styled.div`
    .invoice-letter-inner{
        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        padding: 30px 50px 25px;
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media print {
            padding: 20px;
        }
        @media only screen and (max-width: 991px){
            flex-flow: column;
        }
        @media only screen and (max-width: 575px){
            padding: 25px;
        }
    }
    .invoice-author{
        @media only screen and (max-width: 991px){
            text-align: center;
        }
        @media print {
            margin-right: 8px;
        }
        .invoice-author__title{
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 575px){
                font-size: 30px;
            }
            @media print {
                font-size: 24px;
            }
        }
        p{
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 4px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media print {
                font-size: 14px;
            }
        }
    }
    .invoice-barcode{
        max-width: 310px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 991px){
            margin: 20px auto;
        }
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            padding: 20px 20px 16px !important;
            @media print {
                padding: 15px !important;
            }
            img{
                @media print {
                    max-width: 180px;
                }
            }
        }
        p{
            margin-bottom: 0;
        }
    }
    .invoice-customer{
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 991px){
            float: none;
            text-align: center;
        }
        @media print {
            margin-left: 8px;
        }
        .invoice-customer__title{
            font-size: 15px;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            font-size: 15px;
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media print {
                font-size: 14px;
            }
        }
    }
`;

const InvoiceAction = Styled.div`
    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    margin: 90px -5px 10px;
    @media only screen and (max-width: 991px){
        margin-top: 50px;
    }
    @media only screen and (max-width: 479px){
        margin-top: 30px;
    }
    @media print {
        display: none;
    }
    .ant-btn-default{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    button{
        padding: 0 25px !important;
        margin: 5px;
        @media only screen and (max-width: 479px){
            margin-bottom 10px;
        }
        &.ant-btn-default{
            svg,
            i{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
        .feather-download{
            color: #fff;
        }
        svg +span{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }
`;

export {
  FigureCart,
  Sidebar,
  NotFoundWrapper,
  SidebarSingle,
  ProductCard,
  TopToolBox,
  PaginationWrapper,
  ProductDetailsWrapper,
  ProductTable,
  CouponForm,
  OrderSummary,
  AddProductForm,
  InvoiceHeader,
  InvoiceLetterBox,
  InvoiceAction,
};
