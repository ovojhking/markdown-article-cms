import ArticlesController from './ArticlesController';

function localStorageApiHandler(type, url, data){
    const articlesController = new ArticlesController();

    switch(type) {
        case 'get':
            if(url === '/article-management/articles'){
                return articlesController.readAll();
            }
            break;
        case 'post':
            if(url === '/article-management/article'){
                return articlesController.create(data);
            }
            break;
        default:
            break;
    }
}

export default localStorageApiHandler;
