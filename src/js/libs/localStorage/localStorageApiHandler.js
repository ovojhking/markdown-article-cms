import ArticlesController from './ArticlesController';

function localStorageApiHandler(type, url, data){
    const articlesController = new ArticlesController();

    switch(type) {
        case 'get':
            if(url === '/article-management/articles'){
                return articlesController.readAll();
            }else if(url.includes('/article-management/article')){
                const path = url.split('/');
                const id = path[path.length-1]
                return articlesController.read(id);
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
