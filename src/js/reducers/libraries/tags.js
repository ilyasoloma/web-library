'use strict';

const { get, indexByKey } = require('../../utils');
const {
	RECEIVE_LIBRARY_SETTINGS,
	RECEIVE_TAGS_IN_COLLECTION,
} = require('../../constants/actions');

const tags = (state = {}, action) => {
	switch(action.type) {
		case RECEIVE_LIBRARY_SETTINGS:
			return {
				...state,
				...indexByKey(
					get(action.settings, 'tagColors.value', []),
					'name',
					({ name, ...values }) => ({ tag: name, ...values })
				)
			};
		case RECEIVE_TAGS_IN_COLLECTION:
			return {
				...state,
				...indexByKey(action.tags, 'tag')
			}
		default:
			return state;
	}
};

module.exports = tags;