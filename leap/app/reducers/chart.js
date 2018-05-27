import { CHARTS_LOADED, CHART_LOADED, CHART_NEW, CHART_FAVORITE, CHART_SELECTED, SELECT_PERIOD, SELECT_STEP } from '../actions/action.types';

const initialStore = [];

export default (state = initialStore, action = {}) => {
  const i = state.indexOf(state.find((x) => x.id === action.id));

  if (i === -1 && action.type !== CHART_NEW && action.type !== CHARTS_LOADED) return state;

  const newState = [].concat(state);

	switch (action.type) {
    case CHARTS_LOADED:
      return [].concat(action.charts);

    case CHART_FAVORITE:
      newState[i].favorite = action.favorite;

      return newState;

    case CHART_LOADED:
      newState[i].loaded = action.loaded;

      return newState;

    case CHART_SELECTED:
      if (action.selected) {
        newState.forEach((x) => { x.selected = false });
      } else {
        // const newSelected = newState.find((x) => x.id !== action.id);
      }
      newState[i].selected = action.selected;

      return newState;

    case CHART_NEW:
      newState.push(...action);
      delete newState[newState.length - 1].type;

      return newState;

    case SELECT_PERIOD:
      newState[i].startDate = action.startDate;
      newState[i].endDate = action.endDate;

      return newState;

    case SELECT_STEP:
      newState[i].step = action.step;
      
      return newState;

		default:
			return state
	}
};