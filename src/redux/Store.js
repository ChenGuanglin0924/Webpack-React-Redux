import { createStore, applyMiddleware } from 'redux'; //redux里生成store的方法
import thunk from 'redux-thunk'; //异步中间件，处理异步action的
import rootReducer from './RootReducer.js';//根reducer
import { createLogger } from 'redux-logger';

const middleWare = process.env.NODE_ENV === 'development' ? [thunk, createLogger()] : [thunk];

let store = createStore(
    rootReducer,
    applyMiddleware(...middleWare)
);
export default store;