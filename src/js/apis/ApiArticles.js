import LocalStorageRequest from 'Libs/localstorage/LocalStorageRequest';

const ApiArticles = class ApiArticles {
	getArticles(url) {
		const localStorageRequest = new LocalStorageRequest();
		return localStorageRequest.get(url);
	}
};

export default ApiArticles;
