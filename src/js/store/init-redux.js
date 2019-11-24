import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas';
import articlesReducer from 'Store/articles/articlesReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
	articlesReducer,
});

const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
