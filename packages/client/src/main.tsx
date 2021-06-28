import 'minireset.css';

import whyDidYouRender from '@welldone-software/why-did-you-render';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDom from 'react-router-dom';

import * as App from './app/app';
import { createStore } from './app/ui/store';
import { ErrorBoundary } from './ErrorBoundary';

const store = createStore();

const render = () => {
  ReactDOM.render(
    <ErrorBoundary>
      <React.StrictMode>
        <ReactRouterDom.BrowserRouter>
          <ReactRedux.Provider store={store}>
            <App.Component />
          </ReactRedux.Provider>
        </ReactRouterDom.BrowserRouter>
      </React.StrictMode>
    </ErrorBoundary>,
    document.getElementById('root')
  );
};

// if (process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React, {
//     diffNameColor: 'grey',
//     diffPathColor: 'orange',
//     logOnDifferentValues: true,
//     titleColor: 'red',
//     trackAllPureComponents: true,
//     trackExtraHooks: [[require('react-redux/lib'), 'useSelector']],
//     trackHooks: true,
//   });
// }

render();
