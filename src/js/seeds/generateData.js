import {dummyArticlesStore} from './dummyArticles/initArticlesSeed';
import uuid from 'uuid';

function runArticleSeed() {
    if(!localStorage.getItem('articles')){
        let articleList = dummyArticlesStore().map((article)=>{
            const id = uuid.v4();
            return {id, ...article};
        });
        articleList = JSON.stringify(articleList);
        localStorage.setItem('articles', articleList);
    }
}

export {runArticleSeed};