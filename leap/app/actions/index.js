import { APP_LOADED, USER_AUTHORIZED, CHART_FAVORITE, CHART_LOADED, CHART_SELECTED, CHART_NEW } from './action.types';
import menu from '../data/menu';
import { getID } from '../service/index';

export const appLoaded = (loaded) => ({ type: APP_LOADED, loaded });

export const userAuthorized = ({ authorized, login }) => ({ 
  type: USER_AUTHORIZED,
  authorized,
  login: authorized ? login : ''
});

export const chartSelect = (selected) => ({ type: CHART_SELECTED, selected });
export const chartFavorite = (favorite) => ({ type: CHART_FAVORITE, favorite });
export const chartLoad = (loaded) => ({ type: CHART_LOADED, loaded });
export const chartNew = () => ({ 
  type: CHART_NEW,
  ...menu,
  loaded: false,
  favorite: false,
  selected: true,
  id: getID()
});