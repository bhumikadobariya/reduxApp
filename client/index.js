import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import rootReducer  from './rootReducer'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose} from 'redux';

import routes from './routes';

// const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
// const store = createStoreWithMiddleware(rootReducer);
// render(<App />, document.getElementById('app'));
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);

