import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllArticles } from 'Store/articles/articlesAction';
import DateFormat from 'Libs/DateFormat';
import {defaultCoverPhoto} from 'Configs/coverPhotos';
import {runArticleSeed} from 'Seeds/generateData';
import { scrollToTop } from 'Libs/scroll';

const ArticleManager = () => {
	const dispatch = useDispatch();
	const articles = useSelector(state => {
		return state.articlesReducer.articles
	});

	const getAllArticles = () => {
		dispatch(fetchAllArticles());
	};

	useEffect(() => {
		runArticleSeed();
		scrollToTop();
		getAllArticles();
	},[]);

	const formatDate = (date)=>{
		const dateFormat = new DateFormat();
		dateFormat.init(date);
		return dateFormat.getBritishFormat();
	};

	const renderArticleList = () => {
		let history = useHistory();
		return articles.map((article)=>{
			const imgSrc = article.coverPhoto || defaultCoverPhoto;
			return (
				<div className="col-12 col-sm-6 col-lg-4 mb-3" key={`${article.id}-wrap`}>
					<div className="card">
						<img src={imgSrc} className="card-img-top card-height-md" alt="cover photo" key={`${article.id}-img`}/>
						<div className="card-body">
							<h5 className="card-title" key={`${article.id}-subject`}>{article.subject}</h5>
							<p className="card-subtitle text-muted mb-5" key={`${article.id}-created_at`}>{`Posted on ${formatDate(article.created_at)}`}</p>
							<button className="btn btn-outline-primary col-12 col-sm-3" onClick={()=>history.push(`article/${article.id}/${article.subject}`)}>詳情</button>
						</div>
					</div>
				</div>
			);
		});
	}

	return(
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<h1>ArticleManager</h1>
				<Link className="d-flex align-items-center no-underline" to="/article/create">
					<i className="fa-2x fas fa-plus-circle d-none d-block d-lg-none" />
					<i className="fa-lg fas fa-plus-circle d-none d-lg-block" />
					<span className="ml-2 d-none d-lg-block">新增文章</span>
				</Link>
			</div>

			<div className="mt-3 d-flex flex-wrap align-items-center">
				{renderArticleList()}
			</div>
		</div>
	);
};

export default ArticleManager;