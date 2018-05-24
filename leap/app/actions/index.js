import { APP_LOADED, USER_AUTHORIZED } from './action.types';

export const appLoaded = (loaded) => ({ type: APP_LOADED, loaded });
export const userAuthorized = ({ authorized, login }) => ({ 
  type: USER_AUTHORIZED,
  authorized,
  login: authorized ? login : ''
});
