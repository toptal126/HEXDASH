import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { H1 } from './style';
import config from '../../config/config';

const { theme } = config;

function Header({ name }) {
  return (
    <ThemeProvider theme={theme}>
      <H1>{name}</H1>
    </ThemeProvider>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
