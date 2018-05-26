import { CHART_NEW, CHART_FAVORITE, CHART_LOADED, CHART_SELECTED, CHARTS_LOADED } from '../actions/action.types';

const initialStore = [];

export default (state = initialStore, action = {}) => {
  const i = state.find((x) => x.id === action.id);

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

		default:
			return state
	}
};