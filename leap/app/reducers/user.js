import {  } from '../actions/action.types';

const initialStore = {
  authorized: false,
  login: '',
  name: '',
  client: ''
};

export default (state = initialStore, action = {}) => {
	switch (action.type) {

		default:
			return state
	}
};