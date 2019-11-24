import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticle, updateArticle } from 'Store/articles/articlesAction';

const ArticleEdit = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const article = useSelector(state => {
		console.log('state:  ', state);
		return state.articlesReducer.article
	});
	const getArticle = () => {
		dispatch(fetchArticle(id));
	};

	useEffect(() => {
		getArticle();
	},[]);

	return (
		<div>
			ArticleEdit
		</div>
	);
};

export default ArticleEdit;