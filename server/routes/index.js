// import { isLoggedIn } from "../utils/util";
const { truthy, allOf, each } = require('aid.js');
const fs = require('fs');
const path = require('path');
const dirName = path.resolve('./');
const express = require('express');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const React = require('react');
const { App } = require('../../client/components/App');

// index router
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('*', (req, res) => {
  let contents = renderToString(<App />);

  try {
    const indexTmpl = fs.readFileSync(path.resolve(dirName, './public/html/index.html'), { encoding: 'utf8' });
    const page = indexTmpl.replace('<div id="root"></div>', `<div id="root">${contents}</div>`);
    res.send(page);
  } catch (error) {
    console.log('indexRouter: renderFullPage error :', error);
  } finally {
    //
  }
});

/*
router.get('*', (req, res, next) => {
  // TODO: SSR
  const sheet = new ServerStyleSheet();
  const currentRoute = routes.find(route => matchPath(req.baseUrl, route)) || {};

  let store = createStore(rootReducer);
  let preloadedState = store.getState();
  let contents = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.baseUrl}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    )
  );

  let axiosRequest = currentRoute?.fetchDatas;
  if (axiosRequest) {
    console.log('indexRouter: need to fetch datas for SSR');
    try {
      axiosRequest()
        .then(responses => {
          each(responses, response => {
            const pathParts = response?.config?.url?.match(/\/([\w\d]+)(\.json)?$/);
            const key = pathParts?.length ? pathParts[1] : '';

            switch (key) {
              case 'careers':
              case 'awards':
              case 'works':
                if (preloadedState[key] && preloadedState[key].data) preloadedState[key].data = response.data;
                break;
            }
          });

          store = createStore(rootReducer, preloadedState);

          contents = renderToString(
            sheet.collectStyles(
              <StaticRouter location={req.baseUrl}>
                <Provider store={store}>
                  <App />
                </Provider>
              </StaticRouter>
            )
          );

          renderFullPage(res, contents, preloadedState, sheet);
        })
        .catch(error => {
          console.log('indexRouter: fetchDatas error :', error);
          renderFullPage(res, contents, preloadedState, sheet);
        });
    } catch (error) {
      console.log('indexRouter: axiosRequest error :', error);
      renderFullPage(res, contents, preloadedState, sheet);
    }
  } else {
    console.log('indexRouter: do not need to fetch datas for SSR');
    renderFullPage(res, contents, preloadedState, sheet);
  }
});
*/

function renderFullPage(res, contents, preloadedState, sheet) {
  try {
    const styleTags = sheet?.getStyleTags() || '';
    const indexTmpl = fs.readFileSync(path.resolve(dirName, './public/html/index.html'), { encoding: 'utf8' });
    const page = indexTmpl
      .replace('</head>', `${styleTags}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${contents}</div>`)
      .replace(
        'window.__PRELOADED_STATE__',
        `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`
      );

    res.send(page);
  } catch (error) {
    console.log('indexRouter: renderFullPage error :', error);
  } finally {
    sheet.seal();
  }
}

module.exports = router;
