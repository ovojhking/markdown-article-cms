import uuid from 'uuid';

const ArticlesController = class ArticlesController {	
	readAll() {
		const articles = JSON.parse(localStorage.getItem('articles')) || [];
		return {articles};
	}
};

export default ArticlesController;