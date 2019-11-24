import { put, call, takeLatest, all } from 'redux-saga/effects';
import history from 'Libs/history';
import {apiDomainName} from 'Configs/domainName';
import ApiArticles from 'Apis/ApiArticles';
import * as articlesAction from 'Store/articles/articlesAction';

function* fetchAllArticles(action) {
	const apiArticles = new ApiArticles();
	const url = `${apiDomainName}/article-management/articles`;

	try {
		const res = yield call(apiArticles.getArticles, url);
		yield put(articlesAction.fetchAllArticlesSuccess(res.data.articles));
	}
	catch(error) {
		console.log(error);
	}
}

function* actionWatcher() {
	yield takeLatest(articlesAction.FETCH_ALL_ARTICLES, fetchAllArticles);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
