import localStorageApiHandler from './localStorageApiHandler';

const LocalStorageRequest = class LocalStorageRequest {
    constructor() {

    }
    get(url) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const data = localStorageApiHandler('get', url);
                resolve({data});
            }, 300);
        })
    }
    post(url, data) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const nextData = localStorageApiHandler('post', url, data);
                resolve({data: nextData});
            }, 300);
        })
    }
    put(url, data) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const nextData = localStorageApiHandler('put', url, data);
                resolve({data: nextData});
            }, 300);
        })
    }
};

export default LocalStorageRequest;
