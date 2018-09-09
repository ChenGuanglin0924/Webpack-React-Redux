import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/Store.js';

import Application from './components/Application';

//开始初始化
function startRender(){
    render(
        <Provider store={store}>
            <Application />
        </Provider>,
        document.querySelector('.app-root')
    );
}
startRender();