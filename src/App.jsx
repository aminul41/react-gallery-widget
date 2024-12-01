import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { themes } from './service';
import Gallery from './components/Gallery';
import GalleryList from './components/GalleryList';

const App = ({ 
  theme = 'sports',
  bw = false,
  userName = 'My',
  type = 'list',
  backToList = 'Back to list'
}) => {
  return (
    <div className="App">
      <div>
        <h2>{`Welcome to ${userName}'s galleries`}</h2>
        {type === 'gallery' ? (
          <Gallery theme={theme} bw={bw} />
        ) : (
          <GalleryList
            bw={bw}
            backToList={backToList}
          />
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.oneOf(themes),
  bw: PropTypes.bool,
  userName: PropTypes.string,
  type: PropTypes.oneOf(['list', 'gallery']),
  backToList: PropTypes.string
};

export default App;
