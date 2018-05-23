import { APP_LOADED } from '../actions/action.types';

const initialStore = {
  loaded: false
};

export default (state = initialStore, action = {}) => {
	switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        loaded: action.loaded
      };

		default:
			return state
	}
};