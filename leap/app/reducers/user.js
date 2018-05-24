import { USER_AUTHORIZED } from '../actions/action.types';

const initialStore = {
  authorized: false,
  login: '',
  name: '',
  client: ''
};

export default (state = initialStore, action = {}) => {
	switch (action.type) {
    case USER_AUTHORIZED:
      return {
        ...state,
        authorized: action.authorized,
        login: action.login
      };
		default:
			return state
	}
};