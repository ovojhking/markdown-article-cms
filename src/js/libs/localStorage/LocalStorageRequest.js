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
};

export default LocalStorageRequest;
