import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllArticles } from 'Store/articles/articlesAction';
import {runArticleSeed} from 'Seeds/generateData';

const ArticleManager = () => {
	const dispatch = useDispatch();
	const articles = useSelector(state => {
		console.log('state:  ', state);
		return state.articlesReducer.articles
	});

	const getAllArticles = () => {
		dispatch(fetchAllArticles());
	};

	useEffect(() => {
		runArticleSeed();
		getAllArticles();
	},[]);

	return(
		<div>
			<h1>ArticleManager</h1>
		</div>
	);
};

export default ArticleManager;