import React from 'react';
import PropTypes from 'prop-types';

const Flex = ({ column, children, style = {}, ...props }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: column ? 'column' : undefined,
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

Flex.propTypes = {
  column: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object
};

export default Flex;
