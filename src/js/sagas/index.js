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

function* fetchArticle(action) {
	const apiArticles = new ApiArticles();
	const url = `${apiDomainName}/article-management/articles/${action.payload.id}`;

	try {
		const res = yield call(apiArticles.getArticles, url);
		yield put(articlesAction.fetchArticleSuccess(res.data.article));
	}
	catch(error) {
		console.log(error);
	}
}

function* createArticle(action) {
	const apiArticles = new ApiArticles();
	const url = `${apiDomainName}/article-management/article`;

	try {
		const res = yield call(apiArticles.postArticles, url, action.payload.article);
		yield put(articlesAction.createArticleSuccess(res.data.article));
		history.replace('/');
	}
	catch(error) {
		console.log(error);
	}
}

function* updateArticle(action) {
	const apiArticles = new ApiArticles();
	const url = `${apiDomainName}/article-management/articles/${action.payload.id}`;

	try {
		const res = yield call(apiArticles.putArticle, url, action.payload.data);
		yield put(articlesAction.updateArticleSuccess(res.data.article));
		history.replace(`/article/${action.payload.id}/${action.payload.data.subject}`);
	}
	catch(error) {
		console.log(error);
	}
}

function* actionWatcher() {
	yield takeLatest(articlesAction.FETCH_ALL_ARTICLES, fetchAllArticles);
	yield takeLatest(articlesAction.FETCH_ARTICLE, fetchArticle);
	yield takeLatest(articlesAction.ADD_ARTICLE, createArticle);
	yield takeLatest(articlesAction.UPDATE_ARTICLE, updateArticle);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
