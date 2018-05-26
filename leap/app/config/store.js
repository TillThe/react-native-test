import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import PropTypes from 'prop-types';

import allReducers from '../reducers/index';
import appReducer from '../reducers/app';
import userReducer from '../reducers/user';


const middleware = [];
if (process.env.NODE_ENV === 'development') {
  console.log('Dev mode: logs on');
  middleware.push(logger);
}

const createCustomStore = ({ appStore, userStore }) => {
  const reducers = combineReducers({
    ...allReducers,
    // app: (appStor, state) => appReducer(appStor = appStore, state),
    user: (userStor, state) => userReducer(userStor = userStore, state)
  });

  return createStore(reducers, applyMiddleware(...middleware));
}

createCustomStore.propTypes = {
  appStore: PropTypes.obj,
  userStore: PropTypes.obj
};

export default createCustomStore;
