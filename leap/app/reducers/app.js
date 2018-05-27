import { APP_LOADED, CONFIG_LOADED } from '../actions/action.types';
import menu from '../data/menu';

const initialStore = {
  loaded: false,
  configLoaded: false,
  config: {
    
  }
};

export default (state = initialStore, action = {}) => {
	switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        loaded: action.loaded
      };
    case CONFIG_LOADED:
      return {
        ...state,
        configLoaded: action.configLoaded,
        config: action.config
      };

		default:
			return state
	}
};