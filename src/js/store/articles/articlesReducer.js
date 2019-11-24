import _ from 'lodash';
import {
	FETCH_ALL_ARTICLES_SUCCESS,
} from 'Store/articles/articlesAction';

const initState = {
	articles: [],
};

export default function articles(state = initState, action) {
	switch (action.type) {
		case FETCH_ALL_ARTICLES_SUCCESS:
			return {
				...state,
				articles: action.payload.articles,
			};
		default:
			return state;
	}
}
