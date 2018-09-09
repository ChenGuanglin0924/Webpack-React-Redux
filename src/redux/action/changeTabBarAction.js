import * as type from '../../constants/ActionTypes.js';
export function changeTabBarIndex(index){
    return {
        tabBarIndex : index,
        type : type.CHANGE_TABBAR_INDEX
    }
}