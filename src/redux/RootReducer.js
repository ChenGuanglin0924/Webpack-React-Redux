import { combineReducers } from 'redux';
import changeTabBarReducer from './reducer/changeTabBarReducer.js'
// import layerGroupReducer from './reducer/LayerGroupReducer.js';
// import changeMapCenterReducer from './reducer/ChangeMapCenterReducer.js';
// import manageMarkerLayerReducer from './reducer/ManageMarkerLayerReducer.js';


/* 利用官方提供的combineReducers将所有reducer组合成一个 */
const rootReducer = combineReducers({
    changeTabBarReducer,
    // layerGroupReducer,
    // changeMapCenterReducer,
    // manageMarkerLayerReducer,
});

export default rootReducer;