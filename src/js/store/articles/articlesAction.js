export const FETCH_ALL_ARTICLES = 'FETCH_ALL_ARTICLES';
export const FETCH_ALL_ARTICLES_SUCCESS = 'FETCH_ALL_ARTICLES_SUCCESS';

export const fetchAllArticles = () => ({ type: FETCH_ALL_ARTICLES, payload: {} });
export const fetchAllArticlesSuccess =  (articles) => {
	return {
		type: FETCH_ALL_ARTICLES_SUCCESS,
		payload: {
			articles
		}
	}
};