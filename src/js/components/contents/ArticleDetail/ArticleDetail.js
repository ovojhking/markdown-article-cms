import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticle } from 'Store/articles/articlesAction';
import ReactMarkdown from 'react-markdown';
import { scrollToTop } from 'Libs/scroll';

const ArticleDetail = () => {
	const { id, subject } = useParams();
	const dispatch = useDispatch();
	const article = useSelector(state => {
		return state.articlesReducer.article
	});
	const getArticle = () => {
		dispatch(fetchArticle(id));
	};

	useEffect(() => {
		scrollToTop();
		getArticle();
	},[]);

	return(
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<h1 className="overflow-two-line-hidden">{subject}</h1>
				{ article && article.id === id ? (
					<Link className="d-flex align-items-center no-underline" to={`/article/${article.id}/edit`}>
						<i className="fa-2x fas fa-edit d-none d-block d-lg-none" />
						<i className="fa-lg fas fa-edit d-none d-lg-block" />
						<span className="ml-2 d-none d-lg-block">編輯</span>
					</Link>
				):(
					<div className="d-flex align-items-center">
						<i className="fa-2x fas fa-edit d-none d-block d-lg-none" />
						<i className="fas fa-edit d-none d-lg-block" />
						<span className="ml-2 d-none d-lg-block">編輯</span>
					</div>
				)}
			</div>
			<div className="mt-3 p-3 border border-partial-light">
				{ article && article.id === id ? (
					<ReactMarkdown className="overflow-auto" source={article.content} escapeHtml={false}/>
				):(
					<div> loading... </div>
				)}
			</div>
		</div>
	);
};

export default ArticleDetail;
