import uuid from 'uuid';

const ArticlesController = class ArticlesController {
	create(data) {
		let articles = JSON.parse(localStorage.getItem('articles')) || [];
		const nowTime = new Date();
		const created_at = nowTime.toUTCString();
		const id = uuid.v4();
		const nextArticle = {id, ...data, created_at};
		articles.push(nextArticle);
		articles = JSON.stringify(articles);
		localStorage.setItem('articles', articles);
		return {article: nextArticle};
	}
	readAll() {
		const articles = JSON.parse(localStorage.getItem('articles')) || [];
		return {articles};
	}
};

export default ArticlesController;