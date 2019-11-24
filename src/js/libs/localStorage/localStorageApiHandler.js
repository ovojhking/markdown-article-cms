import ArticlesController from './ArticlesController';

function localStorageApiHandler(type, url, data){
    const articlesController = new ArticlesController();

    switch(type) {
        case 'get':
            if(url === '/article-management/articles'){
                return articlesController.readAll();
            }
            break;
        default:
            break;
    }
}

export default localStorageApiHandler;
