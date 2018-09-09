import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TabBarItem from './tabbar/TabBarItem'
import '../../../css/components/tabbar/TabBar.css'
import Config from '../../config/config';

class TabBar extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 生成UI
     */
    getContentUI() {
        let UI, UIs = [], tabBarConfig = Config.tabBarConfig;
        tabBarConfig.forEach((elm, idx) => {
            let isSelected = this.props.selectedIndex === elm.index;
            UI = <TabBarItem 
                key={idx} 
                isSelected={isSelected}
                index={elm.index}
                icon={elm.icon} 
                text={elm.text}   
                changeTabBarIndex={this.props.changeTabBarIndex}/>;
            UIs.push(UI);
        }); 
        return UIs;
    }
  
    render() {
        return (
            <div className="tab-bar">
                {this.getContentUI()}
            </div>
        )
    }
}
export default TabBar;
