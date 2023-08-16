import { Layout } from 'antd';
import Styled from 'styled-components';

const { Footer } = Layout;

const NavTitle = Styled.p`
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgb(146, 153, 184);
    padding: 0px 15px;
    display: flex;
`;

const LayoutContainer = Styled.div`
    .ant-layout {
        background-color: transparent;
        .ant-layout-header{
            padding: ${({ theme }) => (!theme.rtl ? '0 5px 0 0' : '0 0 0 5px')};
            height: 72px;
            @media only screen and (max-width: 991px){
                padding: 0 10px;
            }
        }
    }
    .ant-layout.layout {
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
    }

    .ninjadash-nav-actions__searchbar{
        display: flex;
        align-items: center;
        svg,
        img{
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .ninjadash-searchbar{
            opacity: 0;
            visibility: hidden;
            transition: .35s;
            @media only screen and (max-width: 767px){
                position: fixed;
                top: 45px;
                right: 0;
                min-width: 280px;
                z-index: 98;
                box-shadow: 0 5px 30px ${({ theme }) => theme[theme.mainContent]['gray-text']}15;
            }
            input{
                user-select: none;
                pointer-events: none;
                &:focus{
                    outline: none;
                    box-shadow: 0 0;
                }
            }
            .ant-form-item{
                margin-bottom: 0;
            }
        }
        &.show{
            .ninjadash-searchbar{
                opacity: 1;
                visibility: visible;
                input{
                    user-select: all;
                    pointer-events: all;
                }
            }
            .ninjadash-search-icon{
                display: none;
            }
            .ninjadash-close-icon{
                display: block !important;
                top: 2px;
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        .ninjadash-close-icon{
            display: none !important;
        }
        a{
            line-height: .8;
            position: relative;
            top: 2px;
            @media only screen and (max-width: 767px){
                top: 0;
            }
        }
    }

    /* ninjadash Header Style */
    .ninjadash-header-content{
        height: 100%;
        .ninjadash-header-content__left{
            min-width: 280px;
            padding: 0 20px 0 30px;
            background-color: ${({ theme }) => theme[theme.mainContent]['brand-background']};
            @media only screen and (max-width: 1499px){
                min-width: 220px;
            }
            @media only screen and (max-width: 767px){
                padding: 0 20px 0 8px;
                min-width: auto;
                margin-right: 0;
            }
            .navbar-brand{
                display: flex;
                justify-content: space-between;
                align-items: center;
                button{
                    padding: 0;
                    line-height: 0;
                    margin-top: 4px;
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light']};
                    @media only screen and (max-width: 875px){
                        padding: ${({ theme }) => (theme.rtl ? '0 10px 0 20px' : '0 20px 0 10px')};
                    }
                    @media only screen and (max-width: 767px){
                        order: -1;
                        padding: ${({ theme }) => (theme.rtl ? '0 0 0 15px' : '0 15px 0 0')};
                    }
                }
            }
            .ninjadash-logo{
                @media only screen and (max-width: 875px){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
                @media only screen and (max-width: 767px){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                }
                img{
                    max-width: ${({ theme }) => (theme.topMenu ? '140px' : '120px')};
                    width: 100%;
                    @media only screen and (max-width: 475px){
                        max-width: ${({ theme }) => (theme.topMenu ? '100px' : '100px')};
                    }
                }
            }
        }
        .ninjadash-header-content__right{
            flex: auto;
            .ninjadash-nav-actions{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex: auto;
                padding-right: 12px;
                @media only screen and (max-width: 767px){
                    display: none;
                }
                .ninjadash-nav-actions__language,
                .ninjadash-nav-actions__author{
                    line-height: 1;
                }
                .ninjadash-nav-actions__searchbar{
                    margin-right: 10px;
                    margin-top: -1px;
                }
                .ninjadash-nav-actions__author{
                    margin: 0 3px;
                    .ninjadash-nav-action-link{
                        display: flex;
                        align-items: center;
                        i,
                        svg,
                        img {
                            width: 16px;
                            height: 16px;
                            color: ${({ theme }) => theme[theme.mainContent]['light-text']}};
                        }
                        i,
                        svg{
                            position: relative;
                            top: 2px;
                        }
                        .ant-avatar-image{
                            img{
                                min-width: 32px;
                                max-width: 32px;
                                min-height: 32px;
                            }
                        }
                    }
                }
                .ninjadash-nav-actions__author--name{
                    font-size: 14px;
                    display: inline-block;
                    font-weight: 500;
                    margin: ${({ theme }) => (theme.rtl ? '0 10px 0 6px' : '0 6px 0 10px')};
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    @media only screen and (max-width: 991px){
                        display: none;
                    }
                }
            }      
        }
        .ninjadash-header-content__mobile{
            display: none;
            @media only screen and (max-width: 767px){
                display: block;
            }
            .ninjadash-mobile-action{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: inline-flex;
                align-items: center;
                @media only screen and (max-width: 767px){
                    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px;
                }
                a,
                .btn-search{
                    display: inline-flex;
                    color: ${({ theme }) => theme['light-color']};
                    &.btn-search{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
                        @media only screen and (max-width: 475px){
                            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                        }
                    }
                    svg{
                        width: 18px;
                        height: 18px;
                    }
                }
                .ninjadash-searchbar{
                    .ant-input{
                        border: 0 none;
                    }
                    .ant-row{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
    .ninjadash-header-more{
        .ninjadash-nav-actions__author{
            .ninjadash-nav-actions__author--name{
                display: none;
            }
            .ninjadash-nav-action-link{
                display: flex;
                align-items: center;
                .ant-avatar-image{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
                }
                svg{
                    width: 20px;
                    height: 20px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']}};
                }
            }
        }
        .ninjadash-nav-actions__message,
        .ninjadash-nav-actions__notification,
        .ninjadash-nav-actions__settings{
            position: relative;
            top: 4px;
        }
        .ninjadash-nav-actions__message{
            .ant-badge-dot{
                background-color: ${({ theme }) => theme['success-color']}};
            }
        }
    }
    header{
        box-shadow: 0 5px 20px ${({ theme }) => theme['extra-light-color']}05;
        z-index: 998;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media print {
            display: none;
        }
        .ant-menu-sub.ant-menu-vertical{
            .ant-menu-item{
                a{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        .ant-menu.ant-menu-horizontal{
            display: flex;
            align-items: center;
            margin: 0 -16px;
            li.ant-menu-submenu{
                margin: 0 16px;
            }
            .ant-menu-submenu{
                &.ant-menu-submenu-active,
                &.ant-menu-submenu-selected,
                &.ant-menu-submenu-open{
                    .ant-menu-submenu-title{
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        svg,
                        i{
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        }
                    }
                }
                .ant-menu-submenu-title{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    svg,
                    i{
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    .ant-menu-submenu-arrow{
                        font-family: "FontAwesome";
                        font-style: normal;
                        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
                        &:after{
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                            content: '\f107';
                            background-color: transparent;
                        }
                    }
                }
            }
        }
    }

    /* Sidebar styles */
    .ant-layout-sider {
        box-shadow: 0 0 20px ${({ theme }) => theme['extra-light-color']}05;
        @media (max-width: 991px){
            box-shadow: 0 0 10px #00000020;
        }
        @media print {
            display: none;
        }

        .custom-scrollbar{
            .ninjadash-track-vertical{
                position: absolute;
                width: 6px;
                transition: opacity 200ms ease 0s;
                opacity: 0;
                ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
                bottom: 2px;
                top: 2px;
                border-radius: 3px;
                >div{
                    background-color: ${({ theme }) => theme[theme.mainContent]['scroll-bg']}!important;
                }
            }
        }

        .ant-menu{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }

        &.ant-layout-sider-collapsed{
            padding: 15px 0px 55px !important;
            .ant-layout-sider-children{
                .ninjadash-sidebar-nav-title{
                    display: none;
                }
            }
            & + .atbd-main-layout{
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 80px;

            }
            .ant-menu-item-group{
                display: none;
            }
            .ant-menu-item{
                color: #333;
                .badge{
                    display: none;
                }
            }
            .ant-layout-sider-children{
                .ant-menu .ant-menu-submenu, 
                .ant-layout-sider-children .ant-menu .ant-menu-item{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0;
                }
            }
        }

        &.ant-layout-sider-dark{
            background: ${({ theme }) => theme[theme.mainContent]['white-background']};
            .ant-layout-sider-children{
                .ant-menu{
                    .ant-menu-submenu-inline{
                        > .ant-menu-submenu-title{
                            padding: 0 20px !important;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                    }
                }
            }
        }
        
        .ant-layout-sider-children{
            padding-bottom: 15px;
            
            .ninjadash-sidebar-nav-title {
                display: flex;
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                padding: 0 ${({ theme }) => (theme.rtl ? '20px' : '15px')} 0 0;
                margin: 20px 0 0 0;
            }

            .ninjadash-sidebar-nav-title{
                &.ninjadash-sidebar-nav-title-top{
                    margin: 8px 0 0;
                }
            }

            .ant-menu{
                font-size: 14px;
                overflow-x: hidden;
                ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                &.ant-menu-dark, &.ant-menu-dark .ant-menu-sub, &.ant-menu-dark .ant-menu-inline.ant-menu-sub {
                    background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                    
                }
                .ant-menu-sub.ant-menu-inline{
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
                
                .ant-menu-submenu-selected{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
                .ant-menu-submenu, 
                .ant-menu-item{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 5px;
                    &.ant-menu-item-selected{
                        border-radius: 0 21px 21px 0;
                        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                        &:after{
                            content: none;
                        }
                        a{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    &.ant-menu-submenu-active{
                        >svg,
                        >.ant-menu-submenu-title .ant-menu-title-content{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }

                        >.ant-menu-submenu-title{
                            .ant-menu-submenu-arrow:before,
                            .ant-menu-submenu-arrow:after{
                                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                            svg{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                        }
                    }
                    &.ant-menu-item-active{
                        .ant-menu-item-icon{
                            svg{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                        }
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                        .ant-menu-title-content{
                            a{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                        }
                    }
                    .ant-menu-item-icon{
                        svg{
                            transition: color 0.3s;
                        }
                    }
                    svg,
                    img{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme[theme.mainContent]['menu-icon-color']};
                    }
                    span{
                        display: inline-block;
                        transition: 0.3s ease;
                    }
                    .ant-menu-title-content{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 16px;
                    }
                }
                .ant-menu-item{
                    .menuItem-iocn{
                        width: auto;
                    }
                    &:not(:last-child){
                        margin-bottom: 0;
                    }
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                }
                .ant-menu-submenu{
                    &.ant-menu-submenu-open{
                        >.ant-menu-submenu-title{
                            display: flex;
                            align-items: center;
                            .title{
                                padding-left: 0;
                            }
                            .badge{
                                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 45px;
                            }
                            span{
                                font-weight: 500;
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                            svg,
                            i,
                            .ant-menu-submenu-arrow{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                                &:after,
                                &:before{
                                    background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                                }
                            }
                        }
                        .ant-menu-sub{
                            .ant-menu-item{
                                &.ant-menu-item-selected{
                                    background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                                    border-radius: ${({ theme }) => (!theme.rtl ? '0 21px 21px 0' : '21px 0 0 21px')};
                                    a{
                                        font-weight: 500;
                                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                                    }
                                }
                            }
                        }
                    }
                    .ant-menu-submenu-title{
                        .ant-menu-title-content{
                            font-weight: 500;
                            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        }
                    }
                }
                
                .ant-menu-item,
                .ant-menu-submenu-title{
                    margin: 0 !important;
                    &:active{
                        background-color: transparent;
                    }
                    a{
                        font-size: 14px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['gray-text']};
                        position: relative;
                    }
                    >span{
                        width: 100%;
                        margin-left: 0;
                        .pl-0{
                            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0px;
                        }
                    }
                    .badge{
                        position: absolute;                        
                        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                        display: inline-block;
                        height: auto;
                        font-size: 10px;
                        border-radius: 3px;
                        padding: 3px 4px 4px;
                        line-height: 1;
                        letter-spacing: 1px;
                        color: #fff;
                        &.badge-primary{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                        &.badge-success{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
                
                .ant-menu-submenu-inline{
                    > .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        padding: 0 15px !important;
                        margin: 0;
                        svg,
                        img{
                            width: 16px;
                            height: 16px;
                        }
                                                
                        .ant-menu-submenu-arrow{
                            right: auto;
                            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px;
                            &:after,
                            &:before{
                                width: 6px;
                                background: #868EAE;
                                height: 1.2px;
                            }
                            &:before{
                                transform: rotate(45deg) ${({ theme }) =>
                                  !theme.rtl ? 'translateY(-3px)' : 'translateY(3px)'};
                            }
                            &:after{
                                transform: rotate(-45deg) ${({ theme }) =>
                                  theme.rtl ? 'translateY(-3px)' : 'translateY(3px)'};
                            }
                        }
                    }
                    &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                transform: translateY(2px);
                                &:before{
                                    transform: rotate(45deg) translateX(-3.3px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(3.3px);
                                }
                            }
                        }
                    }
                    .ant-menu-item{
                        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                        a{
                            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 36px !important;
                        }
                    }
                }
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important;
                    a{
                        width: 100%;
                        display: flex !important;
                        align-items: center;
                        text-transform: capitalize;
                        .feather{
                            width: 16px;
                            color: ${({ theme }) => theme['extra-light-color']};
                        }
                        span{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                    &.ant-menu-item-selected{
                        svg,
                        i{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                }
                
                
                &.ant-menu-inline-collapsed{
                    .ant-menu-submenu{
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};                        
                        .ant-menu-submenu-title{
                            padding: 0 20px;
                            justify-content: center;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                        justify-content: center;
                    }
                    .ant-menu-submenu, .ant-menu-item{
                        span{
                            display: none;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1150px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -80px !important;
        }

    }

    .atbd-main-layout{
        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: ${({ theme }) =>
  theme.topMenu ? 0 : '280px'};
        margin-top: 74px;
        transition: 0.3s ease;
        
        @media only screen and (max-width: 1150px){
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: auto !important;
        }
        @media print {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
    }
    .admin-footer{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media print {
            display: none;
        }
        .admin-footer__copyright{
            display: inline-block;
            width: 100%;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media only screen and (max-width: 767px){
                text-align: center;
                margin-bottom: 10px;
            }
            a{
                display: inline-block;
                margin-left: 4px;
                font-weight: 500;
                color: ${({ theme }) => theme['primary-color']};
            }
        }
        
    }
    /* Common Styles */
    .ant-radio-button-wrapper-checked {
        &:not(.ant-radio-button-wrapper-disabled){
            background: ${({ theme }) => theme[theme.mainContent].white};
            border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }
    .ninjadash-shade{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0);
        content: "";
        z-index: -1;
        &.show{
            z-index: 101;
        }
    }
`;

const SmallScreenAuthInfo = Styled.div`
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    width: 100%;
    position: fixed;
    margin-top: ${({ hide }) => (hide ? '0px' : '72px')};
    top: 0;
    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
    transition: .3s;
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    z-index: ${({ hide }) => (hide ? -1 : 1)};
    box-shadow: 0 2px 30px #9299b810;
    padding: 10px 0;
    @media only screen and (max-width: 767px){
        padding: 10px 15px;
    }
    .ninjadash-nav-actions__searchbar{
        display: none !important;
    }
`;

const SmallScreenSearch = Styled.div`
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)};
        z-index: ${({ hide }) => (hide ? -1 : 999)};
        box-shadow: 0 2px 30px #9299b810;

`;

const ModeSwitch = Styled.div`
    background: #ddd;
    width: 200px;
    position: fixed;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
    top: 50%;
    margin-top: -100px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    button{
        margin-top: 5px;
    }
`;

const TopMenuSearch = Styled.div`
    .top-right-wrap{
        position: relative;
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    }
    .search-toggle{
        display: flex;
        align-items: center;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        .feather-x{
            display: none;
        }
        .feather-search{
            display: flex;
        }
        &.active{
            .feather-search{
                display: none;
            }
            .feather-x{
                display: flex;
            }
        }
        svg,
        img{
            width: 20px;
        }
    }
    .topMenu-search-form{
        position: absolute;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 100%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        top: 12px;
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme['border-color-normal']};
        border-radius: 6px;
        height: 40px;
        width: 280px;
        display: none;
        &.show{
            display: block;
        }
        .search-icon{
            width: fit-content;
            line-height: 1;
            position: absolute;
            left: 15px;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 15px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9999;
        }
        i,
        svg{
            width: 18px;
            background-color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        form{
            height: auto;
            display: flex;
            align-items: center;
        }
        input{
            position: relative;
            border-radius: 6px;
            width: 100%;
            border: 0 none;
            height: 38px;
            padding-left: 40px;
            z-index: 999;
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 40px;
            &:focus{
                border: 0 none;
                box-shadow: 0 0;
                outline: none;
            }
        }
    }
`;

const TopMenuStyle = Styled.div`
    .ninjadash-top-menu{
        ul{
            margin-bottom: 0;
            li{
                display: inline-block;
                position: relative;
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 14px;
                @media only screen and (max-width: 1024px){
                    ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 10px;
                }
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 34px;
                    @media only screen and (max-width: 1399px){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
                    }
                    @media only screen and (max-width: 1199px){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 26px;
                    }
                    @media only screen and (max-width: 1024px){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                    }
                }
                .parent.active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
                &.has-subMenu{
                    >a{
                        position: relative;
                        &:before{
                            position: absolute;
                            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -14px;
                            top: 50%;
                            transform: translateY(-50%);
                            font-family: "FontAwesome";
                            content: '\f107';
                            line-height: 1;
                            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                        }
                        &.active{
                            &:before{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                            }
                        }
                    }
                }
                &.has-subMenu-left{
                    >a{
                        position: relative;
                        &:before{
                            position: absolute;
                            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 30px;
                            top: 50%;
                            transform: translateY(-50%);
                            font-family: "FontAwesome";
                            content: '\f105';
                            line-height: 1;
                            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                        }
                    }
                }
                &:hover{
                    >.subMenu{
                        top: 70px;
                        opacity: 1;
                        visibility: visible;
                        @media only screen and (max-width: 1399px){
                            top: 40px;
                        }
                    }
                }
                >a{
                    padding: 24px 0;
                    line-height: 1.5;
                    @media only screen and (max-width: 1399px){
                        padding: 6px 0;
                    }
                }
                a{
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    &.active{
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    svg,
                    img,
                    i{
                        margin-right: 14px;
                        width: 16px;
                    }
                }
                >ul{
                    li{
                        display: block;
                        position: relative;
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
                        a{
                            font-weight: 400;
                            padding: 0 30px;
                            line-height: 3;
                            color: #868EAE;
                            transition: .3s;
                            &:hover,
                            &[aria-current="page"]{
                                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']}06;
                                ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 40px;
                            }
                        }
                        &:hover{
                            .subMenu{
                                top: 0;
                                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 250px;
                                @media only screen and (max-width: 1300px){
                                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 180px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .subMenu{
            width: 250px;
            background: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-radius: 6px;
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 80px;
            padding: 12px 0;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s;
            z-index: 98;
            box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
            @media only screen and (max-width: 1300px){
                width: 180px;
            }
            .subMenu{
                width: 250px;
                background:${({ theme }) => theme[theme.mainContent]['white-background']};
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 250px;
                top: 0px;
                padding: 12px 0;
                visibility: hidden;
                opacity: 0;
                transition: 0.3s;
                z-index: 98;
                box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
                @media only screen and (max-width: 1300px){
                    width: 200px;
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 180px;
                }
            }
        }
    }
    .ninjadash-top-menu{
        >ul{
            display: flex;
            flex-wrap: wrap;
        }
    }
    // Mega Menu
    .ninjadash-top-menu{
        >ul{
            >li{
                &:hover{
                    .megaMenu-wrapper{
                        opacity: 1;
                        visibility: visible;
                        z-index: 99;
                    }
                }
                &.mega-item{
                    position: static;
                }
                .sDash_menu-item-icon{
                    line-height: .6;
                }
                .megaMenu-wrapper{
                    display: flex;
                    position: absolute;
                    text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')}
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                    top: 100%;
                    overflow: hidden;
                    z-index: -1;
                    padding: 16px 0;
                    box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
                    border-radius: 0 0 6px 6px;
                    opacity: 0;
                    visibility: hidden;
                    transition: .4s;
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    &.megaMenu-small{
                        width: 590px;
                        >li{
                            flex: 0 0 33.3333%;
                        }
                        ul{
                            li{
                                >a{
                                    padding: 0 35px;
                                    position: relative
                                    &:after{
                                        width: 5px;
                                        height: 5px;
                                        border-radius: 50%;
                                        position: absolute;
                                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 30px;
                                        top: 50%;
                                        transform: translateY(-50%);
                                        background-color: #C6D0DC;
                                        content: '';
                                        transition: .3s;
                                    }
                                    &:hover,
                                    &[aria-current="page"]{
                                        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 35px;
                                        color: ${({ theme }) => theme['primary-color']};
                                        &:after{
                                            background-color: ${({ theme }) => theme['primary-color']};;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &.megaMenu-wide{
                        width: 1000px;
                        padding: 5px 0 18px;
                        @media only screen and (max-width: 1599px){
                            width: 800px;
                        }
                        @media only screen and (max-width: 1399px){
                            width: 700px;
                        }
                        >li{
                            position: relative;
                            flex: 0 0 25%;
                            .mega-title{
                                position: relative;
                                font-size: 14px;
                                font-weight: 500;
                                padding-left: 35px;
                                ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 45px;
                                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                                &:after{
                                    position: absolute;
                                    height: 5px;
                                    width: 5px;
                                    border-radius: 50%;
                                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 30px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    background-color: #C6D0DC;
                                    content: '';
                                }
                            }
                        }
                    }
                    ul{
                        li{
                            position: relative;
                            &:hover{
                                >a{
                                    padding-left: 35px;
                                }
                                &:after{
                                    opacity: 1;
                                    visibility: visible;
                                }
                            }
                            >a{
                                line-height: 3;
                                color: #868EAE;
                                font-weight: 400;
                                transition: .3s;
                            }
                            
                            &:after{
                                width: 6px;
                                height: 1px;
                                border-radius: 50%;
                                position: absolute;
                                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
                                top: 50%;
                                transform: translateY(-50%);
                                background-color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                                content: '';
                                transition: .3s;
                                opacity: 0;
                                visibility: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const FooterStyle = Styled(Footer)`
    padding: 20px 30px 18px;    
    font-size: 14px;
    background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
    width: 100%;
    box-shadow: 0 -5px 10px rgba(146,153,184, 0.05);   
    
    .admin-footer__links{
        margin: 0 -9px;
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 767px){
            text-align: center;
        }
        a {
            margin: 0 9px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
            &:not(:last-child) {
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            }

            
        }
    }
    
`;

export {
  NavTitle,
  FooterStyle,
  LayoutContainer,
  SmallScreenAuthInfo,
  SmallScreenSearch,
  ModeSwitch,
  TopMenuStyle,
  TopMenuSearch,
};
