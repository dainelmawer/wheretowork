import React from 'react';
import PropTypes from 'prop-types';
import layout from '../css/layout.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <main className={layout.container}>
      { children }
    </main>
  );
};

Layout.defaultProps = {
  children: 'Hello, world',
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
