import React, {useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllArticles } from 'Store/articles/articlesAction';
import {runArticleSeed} from 'Seeds/generateData';
import DateFormat from 'Libs/DateFormat';
import {defaultCoverPhoto} from 'Configs/coverPhotos';

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
		getAllArticles();
	},[]);

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

	const formatDate = (date)=>{
		const dateFormat = new DateFormat();
		dateFormat.init(date);
		return dateFormat.getBritishFormat();
	};

	return(
		<div>
			<h1>ArticleManager</h1>
			<div className="mt-3 d-flex flex-wrap align-items-center">
				{renderArticleList()}
			</div>
		</div>
	);
};

export default ArticleManager;