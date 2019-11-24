import LocalStorageRequest from 'Libs/localstorage/LocalStorageRequest';

const ApiArticles = class ApiArticles {
	getArticles(url) {
		const localStorageRequest = new LocalStorageRequest();
		return localStorageRequest.get(url);
	}
	postArticles(url, data) {
		const localStorageRequest = new LocalStorageRequest();
		return localStorageRequest.post(url, data);
	}
};

export default ApiArticles;
