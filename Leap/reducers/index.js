import { APP_LOADED } from '../actions/action.types';

export default (state = {}, action) => {
	switch (action.type) {
    case APP_LOADED:
      return Object.assign({}, state, {
        app: {
          loaded: action.loaded
        }
      });
		default:
			return state
	}
};
