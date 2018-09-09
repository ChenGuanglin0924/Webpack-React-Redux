import tabInitialState from '../state/tabbarInitialState';
import * as type from '../../constants/ActionTypes';

const changeTabReducer = (state = tabInitialState, action) => {
    switch (action.type) {
        // 匹配type来执行对应的方法，action中返回对应的type，这里就会执行对应的方法
        case type.CHANGE_TABBAR_INDEX:
            state = Object.assign({}, state, {selectedIndex : action.tabBarIndex});
        return state;
            default:
        return state; 
    }
  };
  export default changeTabReducer;