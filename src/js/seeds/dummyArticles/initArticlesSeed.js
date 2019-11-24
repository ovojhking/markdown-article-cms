import dummy1 from './dummy1';
import dummy2 from './dummy2';
import dummy3 from './dummy3';
import dummy4 from './dummy4';
import dummy5 from './dummy5';
import dummy6 from './dummy6';

const dummyArticlesStore = ()=>{
    const list = [];
    list.push(dummy1());
    list.push(dummy2());
    list.push(dummy3());
    list.push(dummy4());
    list.push(dummy5());
    list.push(dummy6());
    return list;
}

export {dummyArticlesStore};