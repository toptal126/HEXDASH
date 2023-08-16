import Styled from 'styled-components';

const KanvanBoardWrap = Styled.div`
.ant-card-body{
  min-height: 600px;
}
  h1{
    margin-bottom: 20px;
  }
  .ninjadash-kanban-board-list{
    display: flex;
    margin: -10px;
    flex-wrap: wrap;
    .ninjadash-kanban-board-item{
      flex: 0 0 20%;
      padding: 10px;
      height: 400px;
      @media only screen and (max-width: 1599px){
        flex: 0 0 25%;
      }
      @media only screen and (max-width: 1399px){
        flex: 0 0 33.333%;
      }
      @media only screen and (max-width: 767px){
        flex: 0 0 50%;
      }
      @media only screen and (max-width: 575px){
        flex: 0 0 100%;
      }
      .ninjadash-kanban-board-item-scrolable{
        padding-bottom: 80px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
        >div{
          @media only screen and (max-width: 767px){
            inset: 0 auto !important;
            width: 100%;
          }
          
        }
      }
      .ninjadash-addTask-control{
        padding-bottom: 20px;
        &.add-task-on{
          .ninjadash-addTask-from{
            display: block;
          }
          .btn-addTask{
            display: none;
          }
        }
        .ninjadash-addTask-from{
          padding: 0 20px 20px;
          display: none;
        }
        .ninjadash-addTask-input{
          padding: 10px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          &:focus{
            outline: none;
          }
        }
        .ninjadash-addTask-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
    }
    .btn-addColumn{
      flex: 0 0 20%;
      @media only screen and (max-width: 1599px){
        flex: 0 0 25%;
      }
      @media only screen and (max-width: 1399px){
        flex: 0 0 33.333%;
      }
      @media only screen and (max-width: 767px){
        flex: 0 0 50%;
      }
      @media only screen and (max-width: 575px){
        flex: 0 0 100%;
      }
    }
    .ninjadash-kanban-board-item__header{
      padding: 18px 20px 10px 20px;
      position: relative;
      &.editable{
        .list-header-title{
          display: none;
        }
        .title-edit{
          display: block;
          height: 60px;
          border-color: ${({ theme }) => theme['primary-color']};
        }
      }
      .title-edit{
        width: 100%;
        padding: 0 15px;
        border: 1px solid #E3E6EF;
        height: 40px;
        line-height: 38px;
        border-radius: 4px;
        resize: none;
        display: none;
        transition: height .3s ease;
        &:focus{
          outline: none;
        }
      }
      .list-header-target{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .list-header-title{
        font-size: 15px;
        font-weight: 500;
        display:  flex;
        justify-content: space-between;
        .btn-more{
          padding: 0 4px;
          color: #868EAE;
          line-height: 1;
          position: relative;
          z-index: 22;
          svg,
          img{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .ninjadash-kanvan-task{
      padding: 0 20px 0 20px;
    }
    .ninjadash-kanvan-task__single{
      position: relative;
      min-height: 48px;
      padding: 12px 15px;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      box-shadow: 0 0 5px #9299BB10;
      border-radius: 4px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover{
        .ninjadash-kanvan-task__title{
          .btn-edit{
            line-height: 1;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
        }
      }
      .ninjadash-kanvan-task__title{
        font-size: 15px;
        font-weight: 500;
        margin: 0 5px 0 0;
        display: flex;
        justify-content: space-between;
        a{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .btn-edit{
          display: flex;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          svg,
          img{
            width: 14px;
            height: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
      .ninjadash-kanvan-task__edit{
        display: none;
      }
      .ninjadash-kanvan-task__editable{
        position: relative;
        .ninjadash-kanvan-task__edit{
          display: flex;
          position: absolute;
          left: -30px;
          top: -10px;
          z-index: 99999;
          width: calc(100% + 60px);
          border-radius: 4px;
          input{
            min-height: 58px;
          }
          button{
            padding: 0px 21.71px;
            height: 38px;
          }
          .ninjadash-kanvan-task__edit--right{
            .btn-delete{
              font-size: 12px;
              ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
              white-space: nowrap;
              background-color: ${({ theme }) =>
                theme.mainContent === 'lightMode' ? `${theme['dark-color']}` : `${theme['danger-color']}`};
              line-height: 2.6;
              display: flex;
              align-items: center;
              border-radius: 5px;
              padding: 0 8px;
              color: #fff;
              i,
              svg{
                color: #fff;
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 4px;
              }
            }
          }
        }
        .edit-kanban-task{
          margin-top: 10px;
        }
      }
    }
    
    .btn-addTask{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 40px);
      padding: 8px 0;
      text-align: center;
      border-radius: 4px;
      position: relative;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      background-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      svg,
      i,
      img{
        width: 16px;
        height: 16px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 3px;
      }
    }
    .btn-addColumn{
      padding: 10px;
      &.add-column-on{
        .btn-addColumn-inner{
          .btn-add{
            display: none;
          }
          .btn-addColumn-form{
            display: block;
          }
        }
      }
      .btn-add{
        display: flex;
        align-items: center;
        width: 100%;
        height: fit-content;
        border-radius: 5px;
        padding: 12px 20px;
        background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        svg,
        i,
        img{
          width: 16px;
          height: 16px;
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
        }
      }
      .btn-addColumn-inner{
        border-radius: 5px;
        background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
        .sDash-add-column-input{
          padding: 10px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          &:focus{
            outline: none;
          }
        }
      }
      .btn-addColumn-form{
        display: none;
        padding: 15px 20px 15px;
        .ninjadash-add-column-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
    }
  }
`;
const ChecklistWrap = Styled.div`
  .ninjadash-checklist-tasks__single{
    position: relative;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .35s;
    z-index: 2;
    &:before{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -12px;
      top: 0;
      width: calc(100% + 24px);
      height: 100%;
      content: '';
      background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
      opacity: 0;
      visibility: hidden;
      border-radius: 2px;
      z-index: -1;
    }
    &:hover{
      .btn-more{
        opacity: 1;
        visibility: visible;
      }
      &:before{
        opacity: 1;
        visibility: visible;
      }
    }
    .btn-more{
      display: flex;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      i,
      svg{
        color: #868EAE;
      }
    }
    .ant-checkbox-wrapper{
      align-items: flex-start;
      &.ant-checkbox-wrapper-checked{
        .ninjadash-task-label{
          position: relative;
          display: inline-block;
          text-decoration: line-through;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
      .ninjadash-task-label{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
  }
  .ninjadash-checklist-tasks-wrap{
    .addChecklistTask-wrap{
      .addChecklistTask-form{
        .add-checklistTask{
          padding: 8px 10px;
          margin-bottom: 12px;
        }
        .addChecklistTask-form-action{
          display: flex;
          align-items: center;
          a{
            line-height: 1;
            svg,
            i{
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
          }
          .btn-add{
            margin-right: 10px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
      .add-item{
        margin-top: 15px;
      }
    }
  }
`;

const BackShadow = Styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => (theme.rtl ? 'right' : 'left')};
  z-index: 9999;
  background: #00000080;
`;

export { KanvanBoardWrap, ChecklistWrap, BackShadow };
