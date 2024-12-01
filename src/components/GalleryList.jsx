import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Flex from './Flex';
import Gallery from './Gallery';
import Image from './Image';
import { getImageSrc, themes, camelize } from '../service';
import styles from './GalleryList.module.css';

const MODES = {
  GALLERY: 'gallery',
  LIST: 'list'
};

const GalleryList = ({ backToList, bw }) => {
  const [theme, setTheme] = useState();
  const [mode, setMode] = useState(MODES.LIST);

  const renderSingle = () => (
    <Flex column style={{ alignItems: 'center' }}>
      <label
        onClick={() => setMode(MODES.LIST)}
        style={{ width: '100%', textAlign: 'left', cursor: 'pointer' }}
      >
        {`⇦ ${backToList}`}
      </label>
      <Gallery bw={bw} theme={theme} />
    </Flex>
  );

  const renderMultiple = () => (
    <Flex style={{ flexWrap: 'wrap' }} className={styles.container}>
      {themes.map(theme => {
        const src = getImageSrc({ bw, theme, idx: 0 });
        return (
          <Flex className={styles.imageContainer} key={src}>
            <Image
              src={src}
              className={styles.image}
              onClick={() => {
                setTheme(theme);
                setMode(MODES.GALLERY);
              }}
            />
            <label className={styles.label}>{camelize(theme)}</label>
          </Flex>
        );
      })}
    </Flex>
  );

  return (
    <Flex style={{ justifyContent: 'center' }}>
      {mode === MODES.GALLERY ? renderSingle() : renderMultiple()}
    </Flex>
  );
};

GalleryList.propTypes = {
  backToList: PropTypes.string.isRequired,
  bw: PropTypes.bool
};

export default GalleryList;
