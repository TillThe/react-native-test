import { APP_LOADED, CONFIG_LOADED, USER_AUTHORIZED, CHARTS_LOADED, CHART_FAVORITE, CHART_LOADED, CHART_SELECTED, CHART_NEW, SELECT_PERIOD, SELECT_STEP } from './action.types';
import menu from '../data/menu';
import { getID } from '../service/index';
import moment from 'moment';

export const appLoaded = (loaded) => ({ type: APP_LOADED, loaded });
export const configLoad = ({loaded, config}) => ({ type: CONFIG_LOADED, configLoaded: loaded, config });

export const userAuthorized = ({ authorized, login }) => ({ 
  type: USER_AUTHORIZED,
  authorized,
  login: authorized ? login : ''
});

export const chartsLoaded = (charts) => ({ type: CHARTS_LOADED, charts });
export const chartSelect = ({selected, id}) => ({ type: CHART_SELECTED, selected, id });
export const chartFavorite = ({favorite, id}) => ({ type: CHART_FAVORITE, favorite, id });
export const chartLoad = ({loaded, id}) => ({ type: CHART_LOADED, loaded, id });
export const chartNew = () => ({ 
  type: CHART_NEW,
  ...menu,
  loaded: false,
  favorite: false,
  selected: true,
  id: getID()
});

export const selectPeriod = ({startDate, endDate, id}) => ({
  type: SELECT_PERIOD,
  startDate: (typeof startDate === 'string') ? startDate : (startDate instanceof Date) ? moment(startDate).format('YYYY-MM-DD') : startDate.format('YYYY-MM-DD'),
  endDate: (typeof endDate === 'string') ? endDate : (endDate instanceof Date) ? moment(endDate).format('YYYY-MM-DD') : endDate.format('YYYY-MM-DD'),
  id
});
export const selectStep = ({step, id}) => ({ type: SELECT_STEP, step: parseInt(step), id });