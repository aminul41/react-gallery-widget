import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import { getImageSrc, camelize } from '../service';
import Image from './Image';
import Flex from './Flex';

const Gallery = ({ theme, bw }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = Array.from({ length: 5 }, (_, idx) => 
    getImageSrc({ bw, theme, idx })
  );

  const renderImage = (src, idx) => (
    <Image
      onClick={() => setCurrentImage(idx)}
      key={src}
      src={src}
      className={styles.image}
    />
  );

  return (
    <>
      <h3>{`Gallery name: ${camelize(theme)}`}</h3>
      <div className={styles.container}>
        <Flex>
          <Flex className={styles.all} column>
            {images.map(renderImage)}
          </Flex>
          <Flex className={styles.single}>
            {renderImage(images[currentImage])}
          </Flex>
        </Flex>
      </div>
    </>
  );
};

Gallery.propTypes = {
  theme: PropTypes.string.isRequired,
  bw: PropTypes.bool
};

export default Gallery;
