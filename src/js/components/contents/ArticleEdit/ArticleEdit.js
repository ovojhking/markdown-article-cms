import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticle, updateArticle } from 'Store/articles/articlesAction';
import ArticleEditor from 'Components/common/ArticleEditor/ArticleEditor';

const ArticleEdit = () => {
	const history = useHistory();
	const { id } = useParams();
	const dispatch = useDispatch();
	const article = useSelector(state => {
		return state.articlesReducer.article
	});
	const getArticle = () => {
		dispatch(fetchArticle(id));
	};

	useEffect(() => {
		getArticle();
	},[]);


	const submit = (article) => {
		dispatch(updateArticle(id, article));
	}

	const cancel = () => {
		const answer = window.confirm("確定放棄修改？")
		if (answer) {
			history.replace('/');
		}
	}

	return (
		<div>
			{ article && article.id === id ? (
				<ArticleEditor defaultArticle={article} submit={submit} cancel={cancel}/>
			):(
				<div> loading... </div>
			)}
		</div>
	);
};

export default ArticleEdit;