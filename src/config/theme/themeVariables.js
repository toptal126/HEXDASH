import themes from './themeConfigure';

const { lightMode, darkMode } = themes;

const primaryColor = '#8231D3';
const primaryHover = '#6726A8';
const secondaryColor = '#5840FF';
const secondaryHover = '#3520C8';
const linkColor = '#1890ff';
const linkHover = '#0d79df';
const successColor = '#01B81A';
const successHover = '#0D811D';
const warningColor = '#FA8B0C';
const warningHover = '#D9790A';
const errorColor = '#FF0F0F';
const errorHover = '#CB0000';
const infoColor = '#00AAFF';
const infoHover = '#0787C7';
const darkColor = '#0A0A0A';
const darkHover = '#272525';
const grayColor = '#404040';
const grayHover = '#585858';
const lightColor = '#747474';
const lightHover = '#747474';
const whiteColor = '#ffffff';
const whiteHover = '#ADB5D9';
const dangerColor = '#FF0F0F';
const dangerHover = '#CB0000';
const extraLightColor = '#A0A0A0';
const extraLightHover = '#ADB5D9';
const headingColor = 'rgba(0, 0, 0, 0.85)';
const dashColor = '#E3E6EF';
const borderLight = '#F1F2F6';
const borderNormal = '#E3E6EF';
const borderDeep = '#C6D0DC';
const bgGrayLight = '#F8F9FB';
const bgGrayNormal = '#F4F5F7';
const bgGrayDeep = '#EFF0F3';
const lightGrayColor = '#868EAE';
const sliderRailColor = 'rgba(130,49,211,.20)';
const graySolid = '#9299b8';
const pinkColor = '#F63178';
const textColor = '#666D92';
const btnlg = '50px';
const btnsm = '38px';
const btnxs = '32px';

const theme = {
  lightMode,
  darkMode,
  'primary-color': primaryColor, // primary color for all components
  'primary-hover': primaryHover, // primary Hover color for all components
  'secondary-color': secondaryColor, // secondary color for all components
  'secondary-hover': secondaryHover, // secondary Hover color for all components
  'link-color': linkColor, // link color
  'link-hover': linkHover, // link Hover color
  'success-color': successColor, // success state color
  'success-hover': successHover, // success Hover state color
  'warning-color': warningColor, // warning state color
  'warning-hover': warningHover, // warning Hover state color
  'error-color': errorColor, // error state color
  'error-hover': errorHover, // error Hover state color
  'info-color': infoColor, // info state color
  'info-hover': infoHover, // info Hover state color
  'dark-color': darkColor, // Dark state color
  'dark-hover': darkHover, // Dark Hover state color
  'gray-color': grayColor, // Gray state color
  'gray-hover': grayHover, // Gray Hover state color
  'light-color': lightColor, // Light state color
  'light-hover': lightHover, // Light Hover state color
  'white-color': whiteColor, // White state color
  'white-hover': whiteHover, // White Hover state color
  'danger-color': dangerColor, // Danger state color
  'danger-hover': dangerHover, // Danger Hover state color
  white: whiteColor,
  black: '#000000',
  pink: pinkColor,
  'dash-color': dashColor, // info state color
  'extra-light-color': extraLightColor, // Extra Light state color
  'extra-light-hover': extraLightHover, // Extra Light state color
  'font-family': "'Jost', sans-serif",
  'font-size-base': '15px', // major text font size
  'heading-color': headingColor, // heading text color
  'text-color': textColor, // major text color
  'text-color-secondary': grayColor, // secondary text color
  'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
  'border-radius-base': '4px', // major border radius
  'border-color-base': '#d9d9d9', // major border color
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
  'border-color-light': borderLight,
  'border-color-normal': borderNormal,
  'border-color-deep': borderDeep,
  'bg-color-light': bgGrayLight,
  'bg-color-normal': bgGrayNormal,
  'bg-color-deep': bgGrayDeep,
  'light-gray-color': lightGrayColor,
  'gray-solid': graySolid,
  'btn-height-large': btnlg,
  'btn-height-small': btnsm,
  'btn-height-extra-small': btnxs,
  'btn-default-color': darkColor,

  // cards
  'card-head-background': '#ffffff',
  'card-head-color': darkColor,
  'card-background': '#ffffff',
  'card-head-padding': '16px',
  'card-padding-base': '12px',
  'card-radius': '10px',
  'card-shadow': '0 5px 20px rgba(146,153,184,0.03)',

  // Layout
  'layout-body-background': '#F4F5F7',
  'layout-header-background': '#ffffff',
  'layout-footer-background': '#fafafa',
  'layout-header-height': '64px',
  'layout-header-padding': '0 15px',
  'layout-footer-padding': '24px 15px',
  'layout-sider-background': '#ffffff',
  'layout-trigger-height': '48px',
  'layout-trigger-background': '#002140',
  'layout-trigger-color': '#fff',
  'layout-zero-trigger-width': '36px',
  'layout-zero-trigger-height': '42px',
  // Layout light theme
  'layout-sider-background-light': '#fff',
  'layout-trigger-background-light': '#fff',
  'layout-trigger-color-light': 'rgba(0, 0, 0, 0.65)',

  // PageHeader
  'page-header-padding': '24px',
  'page-header-padding-vertical': '16px',
  'page-header-padding-breadcrumb': '12px',
  'page-header-back-color': '#000',
  'page-header-ghost-bg': 'inherit',
  'page-header-heading-sub-title': '15px',

  // Popover body background color
  'popover-color': darkColor,

  // alert
  'alert-success-border-color': successColor,
  'alert-success-bg-color': successColor + 15,
  'alert-error-bg-color': errorColor + 15,
  'alert-warning-bg-color': warningColor + 15,
  'alert-info-bg-color': infoColor + 15,

  // radio btn
  'radio-button-checked-bg': primaryColor,

  // gutter width
  'grid-gutter-width': 25,

  // skeleton
  'skeleton-color': borderLight,

  // slider
  'slider-rail-background-color': sliderRailColor,
  'slider-rail-background-color-hover': sliderRailColor,
  'slider-track-background-color': primaryColor,
  'slider-track-background-color-hover': primaryColor,
  'slider-handle-color': primaryColor,
  'slider-handle-size': '16px',

  // input
  'input-border-color': borderNormal,
  'input-height-base': '40px',
  'input-height-sm': '30px',
  'input-height-lg': '50px',
  'input-padding-horizontal': '20px',
  'input-padding-horizontal-lg': '20px',
  'input-padding-vertical-base': '12px',

  // rate
  'rate-star-color': warningColor,
  'rate-star-size': '13px',

  // Switch
  'switch-min-width': '35px',
  'switch-sm-min-width': '30px',
  'switch-height': '18px',
  'switch-sm-height': '15px',

  // result
  'result-title-font-size': '20px',
  'result-subtitle-font-size': '12px',
  'result-icon-font-size': '50px',

  // tabs
  'tabs-horizontal-padding': '12px 15px',
  'tabs-horizontal-margin': '0',

  // list
  'list-item-padding': '10px 24px',

  // Tags
  'tag-default-bg': '#EFF0F3',
  'tag-default-color': darkColor,
  'tag-font-size': '11px',

  // Progress
  'progress-default-color': primaryColor,
  'progress-text-font-size': '14px',
};

const themeColor = {
  lightMode,
  darkMode,
  'primary-color': primaryColor, // primary color for all components
  'primary-hover': primaryHover, // primary Hover color for all components
  'secondary-color': secondaryColor, // secondary color for all components
  'secondary-hover': secondaryHover, // secondary Hover color for all components
  'link-color': linkColor, // link color
  'link-hover': linkHover, // link Hover color
  'success-color': successColor, // success state color
  'success-hover': successHover, // success Hover state color
  'warning-color': warningColor, // warning state color
  'warning-hover': warningHover, // warning Hover state color
  'error-color': errorColor, // error state color
  'error-hover': errorHover, // error Hover state color
  'info-color': infoColor, // info state color
  'info-hover': infoHover, // info Hover state color
  'dark-color': darkColor, // Dark state color
  'dark-hover': darkHover, // Dark Hover state color
  'gray-color': grayColor, // Gray state color
  'gray-hover': grayHover, // Gray Hover state color
  'light-color': lightColor, // Light state color
  'light-hover': lightHover, // Light Hover state color
  'white-color': whiteColor, // White state color
  'white-hover': whiteHover, // White Hover state color
  'danger-color': dangerColor, // Danger state color
  'danger-hover': dangerHover, // Danger Hover state color
  white: whiteColor,
  black: '#000000',
  pink: pinkColor,
  'dash-color': dashColor, // info state color
  'extra-light-color': extraLightColor, // Extra Light state color
  'extra-light-hover': extraLightHover, // Extra Light state color
  'heading-color': headingColor, // heading text color
  'text-color': textColor, // major text color
  'text-color-secondary': grayColor, // secondary text color
  'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
  'border-radius-base': '4px', // major border radius
  'border-color-base': '#d9d9d9', // major border color
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
  'border-color-light': borderLight,
  'border-color-normal': borderNormal,
  'border-color-deep': borderDeep,
  'bg-color-light': bgGrayLight,
  'bg-color-normal': bgGrayNormal,
  'bg-color-deep': bgGrayDeep,
  'light-gray-color': lightGrayColor,
  'btn-height-large': btnlg,
  'btn-height-small': btnsm,
  'btn-height-extra-small': btnxs,
};

export { theme, themeColor };
