import _ from 'lodash';
import {
	ADD_ARTICLE_SUCCESS,
	FETCH_ALL_ARTICLES_SUCCESS,
	FETCH_ARTICLE_SUCCESS,
	UPDATE_ARTICLE_SUCCESS,
} from 'Store/articles/articlesAction';

const initState = {
	articles: [],
};

export default function articles(state = initState, action) {
	switch (action.type) {
		case ADD_ARTICLE_SUCCESS:
			return {
				...state,
				articles: [...state.articles, action.payload.article],
			};
		case FETCH_ALL_ARTICLES_SUCCESS:
			return {
				...state,
				articles: action.payload.articles,
			};
		case FETCH_ARTICLE_SUCCESS:
			return {
				...state,
				article: action.payload.article,
			};
		case UPDATE_ARTICLE_SUCCESS:
			return {
				...state,
				articles: state.articles.map((article) =>
					article.id === action.payload.article.id ? action.payload.article : article
				),
			};
		default:
			return state;
	}
}
