import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

const Image = ({ onClick, src, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} ${styles.main}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

Image.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Image;
