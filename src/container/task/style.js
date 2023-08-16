import Styled from 'styled-components';

const SidebarWrap = Styled.div`
    .ninjadash-taskApp-sidebar{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['gray-text']}03;
        min-height: 300px;
        .ninjadash-btn-add{
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            border-radius: 22px;
            height: 44px;
            margin-bottom: 20px;
        }
    }
    .ninjadash-taskApp-sidebar__nav{
        width: calc(100% + 30px);
        position: relative;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -15px;
        .ninjadash-taskApp-sidebar__nav--item{
            display: block;
            .ninjadash-taskApp-sidebar__nav--link{
                display: flex;
                align-items: center;
                font-size: 14px;
                border-radius: 4px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                padding: 8px 15px;
                &:hover{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                }
                &.active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                }
                .nav-item-icon{
                    line-height: 1;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
                    i,
                    svg{
                        width: 16px;
                        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                    }
                }
            }
        }
    }
`;
const TaskListWrap = Styled.div`
    .ninjadash-tasklist-wrap{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(#9299B8,.03);
    }
    .ninjadash-tasklist-head{
        .ninjadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }
    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            padding: 15px 30px;
            .ninjadash-tasklist-item__title{
                margin-bottom: 10px;
            }
        }
    }
`;
const FixedSidebar = Styled.div`
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
    width: 280px;
    height: 100vh;
    z-index: 9999;
    background-color: #fff;
    overflow-y: auto;
    transition: all .3s ease;
    &.show{
        transform: translateX(0px);
    }
    &.hide{
        transform: translateX(-280px);
    }
    .trigger-close{
        float: right;
        margin-top: 15px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        svg,
        i{
            color: ${({ theme }) => theme['danger-color']}; 
        }
    }
    .ninjadash-taskApp-sidebar{
        padding-top: 60px;
    }
`;

export { SidebarWrap, TaskListWrap, FixedSidebar };
