import './img/favicon.ico';

// TODO: setting for normalize or reset styles.
import './css/app.css';

// # react
import React from 'react';
import { hydrate } from 'react-dom';

import ClientSideApp from './components/App';

(() => {
  'use strict';

  /*
   * initial setting
   */

  /*
   * implementation
   */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // dispatch action to store
    // store.dispatch(updateNaviIndex(1, 99));
    // window?.setTimeout(() => { store.dispatch(pong()); }, 1000);

    hydrate(<ClientSideApp />, document.getElementById('root'));
  }
})();

// TODO: check if hot module works properly.
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    console.log('module.hot.dispose is called.');
  });
}
