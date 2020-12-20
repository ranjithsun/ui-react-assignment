import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;