import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {createArticle} from 'Store/articles/articlesAction';
import ArticleEditor from 'Components/common/ArticleEditor/ArticleEditor';

const ArticleCreate = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const submit = (article) => {
		dispatch(createArticle(article));
	}

	const cancel = () => {
		const answer = window.confirm("確定放棄修改？")
		if (answer) {
			history.replace('/');
		}
	}

	return(
		<div>
			<ArticleEditor submit={submit} cancel={cancel}/>
		</div>
	);
};

export default ArticleCreate;
