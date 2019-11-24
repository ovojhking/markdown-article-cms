export const FETCH_ALL_ARTICLES = 'FETCH_ALL_ARTICLES';
export const FETCH_ALL_ARTICLES_SUCCESS = 'FETCH_ALL_ARTICLES_SUCCESS';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';

export const fetchAllArticles = () => ({ type: FETCH_ALL_ARTICLES, payload: {} });
export const fetchAllArticlesSuccess =  (articles) => {
	return {
		type: FETCH_ALL_ARTICLES_SUCCESS,
		payload: {
			articles
		}
	}
};

export const fetchArticle = (id) => ({ type: FETCH_ARTICLE, payload: {id} });
export const fetchArticleSuccess = (article) => {
	return {
		type: FETCH_ARTICLE_SUCCESS,
		payload: {
			article
		}
	}
};

export const createArticle = (article) => ({ type: ADD_ARTICLE, payload: {article} });
export const createArticleSuccess =  (article) => {
	return {
		type: ADD_ARTICLE_SUCCESS,
		payload: {
			article
		}
	}
};