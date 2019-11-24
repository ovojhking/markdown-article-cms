import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'Libs/history';
import Header from 'Components/common/partials/Header';
import ArticleCreate from 'Components/contents/ArticleCreate/ArticleCreate';
import ArticleEdit from 'Components/contents/ArticleEdit/ArticleEdit';
import ArticleManager from 'Components/contents/ArticleManager/ArticleManager';
import ArticleDetail from 'Components/contents/ArticleDetail/ArticleDetail';

export default () => {
	return (
		<Router history={history}>
			<Header />
			<div className="container-fix-top d-flex justify-content-center">
				<div className="col-12 col-lg-10 col-xl-10 p-4">
					<Switch>
						<Route path="/" component={ArticleManager} exact />
						<Route path="/article/:id/edit" exact component={ArticleEdit} />
						<Route path="/article/:id/:subject" exact component={ArticleDetail} />
						<Route path="/article/create" exact component={ArticleCreate} />
						<Route render={() => (<Redirect to="/" />)}/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};
